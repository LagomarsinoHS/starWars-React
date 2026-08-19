import React, { useContext } from "react";
import { Spinner } from "../components/spinner";
import Footer from "../shared/footer";
import  CardPersonajes  from "../shared/cardPersonajes";
import { Context } from "../store/appContext";



export const Body = () => {
    const { store } = useContext(Context);





    return (
        <>
            <div className="row">
                {
                    //pregunto si la VARIABLE es distinto a null, no el results que me trae el fetch
                    store.characters !== null ?
                        store.characters.results.map((personaje, index) => {
                            let a=store.favorite.filter((item)=>item===personaje.name);
                            return <CardPersonajes key={index} personaje={personaje} i={index+1} a={a} />
                        })
                        : <Spinner />
                }
            </div>
            <Footer />
        </>)
}