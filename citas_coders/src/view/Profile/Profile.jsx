import React from 'react';
import '../Profile/ProfileStyle.scss';
import { FaTrashAlt, FaEdit} from "react-icons/fa";
import {Link} from 'react-router-dom';
import ModalDelete from './ModalDelete';

const Profile = () => {
  return (
    <>
      <ModalDelete>

      </ModalDelete>
      <div className="profileContainer">
        <div className="citasContainer">
          <h1 className="citasPreviasTitle">CITAS PREVIAS</h1>
          <div className="box1">
            <div className="paramsContainers">
            <p className="dateParams">24 Dieciembre</p>
            <p className="nameParms">Coder1</p>
            <p className="horaParms">10pm</p>
            <p className="temaParms">Pánico al merge</p>
            </div>
            <div className="btnContainer">
            <Link to='edit'><FaEdit></FaEdit></Link>
              <FaTrashAlt></FaTrashAlt>
            </div>
          </div>
          <div className="box2">
            <div className="paramsContainers">
            <p className="dateParams">24 Dieciembre</p>
            <p className="nameParms">Coder1</p>
            <p className="horaParms">10pm</p>
            <p className="temaParms">Pánico al merge</p>
            </div>
            <div className="btnContainer">
              <Link to='edit'><FaEdit></FaEdit></Link>
              <FaTrashAlt></FaTrashAlt>
            </div>
          </div>
          <div className="box1">
            <div className="paramsContainers">
            <p className="dateParams">24 Dieciembre</p>
            <p className="nameParms">Coder1</p>
            <p className="horaParms">10pm</p>
            <p className="temaParms">Pánico al merge</p>
            </div>
            <div className="btnContainer">
              <Link to='edit'><FaEdit></FaEdit></Link>
              <FaTrashAlt></FaTrashAlt>
            </div>
          </div>
          <div className="box2">
            <div className="paramsContainers">
            <p className="dateParams">24 Dieciembre</p>
            <p className="nameParms">Coder1</p>
            <p className="horaParms">10pm</p>
            <p className="temaParms">Pánico al merge</p>
            </div>
            <div className="btnContainer">
              <Link to='edit'><FaEdit></FaEdit></Link>
              <FaTrashAlt></FaTrashAlt>
            </div>
          </div>
          <div className="box1">
            <div className="paramsContainers">
            <p className="dateParams">24 Dieciembre</p>
            <p className="nameParms">Coder1</p>
            <p className="horaParms">10pm</p>
            <p className="temaParms">Pánico al merge</p>
            </div>
            <div className="btnContainer">
              <Link to='edit'><FaEdit></FaEdit></Link>
              <FaTrashAlt></FaTrashAlt>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile