import React, { Fragment } from 'react';
import { InfinitySpin } from 'react-loader-spinner';

const Loader = () => {
    return (
        <Fragment>
            <div className='loader-main'>
                <InfinitySpin color="grey" />
            </div>
        </Fragment>
    )
}

export default Loader