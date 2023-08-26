import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'
import router from './router'

function App() {
    return (
        <main className="h-full min-h-screen bg-gradient-to-br from-slate-800 to-dark-900 flex flex-col items-center">
            <RouterProvider router={router} />
            <Toaster richColors closeButton duration={3000} />
        </main>
    )
}

export default App
