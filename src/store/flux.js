
export const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            characters: null,
            planets: null,
            character: null,
            planet: null,
            favorite: [],
            characterImages: {},
        },
        actions: {
            loadCharacterImages: async () => {
                try {
                    const resp = await fetch("https://akabab.github.io/starwars-api/api/all.json");
                    const data = await resp.json();
                    const characterImages = data.reduce((acc, character) => {
                        acc[String(character.id)] = character.image;
                        return acc;
                    }, {});
                    setStore({ characterImages });
                } catch (error) {
                    console.error("No se pudieron cargar las imágenes de personajes:", error);
                }
            },
            getCharacters: async (url) => {
                const resp = await fetch(url);
                const dataCharacters = await resp.json();
                setStore({
                    characters: dataCharacters
                })
            },
            getPlanets: async (url) => {
                const resp = await fetch(url);
                const dataPlanets = await resp.json();
                setStore({
                    planets: dataPlanets
                })
            },
            getCharacter: async (url) => {
                const resp = await fetch(url);
                const dataCharacter = await resp.json();
                setStore({ character: dataCharacter })
            },
            getPlanet: async (url) => {
                const resp = await fetch(url);
                const dataPlanet = await resp.json();
                setStore({ planet: dataPlanet })
            },
            addFavorite: (personaje) => {
                setStore({
                    favorite: getStore().favorite.concat(personaje)
                })
            },
            removeFavorite: (personaje) => {
                setStore({
                    favorite: getStore().favorite.filter(fav => fav !== personaje)
                })
            }




        }
    }
}