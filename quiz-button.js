const quizButtonComponent = () => ({
    init() {
      const quizButton = document.getElementById('quizbutton')
      quizButton.style.display = 'block'
      
      const overview = document.getElementById('quizbutton')
      overview.addEventListener('click', (event) => {
        // Create new entity for the new object
  
        const oldElement = document.getElementById('model')
        oldElement.setAttribute('visible', false)
  
        const newElement = document.getElementById('ui')
        newElement.setAttribute('visible', true)
      })
    },
  })
  export {quizButtonComponent}