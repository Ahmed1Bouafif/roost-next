import { ChakraProvider } from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/react';
import { useEffect } from 'react';


function LightMode(props: { children: JSX.Element}) {
  const { colorMode, toggleColorMode } = useColorMode();
  useEffect(() => {
    if (colorMode === "light") return;
    toggleColorMode();
  },[colorMode]);
  return props.children;
}

import { extendTheme } from "@chakra-ui/react"

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  colors: {
    brand: {
      100: "#007760",
      // ...
      900: "#1a202c",
    },
  },
})


function App({ Component, pageProps }) {
  return (
    <ChakraProvider  theme={theme}>
      <LightMode>
        <Component {...pageProps} />
      </LightMode>
    </ChakraProvider>
  );
}
export default App;
