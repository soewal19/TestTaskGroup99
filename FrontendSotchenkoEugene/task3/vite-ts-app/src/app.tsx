import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'


import WalletPage from "./components/WalletPage.tsx";

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Task3 Problem 3: Messy React</h1>

        <WalletPage />
    </>
  )
}
