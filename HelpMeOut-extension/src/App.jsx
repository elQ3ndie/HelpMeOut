import React from 'react'
import Popup from './Popup'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'


export const theme = extendTheme({
  colors: {
    navy: {
      500: '#120B48',
    }
  }
})



const App = () => {
  return (
    <ChakraProvider theme={theme} >
      <Popup />
    </ChakraProvider>
  )
}

export default App