import { useState, useEffect } from 'react';
import './DigitalClock.css';

const DigitalClock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formatNumber = (number) => {
        return number.toString().padStart(2, '0');
    };

    const hours = formatNumber(time.getHours());
    const minutes = formatNumber(time.getMinutes());
    const seconds = formatNumber(time.getSeconds());

    return (
        <div className="clock-container">
            <div className="clock">
                <div className="clock-display">
                    {hours}:{minutes}:{seconds}
                </div>
            </div>
        </div>
    );
};

export default DigitalClock;