import React from "react";
import './Character.css';
import {useCharacter} from "../hooks/useCharacter";
import {useParams} from "react-router";


const Character = () => {
    const {id} = useParams();
    const {error, data, loading} = useCharacter(id);

    if(error) return <div>Something went wrong...</div>
    if(loading) return <div>Spinner...</div>

    return (
        <div className="character">
            <img src={data.character.image} width={750} height={750} />
            <div className="character__content">
                <h1>{data.character.name}</h1>
                <p>{data.character.gender}</p>
                <div className="character__episode">
                    {data.character.episode.map(episode => {
                        return (
                            <div>
                                {episode.name} - <b>{episode.episode}</b>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Character;
