import React from 'react'
import { render, fireEvent } from '../testUtils'
import { Home } from '../../pages/index'

describe('Home page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Home />, {})
    expect(asFragment()).toMatchSnapshot()
  })

  it('resets by clicking C', () => {
    const { getByText, getByTestId } = render(<Home />, {})
    window.alert = jest.fn()
    fireEvent.click(getByText('C'))
    expect(getByTestId('output')).toHaveTextContent('')
  })
})
