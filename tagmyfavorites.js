
var TMF = {
    
    init: function() {
        var debug = document.createElement('h1');
        debug.innerHTML = 'testing';
        document.body.appendChild( debug );
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
});
