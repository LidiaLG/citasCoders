import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';
import '../Edit/EditStyle.scss';

const url = 'http://localhost:8000/api/coders';


const Edit = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const {id} = useParams();

  const update = async (e) => {
    e.preventDefault();
    await axios.put(`${url}${id}`, {
      name: name,
    })
    navigate('/')
  }

  useEffect( () => {
    const getElementById = async () => {
      const response = await axios.get(`${url}${id}`)
      setName(response.data.name);
    }
    getElementById();
  }, [])

  return (
    <>
      <div className='createContainer'>
        <h1 className='createTitle'>EDITAR CITA</h1>
        <div className='formCreateContainer'>
          <form onSubmit={update} className = "formCreate" method='post'>
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
            <button className = "btnSubmit"><a href = "/profile" className="btnSubmitAnchor">Submit</a></button>
          </div>
        </div>

      </div>
    </>
  )
}

export default Edit