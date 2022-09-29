
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { Box } from '@mui/system';
import React, { useState, useEffect } from 'react';
function SearchBar(props) {
    let [searchTerm, setSearchTerm] = useState('')
    const [search, setSearch] = useState([])
    //this use effect runs a get to list all the pokemon inside of the combo box with a limit of 9999
    // i declared pokemonitem in order to get the value of the autocomplete and place it as the handle search prop so when 
    // i select a pokemon from the combo box and hit search the handle search will search the value of the current
    // selection inside of the combo box
    useEffect(() => {
        fetch('http://localhost:3000/PokeInfo?limit=9999')
            .then((response) => response.json())
            .then((json) => setSearch(json.map(data => data.name)))
    }, [])


    let pokemonItem = document.getElementById('pokemon-search')

    return (


        <Stack sx={{ width: 300 }}>

            <form onSubmit={(e) => props.handleSearch(e, pokemonItem.value)}>



                <Autocomplete id='pokemon-search'
                    getOptionLabel={(search) => `${search}`}
                    options={search}
                    sx={{ width: 300 }}
                    isOptionEqualToValue={(option, value) =>
                        option === value
                    }
                    noOptionsText={'Not Found'}
                    renderOption={(props, search, i) => (
                        <Box componebt='li' {...props} key={search.i}>
                            {search}
                        </Box>

                    )}
                    renderInput={(params) => <TextField {...params} label='search for pokemon' />} /><input type="submit" />

            </form >

        </Stack>
    )
}

export default SearchBar
