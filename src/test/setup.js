import '@testing-library/jest-dom'
import { vi } from 'vitest'

// Mock IntersectionObserver
class IntersectionObserverMock {
    constructor() {
        this.disconnect = vi.fn()
        this.observe = vi.fn()
        this.takeRecords = vi.fn()
        this.unobserve = vi.fn()
    }
}

vi.stubGlobal('IntersectionObserver', IntersectionObserverMock)

// Mock ResizeObserver
class ResizeObserverMock {
    constructor() {
        this.disconnect = vi.fn()
        this.observe = vi.fn()
        this.unobserve = vi.fn()
    }
}

vi.stubGlobal('ResizeObserver', ResizeObserverMock)

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(), // deprecated
        removeListener: vi.fn(), // deprecated
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
    })),
})
