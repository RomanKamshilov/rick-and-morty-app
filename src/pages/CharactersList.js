import React from 'react';
import './CharacterList.css'
import {useCharacters} from "../hooks/useCharacters";
import {Link} from "react-router-dom";

const CharactersList = () => {
    const {error, data, loading} = useCharacters();

    if(loading) return <div>Spinner...</div>;
    if(error) return <div>something went wrong</div>;

    return (
        <div className="character__list">
            {data.characters.results.map((character) => {
                return (
                    <Link
                        to={`/${character.id}`}
                        key={character.id}
                    >
                        <img src={character.image} />
                        <h2>{character.name}</h2>
                    </Link>
                );
            })}
        </div>
    );
};

export default CharactersList;
