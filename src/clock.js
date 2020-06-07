import React, { useState, useEffect } from 'react';
import './clock.css';

export default function Clock() {
    const [time, setTime] = useState(new Date().toLocaleTimeString())

    const updateTime = () => {
        if (time !== new Date().toLocaleTimeString()) {
            setTime(new Date().toLocaleTimeString())
        }
        return time;
    }

    useEffect(() => {
        const interval = setInterval(() => {
            updateTime()
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <h2 className="clock">{time}</h2>
    )
}