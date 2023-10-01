import React from 'react';
import Main from '../layouts/Main';
import { ISpecie } from '../utils/interfaces/ISpecie';
import { Link } from 'react-router-dom';
import SpecieCard from '../components/SpecieCard';

// type homeProps = {
//     isLoaded: Boolean;
//     showNav: Boolean;
//     species: Array<ISpecie>;
// };

const Home = (props: any) => {
    return (
        <div className="container mt-5">
            <div className="row">
                {props.species.map((specie: ISpecie, index: number) => (
                    <div className="col-4" key={index}>
                        <Link to={`/specie/${specie.name.toLowerCase()}`}>
                            <SpecieCard specie={specie} />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Main(Home);