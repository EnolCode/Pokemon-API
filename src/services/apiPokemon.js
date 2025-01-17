class Pokemon {
    #pokemon;

    constructor(){
        this.pokemon = [];
    }

    getPokemons(){
        console.log(this.pokemon)
        return this.pokemon;
    }

    async fetchAll(){
        try {
            const url = "https://pokeapi.co/api/v2/pokemon/";
            const response = await fetch(url);
            const json = await response.json();
            return json.results;  
        } catch (error) {
            console.error(error);
        }
    }
}

export default Pokemon;