import './App.css';
import Modal from './components/Modal';
import { useState } from 'react';

function App() {

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">
      <h2>Event Form [React.JS]</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, pariatur dicta. Blanditiis suscipit laboriosam quae?</p>
      <button className='btn' onClick={() => { setShowModal(true) }}>Add Event</button>
      <br />
      {showModal && <Modal setShowModal={setShowModal} />}
    </div>
  );
}

export default App;
