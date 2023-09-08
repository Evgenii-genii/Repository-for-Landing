

function addSmoothScroll(anchor) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
     
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    }
     
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      addSmoothScroll(anchor);
})

  

function onLinkClick(event) {
    event.preventDefault();
    document.querySelector(event.target.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
  }

  addSmoothScroll(document.querySelector('.more-button'));  