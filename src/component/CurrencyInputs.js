import React from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const CurrencyInputs = (props) => {
    
    return (
        <>
            <Box sx={{ alignItems: "center", justifyContent: "center", display: "flex" }}>

                <TextField 
                id="outlined-basic" 
                type="number"
                name={props.InputName} 
                variant="outlined"                
                value={props.amount}
                onChange={props.onChange}
                />
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    {/* <InputLabel id="demo-simple-select-label">currency</InputLabel> */}
                    <Select
                        autoWidth
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={props.currency}
                        onChange={props.onChange}
                        name={props.selectName}
                        
                    >
                        {
                            props.currencies.map(item => (
                                <MenuItem key={item} value={item}>{item}</MenuItem>
                            ))
                        }

                        
                        
                        {/* <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem> */}
                    </Select>
                </FormControl>
            </Box>


        </>
    )
}

export default CurrencyInputs