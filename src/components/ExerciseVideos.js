import React, { Fragment } from 'react'
import Loader from './Loader';


const ExerciseVideos = ({ exerciseVideos, name }) => {
    if (!exerciseVideos.length) return <Loader />;

    return (
        <Fragment>
            <div className='exerciseVideos-main'>
                <p className='exerciseVideos-content'>Watch <span>{name}</span> exercise videos</p>
                <div className='exerciseVideos-map'>
                    {exerciseVideos.slice(0, 6)?.map((item, ind) => (
                        <a key={ind} className='exercise-video' href={`https://www.youtube.com/watch?v=${item.video.videoId}`} target='_blank' rel='noreferrer' >
                            <img src={item.video.thumbnails[0].url} alt={item.video.title} className='exercise-video-image'/>
                            <div>
                                <p className='exercise-video-content-c1'>{item.video.title}</p>
                                <p className='exercise-video-content-c2'>{item.video.channelName}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </Fragment>
    )
}

export default ExerciseVideos;