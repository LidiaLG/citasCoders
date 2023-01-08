import React from 'react';
import '../Edit/EditStyle.scss';


const Edit = () => {
  return (
    <>
      <div className='createContainer'>
        <h1 className='createTitle'>EDITAR CITA</h1>
        <div className='formCreateContainer'>
          <form className = "formCreate" method='post'>
            <div className= "nameThemeContainer">
              <label for = "POST-name">Coder Name:</label>
              <input type = "text" name = "name"></input>
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