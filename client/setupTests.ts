import 'jest-canvas-mock'
import '@testing-library/jest-dom/extend-expect'
import { intersectionMockInstance } from 'react-intersection-observer/test-utils'

window.IntersectionObserver = jest
  .fn()
  .mockImplementation(intersectionMockInstance)

window.HTMLMediaElement.prototype.play = async () => {}
window.HTMLMediaElement.prototype.pause = async () => {}
