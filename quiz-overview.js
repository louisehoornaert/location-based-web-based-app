const quizOverviewComponent = () => ({
    init() {
  
    },
  })
  export {quizOverviewComponent}
  
  AFRAME.registerComponent('close-listener', {  
    init() {
      const element = this.el
      
      console.log('testk', element.id)
      element.addEventListener('click', () => {
        console.log('Click', 'op de close button geklikt')
  
        const oldElement2 = document.getElementById('model')  
        oldElement2.setAttribute('visible', true)
  
        const newElement2 = document.getElementById('ui')  
        newElement2.setAttribute('visible', false)
      })
    },
    update() {
  
    },
  })
  
  AFRAME.registerComponent('true-listener', {  
    init() {
      const wrongAnswer = this.el.sceneEl.querySelector('#truePicture')
  
      console.log('TESTESTETESTTESTTEST', wrongAnswer)
      wrongAnswer.addEventListener('click', () => {
        console.log('Click', 'op de true button geklikt')
        
        const wrong = document.getElementById('wrong')
        wrong.setAttribute('visible', true) 
      })
    },
    update() {
  
    },
  })
  
  AFRAME.registerComponent('false-listener', {  
    init() {
      const correctAnswer = this.el.sceneEl.querySelector('#falsePicture')  
  
      console.log('TESTESTE22222', correctAnswer)
      correctAnswer.addEventListener('click', (event) => {
        console.log('Click', 'op de false button geklikt')
        
        const correct = document.getElementById('right')
        correct.setAttribute('visible', true)  
        
      })
    },
    update() {
  
    },
  })