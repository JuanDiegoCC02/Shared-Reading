import Routing from './Routes/Routing'
import './App.css'
import { CookiesProvider } from 'react-cookie';

function App() {

  return (
    <>
     <CookiesProvider> {/* 2. Envuelves el contenido */}
        <div>
          <Routing/>
        </div>
      </CookiesProvider>
    </>
  )
}

export default App
