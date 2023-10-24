import React, { Fragment } from 'react';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({ exerciseDetail }) => {
    const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

    const extraDetail = [
        {
            icon: BodyPartImage,
            name: bodyPart
        },
        {
            icon: TargetImage,
            name: target
        },
        {
            icon: EquipmentImage,
            name: equipment
        },
    ];

    return (
        <Fragment>
            <div className='details-main'>
                <div className='detail-img'>
                    <img src={gifUrl} alt={name} loading="lazy" className="detail-image"/>
                </div>
                <div className='detail-content'>
                    <p className='detail-content-c1'>{name}</p>
                    <p className='detail-content-c2'>Exercises keep you strong.{' '}<span className='abc'>{name}</span> bup is one of the best exercises to target your {target}. It will help you improve your{' '} mood and gain energy.</p>
                    {extraDetail.map((item, ind) => (
                        <div className='extradetail-map'>
                            <button className='extradetail-icon-button'><img src={item.icon} alt='bodyPart' className='extradetail-icon'/></button>
                            <p className='extradetail-detail'>{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Fragment>
    )
}

export default Detail;


/*

<Stack gap="60px" sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
        <Typography sx={{ fontSize: { lg: '64px', xs: '30px' } }} fontWeight={700} textTransform="capitalize">
          {name}
        {extraDetail?.map((item) => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
            <Button sx={{ background: '#FFF2DB', borderRadius: '50%', width: '100px', height: '100px' }}>
              <img src={item.icon} alt={bodyPart} style={{ width: '50px', height: '50px' }} />
            </Button>
            <Typography textTransform="capitalize" sx={{ fontSize: { lg: '30px', xs: '20px' } }}>
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>

*/