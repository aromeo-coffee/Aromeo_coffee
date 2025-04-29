/*let nextbutton = document.getElementById('next') ;
let prevbutton = document.getElementById('prev') ;
let backbutton = document.getElementById('back') ;
let seemorebutton = document.querySelectorAll('.seemore') ;
let carousel = document.querySelector('.carousel') ;
let listhtml = document.querySelector('.carousel.list1') ;



nextbutton.onclick = function() {
     showslider('next') ;
} 
prevbutton.onclick = function() {
    showslider('prev') ;


    const showslider = (type) => {
    let items = document.querySelectorAll('.carousel .list1 .item') ;
    if (type === 'next') {
        listhtml.appendChild(items[0]) ;
        carousel.classList.add('next') ;
    }
}

} 
*/
let nextbutton = document.getElementById('next');
let prevbutton = document.getElementById('prev');
let backbutton = document.getElementById('back');
let seemorebutton = document.querySelectorAll('.seemore');
let carousel = document.querySelector('.carousel');
let listhtml = document.querySelector('.carousel .list');

// MOVE THIS FUNCTION TO THE TOP
const showslider = (type) => {
    carousel.classList.remove('next', 'prev');
    let items = document.querySelectorAll('.carousel .list .item');
    if (type === 'next') {
        listhtml.appendChild(items[0]);
        carousel.classList.add('next');
    } else if (type === 'prev') {
        listhtml.prepend(items[items.length - 1]);
        carousel.classList.add('prev');
    }
};

// THEN ASSIGN THE EVENT HANDLERS
nextbutton.onclick = function () {
    showslider('next');
};
prevbutton.onclick = function () {
    showslider('prev');
};

seemorebutton.forEach( button => {
    button.onclick = function () { 
        carousel.classList.add('showdetails');
    }
})
backbutton.onclick = function () {
    carousel.classList.remove('showdetails');
}
