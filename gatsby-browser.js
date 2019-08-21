import './src/styles/global.css'
import 'normalize.css'

const root = document.documentElement
const colors = ['#f368e0', '#ff9f43', '#ee5253', '#10ac84', '#00d2d3', '#54a0ff', '#5f27cd', '#341f97']

let initialIndex = 1

const getAllAnchors = () => document.querySelectorAll('a')
const updateFocusColor = () => {
  root.style.setProperty('--focus-color', colors[initialIndex])
  initialIndex = initialIndex === colors.length - 1 ? 0 : initialIndex + 1
}


export const onInitialClientRender = () => setTimeout(() =>
  getAllAnchors().forEach(el => el.addEventListener('blur', e => updateFocusColor())), 1200
)

export const onRouteUpdate = ({ location, prevLocation }) =>
  getAllAnchors().forEach(el =>
    el.addEventListener('blur', e => updateFocusColor())
  )
