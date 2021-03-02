import React, { FC } from 'react'
import { render } from '@testing-library/react'

// Styles
import theme from '../theme'
import { ThemeProvider } from '@material-ui/core/styles'

const MaterialRender: FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

const customRender = ui => render(ui, { wrapper: MaterialRender })

export * from '@testing-library/react'

export { customRender as render }
