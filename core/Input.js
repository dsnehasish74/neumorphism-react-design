import styled from 'styled-components';
import {colorLuminance} from './util.js'
const Input = styled.input`
    box-shadow:inset 2px 2px 5px ${props=>colorLuminance(props.bg,-1*0.15)}, inset -5px -5px 10px ${props=>colorLuminance(props.bg,0.15)};
    width: ${props=>props.width?props.width:"100%"};
    box-sizing: border-box;
    transition: all 0.2s ease-in-out;
    appearance: none;
    -webkit-appearance: none;
    border: none;
    outline: none;
    font-size: ${props=>props.fsize?props.fsize:"16px"};
    border-radius: ${props=>props.radius?props.radius:"250px"};
    padding: ${props=>props.padding?props.padding:"15px"};
    background-color: ${props=>props.bg?props.bg:"#e0e0e0"};
    text-shadow: 1px 1px 0 #fff;

    &:focus {
    box-shadow:  inset 1px 1px 2px ${props=>colorLuminance(props.bg,-1*0.15)}, inset -1px -1px 2px ${props=>colorLuminance(props.bg,0.15)};
  }
`

export default Input;