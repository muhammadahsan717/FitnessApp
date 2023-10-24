import React, { Fragment, useEffect } from 'react';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';
import Hs from './Hs'


const Exercises = ({ exercises, setExercises, bodyPart }) => {
    useEffect(() => {
        const fetchExercisesData = async () => {
            let exercisesData = [];
        
            if (bodyPart === 'all') 
            {
                exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
            } 
            else 
            {
                exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
            }
        
            setExercises(exercisesData);
        };
    
        fetchExercisesData();
    }, [bodyPart]);

    return (
        <Fragment>
            <div className='exercises-main'>
                <p className='exercise-main-content'>Showing Results</p>
                <div className='exercise-display'>
                    {exercises.map((itemss, ind) => (
                        <ExerciseCard key={ind} exercise={itemss} />
                    ))}
                </div>
                <div className='exercise-display-680'>
                    {
                        exercises.length !== 0 ? <Hs data={exercises} /> : (<></>) 
                    }
                </div>
            </div>
        </Fragment>
    )
}

export default Exercises;