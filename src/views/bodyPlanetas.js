import React, { useContext } from "react";
import { Spinner } from "../components/spinner";
import  CardPlanetas  from "../shared/cardPlanetas";
import { Context } from "../store/appContext";
import Footer from "../shared/footer";

export const BodyPlanetas = () => {

    const { store } = useContext(Context);



    return (
        <>
            <div className="row ">
                {
                    store.planets !== null ?
                        store.planets.results.map((planeta, index) => {
                            let a= store.favorite.filter((item=>item===planeta.name))
                            return <CardPlanetas key={index} planeta={planeta} a={a} />
                        }) :
                        <Spinner />
                }
            </div>
                <Footer />
        </>
    )
}