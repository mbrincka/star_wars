import {useState, useEffect} from 'react';
import { ISpecie } from './utils/interfaces/ISpecie';
import { getSpecies } from './services/getSpecies';
import {Routes, Route} from 'react-router-dom';
import Specie from './pages/Specie';
import Home from './pages/Home';

const speciesInitialState: Array<ISpecie> = [
    {
        name: '',
        designation: '',
        classification: '',
        language: '',
        people: [],
    },
];

const App = (): JSX.Element => {
    const [species, setSpecies] = useState(speciesInitialState);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const speciesList = getSpecies('Human', 'Droid', 'Wookie');

        speciesList.then((data) => {
            setIsLoaded(true);
            setSpecies(data);
        });
    }, []);

    return (
        <>
            <Routes>
                <Route path="/" element={<Home isLoaded={isLoaded} showNav={false} species={species} />} />
                <Route path="/specie/:specieName" element={<Specie species={species} />} />
            </Routes>
        </>
    );
};

export default App;
