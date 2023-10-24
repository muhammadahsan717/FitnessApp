import React, { Fragment } from 'react';
import Icon from '../assets/icons/gym.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
    return (
        <Fragment>
            <div className={`bodyPart-card ${bodyPart === item ? 'activeBodyPart' : 'nonActiveBodyPart'}`} onClick={() => {
                setBodyPart(item);
                window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
            }}>
                <img src={Icon} alt='icon' className='bodyPart-image'/>
                <p className='bodyPart-content'>{item}</p>
            </div>
        </Fragment>
    )
}

export default BodyPart;