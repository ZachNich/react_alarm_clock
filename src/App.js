import React from 'react';
import './App.css';
import Clock from './Clock';
import AlarmTimes from './AlarmTimes';

export default function App() {
  return (
    <>
      <h1 className="header">clocked and loaded</h1>
      <div className="container">
        <Clock />
        <AlarmTimes />
      </div>
    </>
  )
}