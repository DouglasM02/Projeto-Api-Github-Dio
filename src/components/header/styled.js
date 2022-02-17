import { TextField, styled as styledMui, Button } from '@mui/material'
import styled from 'styled-components'

export const Title = styled.h1`
    font-size: 1.4em;
    color: #fff;
`

export const CustomTextField = styledMui(TextField)({
    '& label.MuiInputLabel-root':{
        color: "white",
    },
     '& label.Mui-focused': {
        color: '#75B9BE',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#75B9BE'
        },
    },
    '& .MuiOutLinedInput-root':{
        borderColor: '#75B9BE'
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'white',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#75B9BE',
    },
     ' & .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: "white",
    },
    '& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderWidth: '1px',
        borderColor: '#75B9BE',
    },
     '& .MuiInputBase-root':{
        color: 'white',
    },
})

export const CustomButton = styledMui(Button)({
    backgroundColor: "#75B9BE",
    color: "#595758",
    '&:hover':{
        backgroundColor: "#EFD09E",
        color:"#595758"
    }
})
