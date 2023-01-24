import React, { useState } from "react";
import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";

import { Container } from "./styles";

interface CheckboxComponentProps {
    check:{
        demand_check:boolean,
        origin_check:boolean,
        all_check:boolean
    };
    onClick: (value:string) => void;
}

const CheckboxComponent:React.FC<CheckboxComponentProps> = (props:CheckboxComponentProps) => {

    const { onClick, check } = props

    return (
        <Container>
            <FormGroup>
                <FormControlLabel 
                    color='primary'
                    sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} 
                    control={
                        <Checkbox 
                            onClick={()=> onClick("demand_city")}
                            checked={check.demand_check}
                        />
                    } 
                    label="Demand" 
                />
                <FormControlLabel 
                    /*disabled*/ 
                    sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} 
                    control={
                        <Checkbox 
                            onClick={()=> onClick("origin_city")}
                            checked={check.origin_check}
                        />
                    } 
                    label="Origin" 
                />
                <FormControlLabel 
                    /*disabled*/ 
                    sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} 
                    control={
                        <Checkbox 
                            onClick={()=> onClick("all")}
                            checked={check.all_check}
                        />
                    } 
                    label="All Informations" 
                />
            </FormGroup>
        </Container>
    )
}

export default CheckboxComponent