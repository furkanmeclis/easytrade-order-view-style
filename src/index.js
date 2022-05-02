import React from 'react';
import ReactDOM from 'react-dom';

import { ChakraProvider } from '@chakra-ui/react';
import App from './App';

ReactDOM.render(
  <ChakraProvider>
    <App order={JSON.parse(document.getElementById('root').getAttribute('order'))} />
  </ChakraProvider>,
  document.getElementById('root')
);
