import React from 'react';
import Loader from '../components/Loader/Index';

const Main = (Component: any) => {
    return (props: any) => {
        const { isLoaded, showNav } = props;

        if (!isLoaded) {
            return <Loader />;
        }

        return (
            <>
                {showNav && 'Prikaži navigaciju'}
                <Component {...props} />
            </>
        );
    };
};

export default Main;
