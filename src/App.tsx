//import { useState } from 'react'
import './App.css'
import Button from '@mui/material/Button'

function App() {

  return (
    <main>
        <section id="game-board-section">
            <div id="game-board">
                <Button>1</Button>
                <Button>2</Button>
                <Button>3</Button>

                <Button>4</Button>
                <Button>5</Button>
                <Button>6</Button>

                <Button>7</Button>
                <Button>8</Button>
                <Button>9</Button>
            </div>
        </section>
        <section id="game-history-section">
            <div>Game History Here</div>
        </section>
    </main>
  )
}

export default App