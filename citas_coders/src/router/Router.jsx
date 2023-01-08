import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './../view/Home/Home';
import Create from './../view/Create/Create';
import Profile from './../view/Profile/Profile';
import Edit from './../view/Edit/Edit';

const Router = () => {
  return (
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/create" element={<Create/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/profile/edit" element={<Edit/>}/>
            </Routes>
        </BrowserRouter>
  )
}

export default Router