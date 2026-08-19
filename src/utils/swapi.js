const getSwapiId = (url) => url.match(/\/(\d+)\/?$/)?.[1] ?? "";

export { getSwapiId };
