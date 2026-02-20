import Routing from './Routes/Routing'
import './App.css'
import { CookiesProvider } from 'react-cookie';

function App() {

  return (
    <>
     <CookiesProvider>
        <div>
          <Routing/>
        </div>
      </CookiesProvider>
    </>
  )
}

export default App
