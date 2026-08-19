import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Header = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="row my-2 bg-secondary sticky-top">
            <div className="col-md-2">
                <img className="img-fluid logo" src="/img/starWarsLogo.png" alt="Star Wars logo" />
            </div>

            <div className="col-md-8">
                <ul id="ulHeader" className="nav d-flex justify-content-around">
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/">Personajes</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/planetas">Planetas</Link>
                    </li>
                </ul>
            </div>

            <div className="col-md-2">
                <div className="dropdown dropstart float-end">
                    <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Favoritos
                        <span id="spanNum">
                            <p className="fw-bold" id="pNum">{store.favorite.length}</p>
                        </span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        {store.favorite.length === 0 ? (
                            <li><span className="dropdown-item-text">No hay favoritos!</span></li>
                        ) : (
                            store.favorite.map((ele, i) => (
                                <li key={i}>
                                    <span className="dropdown-item">
                                        {ele}
                                        <button
                                            type="button"
                                            className="btn btn-link p-0 float-end text-danger"
                                            onClick={() => actions.removeFavorite(ele)}
                                            aria-label={`Eliminar ${ele} de favoritos`}
                                        >
                                            <i className="fas fa-trash"></i>
                                        </button>
                                    </span>
                                </li>
                            ))
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};
