import React from 'react';
import Block from '../../components/block/block';
import ReactLoading from 'react-loading';

export const Loading = () => {
    return (
        <Block
            style={{
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                display: 'flex',
                padding: '50px',
            }}
        >
            <ReactLoading type={'spin'} color="#2CA8FF" height="8rem" width="8rem" />
        </Block>
    );
};
