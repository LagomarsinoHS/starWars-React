import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { withRouter } from "react-router-dom";

const Footer = (props) => {
    const { store, actions } = useContext(Context);
    const isCharactersView = props.location.pathname === "/";

    return (
        <div className="row mb-3">
            {isCharactersView ? (
                store.characters !== null && (
                    <>
                        {store.characters.previous !== null && (
                            <button
                                type="button"
                                className="col-md-4 btn btn-secondary btn-lg offset-md-2 me-4 btnFooter mx-auto"
                                onClick={() => actions.getCharacters(store.characters.previous)}
                            >
                                Anterior
                            </button>
                        )}
                        {store.characters.next !== null && (
                            <button
                                type="button"
                                className="col-md-4 btn btn-secondary btn-lg btnFooter mx-auto"
                                onClick={() => actions.getCharacters(store.characters.next)}
                            >
                                Siguiente
                            </button>
                        )}
                    </>
                )
            ) : (
                store.planets !== null && (
                    <>
                        {store.planets.previous !== null && (
                            <button
                                type="button"
                                className="col-md-4 btn btn-secondary btn-lg offset-md-2 me-4 btnFooter mx-auto"
                                onClick={() => actions.getPlanets(store.planets.previous)}
                            >
                                Anterior
                            </button>
                        )}
                        {store.planets.next !== null && (
                            <button
                                type="button"
                                className="col-md-4 btn btn-secondary btn-lg btnFooter mx-auto"
                                onClick={() => actions.getPlanets(store.planets.next)}
                            >
                                Siguiente
                            </button>
                        )}
                    </>
                )
            )}
        </div>
    );
};

export default withRouter(Footer);
