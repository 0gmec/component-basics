import AlertBox from './AlertBox/AlertBox.tsx'
import UserProfileCard from './AlertBox/UserProfileCard/UserProfileCard.tsx'
import ProductDisplayProps from './AlertBox/ProductDisplay/ProductDisplay.tsx'

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

      <div className="ProductDisplay-container">
        <ProductDisplay

        />
      </div>

    </>
  )
}

export default App
