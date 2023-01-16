const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const navs = $$('.nav-item');
const panes = $$('.pane-content');

const navActive = $('.nav .active');
const line = $('.nav .nav-line');

line.style.width = navs[0].offsetWidth + 'px';

navs.forEach((navItem, index) => {
    var pane = panes[index];
    navItem.onclick = function(){
        // navActive.classList.remove('active');
        $('.nav .active').classList.remove('active');
        $('.pane .active').classList.remove('active');
        
        line.style.left = this.offsetLeft + 'px';
        line.style.width = this.offsetWidth + 'px';

        this.classList.add('active');
        pane.classList.add('active');
        
    } 
});