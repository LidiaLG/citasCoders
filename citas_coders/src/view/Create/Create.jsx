import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import '../Create/CreateStyle.scss';

const url = 'http://localhost:8000/api/coders';

const Create = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const store = async (e) => {
    e.preventDefault();
    await axios.post(url, {
      name: name,
    })
    navigate('/')
  }

  return (
    <>
      <div className='createContainer'>
        <h1 className='createTitle'>CREAR NUEVA CITA</h1>
        <div className='formCreateContainer'>
          <form onSubmit={store} className = "formCreate" method='post'>
            <div className= "nameThemeContainer">
              <label for = "POST-name">Coder Name:</label>
              <input value={name} onChange={(e)=> setName(e.target.value)} type = "text"></input>
              <label>Date:</label>
              <input type = "date"></input>
            </div>
            <div className= "dateTimeConteianer">
              <label>Theme:</label>
              <input type = "text"></input>
              <label>Time:</label>
              <input type = "time"></input>
            </div>
          </form>
          <div className="btnConatiner">
            <button className = "btnReturn"><a href = "/profile" className="btnReturnAnchor">Return</a></button>
            <button type="submit" className = "btnSubmit">Submit</button>
          </div>
        </div>

      </div>
    </>
  )
}

export default Create