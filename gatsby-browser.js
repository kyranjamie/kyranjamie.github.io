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
  getAllAnchors().forEach(el => {
    ['blur', 'mouseout'].forEach(eType => el.addEventListener(eType, e => updateFocusColor()))
  }),
  1000
)

export const onRouteUpdate = ({ location, prevLocation }) => {
  const anchors = getAllAnchors()
  anchors.forEach(el => {
    ['blur', 'mouseout'].forEach(eType => el.addEventListener(eType, e => updateFocusColor()))
  })
  // flashAllColors(anchors)
}

// const delay = (time) => new Promise((resolve) => setTimeout(() => resolve(), time))
// async function flashAllColors (elCollection) {
//   let prevEl;
//   if (elCollection.length === 0) return
//   for (const el of elCollection) {
//     el.classList.add('pseudo-focus')
//     if (prevEl) prevEl.classList.remove('pseudo-focus')
//     prevEl = el
//     updateFocusColor()
//     await delay(20)
//   }
//   prevEl.classList.remove('pseudo-focus')
// }

// setTimeout(() => flashAllColors(getAllAnchors()), 2000)
