
var TMF = {
    
    init: function() {
        
        var debug = document.createElement('h1');
        debug.innerHTML = 'tag my favorites, v1';
        document.body.appendChild( debug );
        
        chrome.bookmarks.getTree( function(BookmarkTreeNodes) {
            
            var debug = document.createElement('h1');
            debug.innerHTML = 'found ' + BookmarkTreeNodes[0].children.length.toString() + ' favs.';
            document.body.appendChild( debug );
            
            console.log( BookmarkTreeNodes );
            
            var ul = document.createElement('ul');
            TMF.showBookmarksRecursively( BookmarkTreeNodes[0].children, ul );
            document.body.appendChild( ul );
            
        });
        
    },
    
    showBookmarksRecursively: function( bookmarkTreeNodes, parentElement ) {
        for ( var i = 0; i < bookmarkTreeNodes.length; i++ ) {
            console.log( bookmarkTreeNodes[i] );
            if ( bookmarkTreeNodes[i].title ) {
                var li = document.createElement('li');
                li.innerHTML = bookmarkTreeNodes[i].title;
                parentElement.appendChild( li );
                if ( bookmarkTreeNodes[i].children ) {
                    var subParent = document.createElement('ul');
                    TMF.showBookmarksRecursively( bookmarkTreeNodes[i].children, subParent );
                    li.appendChild( subParent );
                }
            }
        }
    },
    
    requestKittens: function() {
        var req = new XMLHttpRequest();
        req.open("GET", this.kittensOnFlickr_, true);
        req.onload = this.showPhotos_.bind(this);
        req.send(null);
    }
    
};


//
document.addEventListener( 'DOMContentLoaded', function() {
    TMF.init();
    
    document.getElementById('go').onclick = function(e) {
        e.preventDefault();
        TMF.init();
    };
    
});
