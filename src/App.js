import Index from "./paginas/index/Header"
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <>
      <div style={{ backgroundColor: '#F9F4F4' }}>
        <ChakraProvider>
          <Index/>
        </ChakraProvider>
      </div>
    </>
  );
}

export default App;
