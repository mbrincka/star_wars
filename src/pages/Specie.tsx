import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Specie = ({ species }: any) => {
    const { specieName } = useParams();

    useEffect(() => {
        const specie = species.find(({ name }: any) => name.toLowerCase() === specieName);

        console.log(specie.people);
    }, []);

    return <div></div>;
};

export default Specie;
