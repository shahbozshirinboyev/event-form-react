import './App.css';
import EventList from './components/EventList';
import Modal from './components/Modal';
import { useState } from 'react';

function App() {

  const [showModal, setShowModal] = useState(false);

  const [events, setEvents] = useState([])

  const [showContent, setShowContent] = useState(true)

  const handleDelete = (id) => {
    setEvents(events.filter((event) => {
      return event.id !== id
    }))
  }

  const newEvent = (event) => {
    setEvents((prev) => {
      return [...prev, event]
    })
    setShowModal(false)
  }

  return (
    <div className="App">

      <h2>Event Form [React.JS]</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, pariatur dicta. Blanditiis suscipit laboriosam quae?</p>

      <button className='btn' onClick={() => { setShowModal(true) }}><i class="bi bi-plus-lg"></i> Add Event</button>
      <br />  {showModal && <Modal setShowModal={setShowModal} newEvent={newEvent} />}

      <br />

      {showContent && <button onClick={() => { setShowContent(false) }} className='btn'> <i class="bi bi-eye-slash"></i> Hide Content</button>}
      {!showContent && <button onClick={() => { setShowContent(true) }} className='btn'> <i class="bi bi-eye"></i> Show Content</button>}
      <hr />

      { showContent && <EventList events={events} handleDelete={handleDelete}/> }

    </div>
  );
}

export default App;
