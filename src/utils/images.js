const CHARACTER_PLACEHOLDER = "/img/character-placeholder.svg";
const PLANET_PLACEHOLDER = "/img/planet-placeholder.svg";

function normalizeWikiImage(url) {
    if (!url) {
        return null;
    }
    if (url.includes("/revision/")) {
        return url;
    }
    return `${url}/revision/latest/scale-to-width-down/400`;
}

function getCharacterImageUrl(id, imageMap = {}) {
    return normalizeWikiImage(imageMap[id]) || CHARACTER_PLACEHOLDER;
}

function getPlanetImageUrl(name) {
    const label = encodeURIComponent(name || "Planet");
    return `https://placehold.co/400x300/212529/adadb5?text=${label}`;
}

export { getCharacterImageUrl, getPlanetImageUrl, CHARACTER_PLACEHOLDER, PLANET_PLACEHOLDER };
