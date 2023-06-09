import "./App.css"
import ChordSections from "./components/ChordSections"
import Header from "./components/Header"
import PlayBar from "./components/PlayBar"

function App() {
  return (
    <div className="App">
      <Header />
      <ChordSections />
      <PlayBar />
    </div>
  )
}

export default App
