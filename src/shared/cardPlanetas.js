import React, { useContext } from "react";
import { Link, withRouter } from "react-router-dom";
import { Context } from "../store/appContext";
import { getSwapiId } from "../utils/swapi";
import { getPlanetImageUrl } from "../utils/images";

const CardPlanetas = (props) => {
    const { actions } = useContext(Context);
    const id = getSwapiId(props.planeta.url);
    const isFavorite = props.a.length > 0;

    return (
        <div className="col-md-3 my-4">
            <div className="card">
                <img
                    src={getPlanetImageUrl(props.planeta.name)}
                    className="card-img-top"
                    id="fotoHeaderCard"
                    alt={props.planeta.name}
                />
                <div className="card-body" id="cardBodyPlanetas">
                    <h5 className="card-title text-center"><ins>{props.planeta.name}</ins></h5>
                    <p className="card-text"><b>Climate:</b> {props.planeta.climate}</p>
                    <p className="card-text"><b>Gravity:</b> {props.planeta.gravity}</p>
                    <p className="card-text"><b>Terrain:</b> {props.planeta.terrain}</p>
                </div>
                <div className="card-footer">
                    <Link to={`/planeta/${id}`} className="btn btn-outline-primary">Learn More!</Link>
                    <button
                        type="button"
                        className={`btn btn-outline-warning float-end${isFavorite ? " corazonActivo" : ""}`}
                        onClick={() =>
                            isFavorite
                                ? actions.removeFavorite(props.planeta.name)
                                : actions.addFavorite(props.planeta.name)
                        }
                    >
                        <i className="far fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default withRouter(CardPlanetas);
