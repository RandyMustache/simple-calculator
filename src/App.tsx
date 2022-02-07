import { Container } from '@mui/material'
import * as React from 'react'
import './App.css'
import Problem1 from './pages/problem1/CalculatorPage'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Container maxWidth="sm">
          <h1>Currency Calculator</h1>
          <Problem1 />
        </Container>
      </header>
    </div>
  )
}

export default App
