import { render, screen, fireEvent } from '@testing-library/react'
import { Input } from '../components/Input'

describe('Input', () => {
  it('renders with label', () => {
    render(<Input label="Test Label" />)
    expect(screen.getByLabelText('Test Label')).toBeInTheDocument()
  })

  it('renders without label', () => {
    render(<Input />)
    const input = screen.getByRole('textbox')
    expect(input).toBeInTheDocument()
  })

  it('shows error message', () => {
    render(<Input error="Test error" />)
    expect(screen.getByText('Test error')).toBeInTheDocument()
  })

  it('applies error styling when error is present', () => {
    render(<Input error="Test error" />)
    const input = screen.getByRole('textbox')
    expect(input).toHaveClass('border-red-500')
  })

  it('handles value changes', () => {
    const handleChange = vi.fn()
    render(<Input onChange={handleChange} />)
    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: 'test value' } })
    expect(handleChange).toHaveBeenCalledWith(expect.objectContaining({
      target: expect.objectContaining({ value: 'test value' })
    }))
  })
})
