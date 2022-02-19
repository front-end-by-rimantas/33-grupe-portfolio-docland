// IMPORTS

// CODE EXECUTION BELOW THIS COMMENT LINE

/*header start*/
/*header end*/

/*hero start*/
document.getElementById('myPopup').onclick = function () {
    openPopup();
};
function openPopup() {
    document.getElementById('myPopup').style.display = 'flex';
    document.getElementById('myBg').style.display = 'block';
    document.body.style.overflow = 'hidden';
}
document.getElementById('myBg').onclick = function () {
    closePopup();
};
function closePopup() {
    document.getElementById('myPopup').style.display = 'none';
    document.getElementById('myBg').style.display = 'none';
    document.body.style.overflow = '';
}
/*hero end*/

/*collected data start*/
/*collected data end*/

/*timer start*/
/*timer end*/

/*what you'll learn start*/
/*what you'll learn end*/

/*course syllabus start*/
const accordion = document.querySelector('.accordion');
const items = accordion.querySelectorAll('li');
const courses = accordion.querySelectorAll('.course-short');

function toggleAccordion() {
    let thisItem = this.parentNode;
    items.forEach((item) => {
        if (thisItem == item) {
            thisItem.classList.toggle('open');
            return;
        }
        item.classList.remove('open');
    });
}

courses.forEach((course) => course.addEventListener('click', toggleAccordion));

/*course syllabus end*/

/*course benefit start*/
/*course benefit end*/

/*pricing start*/
/*pricing end*/

/*student rewiews start*/
/*student rewiews end*/

/*enter email form start*/
/*enter email form end*/

/*course instructors start*/
/*course instructors end*/

/*footer start*/
/*footer end*/

/*button back to top start*/

const backTopBtn = document.getElementById('backTopBtn');
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 300 ||
        document.documentElement.scrollTop > 300
    ) {
        backTopBtn.style.display = 'block';
    } else {
        backTopBtn.style.display = 'none';
    }
}
/*button back to top end*/
