import React from 'react';
import './Notifications.css';
import icon from './close-icon.png';
import { getLatestNotification } from './utils';

function Notifications() {
    return (
        <div className='Notifications'>
            <button aria-label='Close' onClick={console.log('Close button has been clicked')} style={{ backgroundColor: "white", border: "none", float: "right" }}>
                <img src={icon} alt='icon' height='9px' width='9px'></img>
            </button>
            <p>Here is the list of notifications</p>
            <ul>
                <li data='default'>New course available</li>
                <li data='urgent'>New resume available</li>
                <li data='urgent' dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
            </ul>
        </div>
    );
}

export default Notifications;