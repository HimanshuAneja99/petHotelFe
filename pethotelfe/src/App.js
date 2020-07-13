import React from 'react';
import Navbar from './component/appbarmain'
import FooterPage from './component/footer'
import './App.css';






function App() {
  return (
    <div>
      <Navbar />
      <div style={{marginBottom:'500px', marginTop: '100px',
        marginLeft: '100px' }}>
        <h1>This is the heading of the page</h1>
        <p>This is the content of the page.</p>

      </div>
      <FooterPage />
    </div>
  );
}

export default App;
