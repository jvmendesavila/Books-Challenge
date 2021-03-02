import React from 'react'
import { render } from '../../../test/test-utils'

import { fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import PlayerForm from '.'

describe('Tests for Player Form', () => {
  let props
  let container

  beforeEach(() => {
    props = {
      player: { id: null, name: '', email: '', phone: '' },
      setPlayer: jest.fn(),
      setPlayers: jest.fn(),
      addPlayer: jest.fn(),
      handleClose: jest.fn()
    }
    container = render(<PlayerForm {...props} />)
  })

  // Show Form Fields
  test('Show Form Fields', async () => {
    const { queryByTestId } = container

    // Show Label Fields
    expect(queryByTestId('text-field-name')).toBeVisible()
    expect(queryByTestId('text-field-phone')).toBeVisible()
    expect(queryByTestId('text-field-email')).toBeVisible()
  })

  // Show Required Fields OnSubmit
  test('Show Required Fields OnSubmit', async () => {
    const { queryByTestId, queryByText } = container

    // Button
    const submitButton = queryByTestId('submit-user-button')
    await waitFor(() => {
      submitButton.click()
    })

    // Required Fields
    expect(queryByText('Nome Obrigatório')).toBeVisible()
    expect(queryByText('Celular Obrigatório')).toBeVisible()
    expect(queryByText('Email Obrigatório')).toBeVisible()
  })

  // Validate Fields
  test('Validate Fields', async () => {
    const { getByTestId, queryByText, queryByTestId } = container

    // Name
    const nameField = getByTestId('text-field-name')
    const phoneField = getByTestId('text-field-phone')
    const emailField = getByTestId('text-field-email')
    const submitButton = queryByTestId('submit-user-button')

    // OnBlur Empty Field
    await waitFor(() => {
      fireEvent.blur(nameField)
      fireEvent.blur(phoneField)
      fireEvent.blur(emailField)
    })

    expect(queryByText('Nome Obrigatório')).toBeVisible()
    expect(queryByText('Celular Obrigatório')).toBeVisible()
    expect(queryByText('Email Obrigatório')).toBeVisible()
    expect(submitButton).toBeDisabled()
    // Name
    await waitFor(() => {
      fireEvent.change(nameField, { target: { value: 'Joao' } })
      expect(queryByText('Nome Obrigatório')).not.toBeInTheDocument()
    })

    // Phone
    await waitFor(() => {
      fireEvent.change(phoneField, { target: { value: '8597318691' } })
      expect(queryByText('Celular Inválido')).toBeVisible()
    })

    await waitFor(() => {
      fireEvent.change(phoneField, { target: { value: '(85) 9731-8691' } })
      expect(queryByText('Celular Inválido')).toBeVisible()
    })

    await waitFor(() => {
      fireEvent.change(phoneField, { target: { value: '(85) 99731-8691' } })
      expect(queryByText('Celular Obrigatório')).not.toBeInTheDocument()
      expect(queryByText('Celular Inválido')).not.toBeInTheDocument()
    })

    // Email
    await waitFor(() => {
      fireEvent.change(emailField, { target: { value: 'joaogmail.com' } })
      expect(queryByText('Email Inválido')).toBeVisible()
    })

    await waitFor(() => {
      fireEvent.change(emailField, { target: { value: 'joao@gmailcom' } })
      expect(queryByText('Email Inválido')).toBeVisible()
    })

    await waitFor(() => {
      fireEvent.change(emailField, { target: { value: 'joao@gmail.br' } })
      expect(
        queryByText(`Email inválido pois não termina com '.com'`)
      ).toBeVisible()
    })

    await waitFor(() => {
      fireEvent.change(emailField, { target: { value: 'joao@gmail.com' } })
      expect(queryByText('Email Obrigatório')).not.toBeInTheDocument()
      expect(queryByText('Email Inválido')).not.toBeInTheDocument()
      expect(
        queryByText(`Email inválido pois não termina com '.com'`)
      ).not.toBeInTheDocument()
      expect(submitButton).toBeEnabled()
    })
  })
})
