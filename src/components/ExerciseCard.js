import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const ExerciseCard = ({ exercise }) => {
    return(
        <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
            <Fragment>
                <div className='exercise-card-main'>
                    <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
                    <div className='exercise-card-buttons'>
                        <button className='exercise-card-bodyPart'>{exercise.bodyPart}</button>
                        <button className='exercise-card-target'>{exercise.target}</button>
                    </div>
                    <div className='exercise-card-p'>
                        <p>{exercise.name}</p>
                    </div>
                </div>
            </Fragment>
        </Link>
    );
};

export default ExerciseCard;