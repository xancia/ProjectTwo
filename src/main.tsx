import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './components/utility/store.tsx'
import { ThemeProvider } from './components/theme-provider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <App />
       </ThemeProvider>
      </Router>
    </Provider>
  </React.StrictMode>,
)
