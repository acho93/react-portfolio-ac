import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import "@fontsource/aileron"

import {
  ChakraProvider,
  Box,
  Grid,
  extendTheme
} from '@chakra-ui/react';

import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Skills from './components/Skills';

function App() {
  const theme = extendTheme({
    fonts: {
      body: 'Aileron'
    }
  })

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <Router>
            <Routes>
              <Route path='/' element={<About />} />
              <Route path='/about' element={<About />} />
              <Route path='/portfolio' element={<Portfolio />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/skills' element={<Skills />} />
            </Routes>
          </Router>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;