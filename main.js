var lis = document.getElementsByTagName('section')[0];
var mov = document.getElementsByClassName('light')[0];
lis.onmousemove = function() {
    document.onmousemove = function(e){
        mov.style.left = e.clientX - 200 + 'px';
        mov.style.top = e.clientY - 200 + 'px';
        
    }
}