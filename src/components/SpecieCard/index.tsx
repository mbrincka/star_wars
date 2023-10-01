import React from 'react';
import './index.scss';

// type TSpecie = {
//     specie: ISpecie
// }

const SpecieCard = ({ specie }: any) => {
    return (
        <div className="card">
            <div className="card-header">
                <img
                    src={require(`../../assets/images/${specie.name.toLowerCase()}.jpeg`)}
                    alt=""
                    className="card-img-top"
                />
                <div className="card-img-overlay">
                    <h5 className="card-title">{specie.name}</h5>
                </div>
            </div>

            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <b>Classification:</b> {specie.classification}
                </li>
                <li className="list-group-item">
                    <b>Designation:</b> {specie.designation}
                </li>
                <li className="list-group-item">
                    <b>Language:</b> {specie.language}
                </li>
            </ul>
        </div>
    );
};

export default SpecieCard;
