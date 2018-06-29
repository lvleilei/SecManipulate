!function() {
    var html = document.documentElement;
    var setFontSize = function() {
        var width = html.offsetWidth;
        html.style.fontSize = width / 19.2+ 'px';
    };
    var timer;
    var setDelay = function() {
        return clearTimeout(timer), (timer = setTimeout(setFontSize, 150));
    }
    window.addEventListener('pageshow', function(evt) {
        return evt.persisted && setDelay();
    });
    window.addEventListener('resize', setDelay);
    setFontSize();
}();
setTimeout(function () {
    $('#nav .nav_left h2').on('click',function () {
        window.open('/index/cover/');
    });
},3000);
