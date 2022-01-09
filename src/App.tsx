// import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';

import { Route, Router, Routes } from 'react-router-dom';

import Appointments from './components/Appointments/Appointments';
import Home from './components/Home/Home';

interface IAppProps {}

export default class App extends Component<IAppProps> {
  render() {
    return (
      <div className="App">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/appointments" element={<Appointments />} />
        </Routes>

        {/* <Redirect from='/' to='/home'/> */}
      </div>
    );
  }
}
