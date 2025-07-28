import {AlertBox} from './components/AlertBox/AlertBox.tsx'
import { UserProfileCard } from 


import './App.css'

function App() {
  

  return (
    <>
    <div className="container">
    <AlertBox
    type="success"
    message="Profile is successful"
    onClose={() => alert ('Alert Closed')

    }
    
    />
    </div>
  
    </>
  )
}

export default App
