import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';

function VehicleForm() {

    const [year, setYear] = useState('2021');
    const [trim, setTrim] = useState('');

    return (
        <Box sx={{}}>
            <FormControl sx={{ minWidth: 500, m: 1 }}>
                <InputLabel id="year-input">Year</InputLabel>
                <Select
                    labelId="year-input"
                    id="year-select"
                    value={year}
                    label="Year"
                    onChange={(e) => setYear(e.target.value)}
                >
                    <MenuItem value="2021">2021</MenuItem>
                    <MenuItem value="2022">2022</MenuItem>
                    <MenuItem value="2023">2023</MenuItem>
                </Select>

            </FormControl>
            <FormControl sx={{ minWidth: 500, m: 1 }}>
                <InputLabel id="trim-input">Trim</InputLabel>
                <Select
                    labelId="trim-input"
                    id="trim-select"
                    value={trim}
                    label="Trim"
                    onChange={(e) => setTrim(e.target.value)}
                >
                    <MenuItem value="base">Base</MenuItem>
                    <MenuItem value="big-bend">Big Bend</MenuItem>
                    <MenuItem value="black-diamond">Black Diamond</MenuItem>
                    <MenuItem value="outer-banks">Outer Banks</MenuItem>
                    <MenuItem value="badlands">Badlands</MenuItem>
                    <MenuItem value="wild-trak">Wild Trak</MenuItem>
                    <MenuItem value="everglades">Everglades</MenuItem>
                    <MenuItem value="first-edition">First Edition</MenuItem>

                </Select>
            </FormControl>
            <FormControl sx={{ minWidth: 500, m: 1 }}>
                <FormLabel id='door-configuration'>Number of Doors</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="door-configuration"
                    defaultValue="2 Door"
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="2Dr" control={<Radio />} label="2 Door" />
                    <FormControlLabel value="4Dr" control={<Radio />} label="4 Door" />
                </RadioGroup>
            </FormControl>
            <FormControl sx={{ minWidth: 500, m: 1 }}>
                <FormLabel id='sasquatch-indication'>Option Packages</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="sasquatch-package-indication"
                    defaultValue="non-sas"
                    name="radio-buttons-group-2"
                >
                    <FormControlLabel value="non-sas" control={<Radio />} label="Non-Sasquatch" />
                    <FormControlLabel value="sas" control={<Radio />} label="Sasquatch" />
                </RadioGroup>
            </FormControl>

        </Box>
    );
}

export default VehicleForm;