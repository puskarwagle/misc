// https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect


const handleHeader = () => {
  const headerWhite = document.querySelector('.header--white')
  const headerBlack = document.querySelector('.header--black')
  const headerHeight = headerWhite.clientHeight
  const section = document.querySelector('section.black')
  
  let sectionTop;
  
  const update = () => {
    sectionTop = section.getBoundingClientRect().top
    if (sectionTop < 0) {
      headerBlack.style.maxHeight = 0      
    }
    if (sectionTop > 0 && headerHeight > sectionTop) {
      headerBlack.style.maxHeight = headerHeight - (headerHeight - sectionTop) + 'px'
    }
    if (sectionTop > headerHeight) {
      headerBlack.style.maxHeight = headerHeight + 'px'
    }
    requestAnimationFrame(update)
  }
  
  update()
}

handleHeader();