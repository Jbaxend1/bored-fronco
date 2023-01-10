import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import VehicleForm from './VehicleForm/VehicleForm';

function AddVehicle() {


    return (
        <div>
            <h1 aria-label="Add Vehicle Form Pazge" >Add Your Vehicle</h1>

            <VehicleForm />
        </div>
    );
}

export default AddVehicle;