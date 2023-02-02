import React, {useEffect, useState} from 'react';
import '../Profile/ProfileStyle.scss';
import axios from 'axios';
import { FaTrashAlt, FaEdit} from "react-icons/fa";
import {Link} from 'react-router-dom';

const url = 'http://localhost:8000/api';

const Profile = () => {
  const [element, setElement] = useState([]);

  useEffect( ()=> {
    getAllElements();
  }, [])

  const getAllElements = async() => {
    const response = await axios.get(`${url}/coders`);
    setElement(response.data);
  }

  const deleteElement = async(id) => {
    await axios.delete(`${url}/coders/${id}`);
    getAllElements();
  }

  return (

      <div className="profileContainer">
        <div className="citasContainer">
          <h1 className="citasPreviasTitle">CITAS PREVIAS</h1>
          <div className="box1">
            <div className="paramsContainers">
            {
              
                element.map((e) =>(
                  <p key={e.id}>
                  <p className="dateParams">24 Dieciembre</p>
                  <p className="nameParms">{e.name}</p>
                  <p className="horaParms">10pm</p>
                  <p className="temaParms">Pánico al merge</p>
                  <div className="btnContainer">
                  <Link to={`/profile/edit/${e.id}`}><FaEdit></FaEdit></Link>
                    <button onClick={() => deleteElement(e.id)}><FaTrashAlt></FaTrashAlt></button>
                  </div>
                  </p>
                ))
              }
              </div>
            </div>
        </div>
      </div>
  )
}

export default Profile