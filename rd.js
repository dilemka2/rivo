let burger = document.querySelector('.burgermenu');
let burgermenu = document.querySelector('.menuburger');
let span1 = document.querySelector('.span1');
let span2 = document.querySelector('.span2');
let span3 = document.querySelector('.span3');
let burgcounter = 0;

burger.addEventListener('click', function() {
    if (burgcounter == 0) {
        span2.style.opacity = '0';
        span1.style.transform = 'translate(2px, 2px) rotate(48deg)';
        span3.style.transform = 'translate(1px, -4px) rotate(-48deg)';
        burgermenu.style.transform = 'translateY(0)';
        burgcounter = 1;
    }
    else {
        span2.style.opacity = '1';
        span1.style.transform = 'translateY(-4px) rotate(0)';
        span3.style.transform = 'translateY(4px) rotate(0)';
        burgermenu.style.transform = 'translateY(-501px)';
        burgcounter = 0;
    }
})