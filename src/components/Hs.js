import React, { Fragment, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

const Hs = ({ data, bodyParts, setBodyPart, bodyPart }) => {
    const [swiperCompleted, setSwiperCompleted] = useState(null);

    const goNextCompleted = () => {
        if (swiperCompleted) {
            swiperCompleted.slideNext();
        }
    };

    const goPrevCompleted = () => {
        if (swiperCompleted) {
            swiperCompleted.slidePrev();
        }
    };

    return( 
        <Fragment>
            <div className='hs-main'>
                <Swiper
                    onSwiper={setSwiperCompleted}
                    className='horizontal-scrollbar'
                    breakpoints={{
                        // when window width is >= 640px
                        640: {
                          slidesPerView: 1,
                        },
                        // when window width is >= 768px
                        993: {
                          slidesPerView: 2,
                        },
                        1200: {
                            slidesPerView: 3
                        },
                        1440: {
                            slidesPerView: 4
                        }
                    }}
                    loop={true}
                >
                    {data.map((item) => (
                        <SwiperSlide key={item.id || item} itemId={item.id || item} title={item.id || item} >
                            {bodyParts ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <ExerciseCard exercise={item} /> }
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className='arrowss'>
                    <div className="left-arrow" onClick={goNextCompleted}>
                        <img src={RightArrowIcon} alt='prevIcon'/>
                    </div>
                    <div className="right-arrow"  onClick={goPrevCompleted}>
                        <img src={LeftArrowIcon} alt='nextIcon'/>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Hs;