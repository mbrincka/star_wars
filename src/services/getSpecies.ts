import { getResource } from "../lib/fetch";
import { API_SPECIES } from "../utils/endpoints";
import { ISpecie } from "../utils/interfaces/ISpecie";

export const getSpecies = async (...speciesParams : Array<string>) => {
    const speciesList : Array<ISpecie> = [];

    const fillSpeciesList =(data: any) => {
        for(const specie of data) {
            speciesList.push( {
                name: specie.name,
                classification: specie.classification,
                designation: specie.designation,
                language: specie.language,
                people: specie.people,

            });
        }
    };

    try{
        if (speciesParams.length === 0) {
            const data = await getResource(API_SPECIES);
            fillSpeciesList(data.results);
        } else {
            for (const specieName of speciesParams){
                const data = await getResource (`${API_SPECIES}? search=${specieName}`);
                fillSpeciesList(data.results);
            }
        }
    } catch (error) {
        console.warn ('Ne radi');
    }

    return speciesList;
};