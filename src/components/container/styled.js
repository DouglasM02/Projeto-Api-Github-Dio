import {styled as styledMui, Button } from '@mui/material'

export const CustomButton = styledMui(Button) ({
    border: "2px solid #75B9BE",
    backgroundColor: "#595758",
    color: "#fff",
    "&:hover":{
        border:"none",
        backgroundColor: "#75B9BE",
        color: "#595758",
    },
    "&:focus":{
        border:"none",
        backgroundColor: "#75B9BE",
        color: "#595758",
    }
})
