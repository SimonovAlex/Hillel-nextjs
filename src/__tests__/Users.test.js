import { render, screen } from '@testing-library/react'
import Posts from '../pages/posts/index'
import '@testing-library/jest-dom'

describe('Users', () => {
  it('renders a list', () => {
    render(<Posts />)

    const list = screen.getByTestId('Posts-list')

    expect(list).toBeInTheDocument()
  })

  it('renders a head', () => {
    const { container } = render(<Posts />)

    const head = container.querySelector('head');

    expect(head).not.toBeInTheDocument();
  })
})