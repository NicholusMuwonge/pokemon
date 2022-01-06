
# Pokémon Challenge

This project allows users to view Pokémons and their characteristics with the ability to search for a specific one.
Endpoint: list-pokemons.netlify.app

## Tools Used
- Typescript
- React
- Redux and Redux Persist
- Axios and Axios Cache Adapter
- Material UI

## Setup
- clone this repository
- cd into directory
- run `yarn`
- run  `yarn start`

## Approach per feature
- #### Fetch All Pokemons:

    I decided to pick the basic data `name, url, count` and save it the redux store. From the `url` I picked the `id` to help display the image for that Pokemon.

    Initial data is displayed and the list of pokemons that's already saved in the redux store gets updated with the full details basing on url. This allows the user fast load times in case they are trying to view details for a given pokemon.

- #### View Single Pokemon Details:

    Since data is already stored in redux store for each pokemon on a given page, I go ahead and pick up that data and display it in a new screen.

- #### Pagination:

    With the count of the total pokemons saved in the redux store, I am able to calculate the number of pages given the set limit and hence show pagination component at the bottom of the screen on initial app load.

- #### Search:
   
   I couldn't find documentaion for search in the pokeapi documentaion. I decided to fetch all the pokemons which could have a potential perfomance issue but since I cached the responses, it will be fetched occassionaly and given the current size, the perfomance didn't get affected.[ This could further be improved upon. ]

   I went ahead and filtered all the names that matched the pokemons in the redux store and narrowed it down to match search phrase. When user chooses a specific one through autocomplete suggestions, I make an api call to pick the pokemon's details and display them.

## Endpoints
- `/pokemons/page/:pageNumber` to view pokemons on a given page
- `/` to view pokemons for first page
- `/pokemon/:pokemonName` to view specific pokemon details.

## Potential improvements
- Find a better way to handle search since picking all the pokemons, isn't the best approach.
- Cross Browser compatibility. I didn't take time to add polyfills for some functionality that wouldn't work as expected in other Browsers other than Chrome.
- Implement clicking on types tiles to filter all pokemons with similar types or moves
- Add image loaders.
