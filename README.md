
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

    I decided to pick the basic data `name, url, count` and save it the redux store and from that picked the id to help display the image.

    Initial data is displayed and the list of pokemons thats fetched further gets updated with the full details basing on url and then the types tiles will be loaded. This allows the user fast load times.

- #### View Single Pokemon Details:

    Since data is already stored in state for each pokemon on a given page, I go ahead and pick up that data and display it in a new screen.

- #### Pagination:

    With the count of the total pokemons saved in the redux store, I am able to calculate the number of pages given the set limit and hence show pagination component at the bottom of the screen on initial app load.

- #### Search:
   
   I couldn't find documentaion for search in the pokeapi documentaion. I decided to fetch all the pokemons which could have a potential perfomance issue but since I catch responses, it will be fetched occassionaly and given the current size, the perfomance didn't get affected.

   I went ahead and filtered all the names that matched the pokemons in the redux store and narrowed it down to match search phrase. When user chooses a specific one, I make an api call to pick its details and show the user that pokemon's details.

## Endpoints
- `/pokemons/page/:pageNumber` to view pokemons on a given page
- `/` to view pokemons for first page
- `/pokemon/:pokemonName` to view specific pokemon details.

## Potential improvements
- Find a better way to handle search since picking all the pokemons, isn't the best approach.
- Cross Browser compatibility. I didn't take time to add polyfills for some functionality that wouldn't work as expected in other Browsers other than Chrome.
- Implement clicking on types tiles to filter all pokemons with similar types or moves
- Add image loaders.
- Make the hosted link working on ios devices
