import React, { Fragment, useState, useEffect } from 'react';
import {fetchData, exerciseOptions} from '../utils/fetchData'
import Hs from './Hs';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
    const [search, setSearch] = useState('');
    const [bodyParts, setBodyParts] = useState([]);
    
    useEffect(() => {
        const fetchExerciseData = async () => {
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
            setBodyParts(['all', ...bodyPartsData]);
        };
    
        fetchExerciseData();
    }, []);

    const handleSearch = async () => {
        if(search)
        {
            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
            const searchedExercises = exercisesData.filter((item) => item.name.toLowerCase().includes(search) || item.target.toLowerCase().includes(search) || item.equipment.toLowerCase().includes(search) || item.bodyPart.toLowerCase().includes(search));  
            setSearch('');
            setExercises(searchedExercises);
        }        
    };

    return (
        <Fragment>
            <div className='SearchedExercises-main'>
                <div className='SearchedExercises-main-content'>
                    <p>Awesome Exercises You Should Know</p>
                </div>
                <div className='SearchedExercises-main-input'>
                    <input type='text' value={search} onChange={(e) => setSearch(e.target.value.toLowerCase())} placeholder='Search Exercises'/>
                    <button onClick={handleSearch}>Search</button>
                </div>
                <div className='SearchedExercises-main-swiper' >
                    <Hs data={bodyParts} bodyParts setBodyPart={setBodyPart} bodyPart={bodyPart} />
                </div>
            </div>
        </Fragment>
    )
}

export default SearchExercises