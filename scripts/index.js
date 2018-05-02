const overlay = document.getElementById('overlay')

// Fade in transition on load after slight delay
setTimeout(function() {
  // only fade in if at top of page
  if (window.pageYOffset < 10) {
    overlay.style.background = 'rgba(255,255,255,0.95)'
  }
}, 100)

// Fade in learn-more on load after slight delay
setTimeout(function() {
  // only fade in if at top of page
  if (window.pageYOffset < 10) {
    document.querySelector('.learn-more').style.opacity = 1
  }
}, 800)


// Fade out background image and .learn-more on scroll past top
document.addEventListener('scroll', function () {

  // fade in animation no longer needed so remove it
  if (window.pageYOffset > 10) {
    overlay.classList.remove('bg-animated')
    document.querySelector('.learn-more').classList.remove('learn-more-animated')
  }

  overlay.style.background = `rgba(255,255,255,${0.95 + window.pageYOffset / 9000})`

  document.querySelector('.learn-more').style.opacity = 1 - (window.pageYOffset / 200)
});