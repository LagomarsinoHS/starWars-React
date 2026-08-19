import React, { useContext } from "react";
import { Link, withRouter } from "react-router-dom";
import { Context } from "../store/appContext";
import { getSwapiId } from "../utils/swapi";
import { getCharacterImageUrl, CHARACTER_PLACEHOLDER } from "../utils/images";

const CardPersonajes = (props) => {
    const { store, actions } = useContext(Context);
    const id = getSwapiId(props.personaje.url);
    const isFavorite = props.a.length > 0;

    return (
        <div className="col-md-3 my-4">
            <div className="card border-0">
                <img
                    src={getCharacterImageUrl(id, store.characterImages)}
                    id="fotoHeaderCard"
                    className="card-img-top"
                    alt={props.personaje.name}
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = CHARACTER_PLACEHOLDER;
                    }}
                />
                <div className="card-body">
                    <h5 className="card-title text-center"><ins>{props.personaje.name}</ins></h5>
                    <p className="card-text"><b>Gender: </b><i>{props.personaje.gender}</i></p>
                    <p className="card-text"><b>HairColor: </b><i>{props.personaje.hair_color}</i></p>
                    <p className="card-text"><b>EyesColor: </b><i>{props.personaje.eye_color}</i></p>
                </div>
                <div className="card-footer">
                    <Link to={`/personaje/${id}`} className="btn btn-outline-primary">Learn More!</Link>
                    <button
                        type="button"
                        className={`btn btn-outline-warning float-end${isFavorite ? " corazonActivo" : ""}`}
                        onClick={() =>
                            isFavorite
                                ? actions.removeFavorite(props.personaje.name)
                                : actions.addFavorite(props.personaje.name)
                        }
                    >
                        <i className="far fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default withRouter(CardPersonajes);
