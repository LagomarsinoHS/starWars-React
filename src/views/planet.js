import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Spinner } from "../components/spinner";

import { getPlanetImageUrl } from "../utils/images";

export const Planet = (props) => {
    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.getPlanet("https://swapi.dev/api/planets/" + props.match.params.id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (<>

        {
            store.planet === null ?
                <div className="row">
                    <Spinner />
                </div>
                : <>
                    <div className="row">
                        <div className="col-md-6 text-center">
                            <img id="fotoCardPlanet" src={getPlanetImageUrl(store.planet.name)} className="card-img-top" alt={store.planet.name} />
                        </div>


                        <div className="col-md-6 text-center">
                            <h1>{store.planet.name}</h1>
                            <p className="text-start">t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                            t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </p>
                        </div>

                    </div>

                    <hr className="separador" />

                    <div className="row text-center">
                        <div className="col-md-2"><b>climate:</b><p>{store.planet.climate}</p></div>
                        <div className="col-md-2"><b>Gravity:</b><p>{store.planet.gravity}</p></div>
                        <div className="col-md-2"><b>Terrain:</b><p>{store.planet.terrain}</p></div>
                        <div className="col-md-2"><b>Diameter:</b><p>{store.planet.diameter}</p></div>
                        <div className="col-md-2"><b>RotationPeriod:</b><p>{store.planet.rotation_period}</p></div>
                        <div className="col-md-2"><b>OrbitalPeriod:</b><p>{store.planet.orbital_period}</p></div>
                    </div>
                </>
        }
    </>
    )
}