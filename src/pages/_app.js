import '../styles/globals.css'
import { AuthProvider } from '../authContext'
import Login from './login'
export default function App({ Component, pageProps }) {
  return (
    
    <AuthProvider>
      
      <Component {...pageProps} />
    </AuthProvider>
  ) 
}
