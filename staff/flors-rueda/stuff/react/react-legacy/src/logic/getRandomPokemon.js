export default () => {
    const randomId = Math.floor(Math.random() * 151) + 1;
    return fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error('oh no, network is down!');
            }
            return response.json();
        })
        .then((pokeData) => {
            return pokeData
        })
        .catch((error) => {
            throw new Error("Error throwing pokeballs:", error.message);
        });
};