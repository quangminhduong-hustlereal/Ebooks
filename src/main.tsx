import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.tsx'

async function startApp() {
    if (import.meta.env.DEV) {
      const { worker } = await import('./mocks/browser')
      console.log('[App] Starting MSW worker...') // Log để dễ theo dõi


      // quiet: true // Bỏ comment dòng này nếu không muốn thấy log của MSW cho mỗi request được xử lý
      await worker.start({
        onUnhandledRequest: 'bypass',
        quiet: true,
      })
      console.log('[App] MSW worker started.')
    } else {
      console.log('[App] MSW not starting in production mode.')
    }

    ReactDOM.createRoot(document.getElementById('root')!).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    )
  }
startApp()
