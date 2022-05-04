// Copyright (c) 2022 8th Wall, Inc.
//
// app.js is the main entry point for your 8th Wall app. Code here will execute after head.html
// is loaded, and before body.html is loaded.

import './stylesheet.css'

import {splashImageComponent} from './splash-image'
AFRAME.registerComponent('splash-image', splashImageComponent)

import {quizButtonComponent} from './quiz-button'
AFRAME.registerComponent('quiz-button', quizButtonComponent())

import {quizOverviewComponent} from './quiz-overview'
AFRAME.registerComponent('quiz-overview', quizOverviewComponent())

// JS voor photo mode
window.addEventListener('mediarecorder-photocomplete', () => {
  document.getElementById('overlay') ? document.getElementById('overlay').style.display = 'block'
    : document.body.insertAdjacentHTML('beforeend', '<div id="overlay"><div id="savePrompt">Hold to add to photos</div></div>')
})

// hide 'Hold to add to photos' prompt when user dismisses preview modal
window.addEventListener('mediarecorder-previewclosed', () => {
  if (document.getElementById('overlay')) {
    document.getElementById('overlay').style.display = 'none'
  }
})

const onxrloaded = () => {
  XR8.CanvasScreenshot.configure({maxDimension: 1920, jpgCompression: 100})
}

window.XR8 ? onxrloaded() : window.addEventListener('xrloaded', onxrloaded)
