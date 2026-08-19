import React, { useState, useEffect } from "react";
import { getState } from "./flux";



/* Se declara esto, vacio porque luego al hacer las llamadas reemplazaran este valor */
export const Context = React.createContext(null);

export const inyectContext = (PassedComponent) => {
    const StoreWrapper = (props) => {
        /*
        Hago mi variable state y en el useState llamo a getState que es lo que estoy exportando en flux.js que contiene mi store y mis acciones (que son las funciones)
        */
        const [state, setState] = useState(getState({
            getStore: () => state.store,
            getActions: () => state.actions,
            setStore: (updateStore) => setState({
                store: Object.assign(state.store, updateStore),
                actions: { ...state.actions }
            })
        }));



        /* Uso esto para que al cargar la pagina ya tenga estos datos */
        useEffect(() => {
            state.actions.loadCharacterImages();
            state.actions.getCharacters("https://swapi.dev/api/people/");
            state.actions.getPlanets("https://swapi.dev/api/planets/");
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

        return (
            /* Le indico que el context provider tendra la informacion del state */
            <Context.Provider value={state}>
                {/* Esa información ira hacia los componentes que tengan el provider */}
                <PassedComponent {...props} />
            </Context.Provider>
        )
    
    }/* Fin StoreWrapper */

    return StoreWrapper;


} /* Fin InyectContext */
