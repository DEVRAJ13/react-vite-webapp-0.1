import { useState } from 'react'
import { Provider } from 'react-redux';
import './App.css'
import { store } from './store/store';
import Navbar from './components/header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
      <Navbar />
    </Provider>
  )
}

export default App
