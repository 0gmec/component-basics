import AlertBox from './components/AlertBox/AlertBox.tsx'
import UserProfileCard from './components/UserProfileCard.tsx'


import './App.css'

function App() {


  return (
    <>
      <div className="AlertBox-container">
        <AlertBox
          type="success"
          message="Profile is successful"
          onClose={() => alert('Alert Closed')}
            
          
        />
      </div>
      <div className="UserProfileCard-container">
        <UserProfileCard
        user={user}
        showEmail={true}
        showRole={true}
        onEdit={() => alert('Editing user')}
        />
      </div>

    </>
  )
}

export default App
