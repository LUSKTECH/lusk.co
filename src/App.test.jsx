import { render, screen } from '@testing-library/react'
import App from './App'
import { describe, it, expect } from 'vitest'

describe('App', () => {
    it('renders the main heading', () => {
        render(<App />)
        const heading = screen.getAllByText(/LUSK TECH/i)[0]
        expect(heading).toBeInTheDocument()
    })

    it('renders navigation links', () => {
        render(<App />)
        expect(screen.getByText('Home')).toBeInTheDocument()
        expect(screen.getByText('Features')).toBeInTheDocument()
        expect(screen.getByText('Contact')).toBeInTheDocument()
    })
})
