import './App.css'
import LeftPanel from './components/LeftPanel'
import MainPanel from './components/MainPanel'
import RightPanel from './components/RightPanel'

function App() {

  return (
<div className="min-h-screen bg-gray-100">
      <div className="mx-auto flex min-h-screen w-full max-w-[1600px]">
        <LeftPanel />
        <MainPanel />
        <RightPanel />
      </div>
    </div>
  )
}

export default App
  