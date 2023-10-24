import React, { Fragment } from 'react'
import Hs from './Hs';
import Loader from './Loader';


const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
    return (
        <Fragment>
            <div className='SimilarExercises-main'>
                <p className='SimilarExercises-text'>Similar <span>Target Muscle</span> exercises</p>
                <div className='SimilarExercises-content-c1'>
                    {targetMuscleExercises.length !== 0 ? <Hs data={targetMuscleExercises} /> : <Loader />}
                </div>
                <p className='SimilarExercises-text'>Similar <span>Equipment</span> exercises</p>
                <div className='SimilarExercises-content-c2'>
                    {equipmentExercises.length !== 0 ? <Hs data={equipmentExercises} /> : <Loader />}
                </div>
            </div>
        </Fragment>
    )
}

export default SimilarExercises;