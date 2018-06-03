// smooth scrolling
function scrollTo(element, to, duration) {
  if (duration < 0) return;
  var difference = to - element.scrollTop;
  var perTick = difference / duration * 10;

  setTimeout(function() {
      element.scrollTop = element.scrollTop + perTick;
      if (element.scrollTop === to) return;
      scrollTo(element, to, duration - 10);
  }, 10);
}

// click handler for all anchor tags
function callback(e) {
  var e = window.e || e;

  if (e.target.tagName !== 'LI') return;

  if (window.innerWidth > 1024) {
    e.preventDefault()
    let href = e.target.parentNode.href.toString()
    let id = href.slice(href.indexOf('#') + 1)
    scrollTo(document.documentElement, document.getElementById(id).offsetTop, 600);
  }  
}
document.addEventListener('click', callback, false);

// hide navbar on scroll
window.addEventListener('scroll', function(e) {
  if(window.scrollY > 10) {
    if(window.innerWidth <= 1024) document.querySelector('.nav-inner .logo').style.opacity = 0
    else document.querySelector('.nav-inner').style.opacity = 0
  } else {
    if(window.innerWidth <= 1024) document.querySelector('.nav-inner .logo').style.opacity = 1
    else document.querySelector('.nav-inner').style.opacity = 1
  }
});

document.querySelector('button.hamburger').addEventListener('click', (e) => {
  document.querySelector('body').classList.toggle('menu-active')
})

// document.querySelector('.toggle').addEventListener('click', (e) => {
//   let items = document.querySelectorAll('.toggle .item')
//   for (let item of items) {
//     item.classList.toggle('active')
//   }
// })