import React from 'react'
import "./App.css"
import { FeatureToggle } from './FeatureToggle'

function App() {
  return (
    <div className='App'>
      <div className='App-header'>
        <FeatureToggle featureName='Dark-mode' isEnabled={false} />
        <FeatureToggle featureName='Notifications' isEnabled={true} />
      </div>
    </div>
  )
}

export default App
