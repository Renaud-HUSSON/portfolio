import 'jest-canvas-mock'
import '@testing-library/jest-dom/extend-expect'
import { intersectionMockInstance } from 'react-intersection-observer/test-utils'

window.IntersectionObserver = jest
  .fn()
  .mockImplementation(intersectionMockInstance)

window.HTMLMediaElement.prototype.play = async () => {}
window.HTMLMediaElement.prototype.pause = async () => {}

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})
