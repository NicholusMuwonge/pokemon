import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../../redux/store';
import { getAllPokemons } from './AllPokemonsActions';
import AllPokemonsComponent from './ui/AllPokemonsComponent';

const AllPokemonsContainer: React.FC = () =>{
    const dispatch = useDispatch();
    const allPokemons = useSelector((centralState: RootStore)=>centralState.pokemons.results)
    useEffect(()=>{
        dispatch(getAllPokemons({offset: 0}))
    },[dispatch])
    return(
        <>
        <AllPokemonsComponent 
        allPokemons={allPokemons}
        />
        </>
    )
}

export default AllPokemonsContainer;
