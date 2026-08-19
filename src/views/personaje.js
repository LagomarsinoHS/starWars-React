import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Spinner } from "../components/spinner";
import { getCharacterImageUrl, CHARACTER_PLACEHOLDER } from "../utils/images";

export const Personaje = (props) => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getCharacter("https://swapi.dev/api/people/" + props.match.params.id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {store.character === null ? (
                <div className="row">
                    <Spinner />
                </div>
            ) : (
                <>
                    <div className="row">
                        <div className="col-md-6 text-center">
                            <img
                                id="fotoCardPersonaje"
                                src={getCharacterImageUrl(props.match.params.id, store.characterImages)}
                                className="card-img-top"
                                alt={store.character.name}
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = CHARACTER_PLACEHOLDER;
                                }}
                            />
                        </div>

                        <div className="col-md-6 text-center">
                            <h1>{store.character.name}</h1>
                            <p className="text-start">
                                t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                                t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                            </p>
                        </div>
                    </div>

                    <hr className="separador" />

                    <div className="row text-center">
                        <div className="col-md-2"><b>Name:</b><p>{store.character.name}</p></div>
                        <div className="col-md-2"><b>BirthYear:</b><p>{store.character.birth_year}</p></div>
                        <div className="col-md-2"><b>Gender:</b><p>{store.character.gender}</p></div>
                        <div className="col-md-2"><b>Height:</b><p>{store.character.height}</p></div>
                        <div className="col-md-2"><b>SkinColor:</b><p>{store.character.skin_color}</p></div>
                        <div className="col-md-2"><b>EyeColor:</b><p>{store.character.eye_color}</p></div>
                    </div>
                </>
            )}
        </>
    );
};
