import 'jest-canvas-mock'
import '@testing-library/jest-dom/extend-expect'

const intersectionObserverMock = () => ({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null,
})
window.IntersectionObserver = jest
  .fn()
  .mockImplementation(intersectionObserverMock)

window.HTMLMediaElement.prototype.play = async () => {}
window.HTMLMediaElement.prototype.pause = async () => {}
