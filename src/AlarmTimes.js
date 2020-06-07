import React, { useState } from 'react';
import alarmWav from './media/alarm.wav';

export default function AlarmTimes() {
    const [alarm, setAlarm] = useState('')

    const times = [
        '12:00',
        '12:30',
        '1:00',
        '1:30',
        '2:00',
        '2:30',
        '3:00',
        '3:30',
        '4:00',
        '4:30',
        '5:00',
        '5:30',
        '6:00',
        '6:30',
        '7:00',
        '7:30',
        '8:00',
        '8:30',
        '9:00',
        '9:30',
        '10:00',
        '10:30',
        '11:00',
        '11:30'
    ]
    
    const formatTime = (timesArr, ampm) => {
        return timesArr.map(time => time + ' ' + ampm)
    }

    const handleClick = e => {
        e.preventDefault()
        setAlarm(e.target.value)
    }

    return (
        <select className="dropdown" id="select-alarm-time">
            {formatTime(times, 'AM').map(time => <option onClick={handleClick} value={time.split(' ')[0] + ':00 ' + time.split(' ')[1]} key={time}>{time}</option>)}
            {formatTime(times, 'PM').map(time => <option onClick={handleClick} value={time.split(' ')[0] + ':00 ' + time.split(' ')[1]} key={time}>{time}</option>)}
        </select>
    )
}