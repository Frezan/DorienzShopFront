import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Customer from './customer/Customer';
import CookieConsent from './cookies/CookiesConsent';
import { useCookies } from 'react-cookie';
import PageNotFound from '../pages/PageNotFound';
import { ReactNotifications } from 'react-notifications-component';
import { AuthContextProvider } from './context/AuthContext';
import { HelmetProvider } from 'react-helmet-async';
import Admin from './admin/Admin';
import './App.scss';
function App() {

  const [cookiesConsent] = useCookies(['cookiesConsent']);

  return (
    <div className="App">

      <HelmetProvider>

        <ReactNotifications />
        <BrowserRouter>
          <AuthContextProvider>
            <Routes>
              <Route path="/*" element={<Customer />} />
              <Route path="/admin/*" element={<Admin />} >
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </AuthContextProvider>
          
          {!cookiesConsent.cookiesConsent && <CookieConsent />}
        </BrowserRouter>
      </HelmetProvider>

    </div>
  )
}

export default App
