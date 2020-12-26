import Styled from "styled-components"

export const Section = Styled.section `
    padding: 1rem 0;
`

export const Input = Styled.input `
    display: block;
    padding: 10px;
    margin: 2rem 0;
    border-radius: 6px;
    border: none;
    outline: none;
    background: antiquewhite;
    font-size: 18px;
`

export const Submit = Styled.button `
    border-radius: 25px;
    border: none;
    color: white;
    background-color: #05e8ba;
    background-image: linear-gradient(315deg,#05e8ba 0%,#087ee1 74%);
    cursor: pointer;
    width: 100%;
    font-weight: bold;
    font-size: 18px;
    padding: 1rem 0;
    text-align: center;
    outline: none;
    transition: all 0.3s ease-in-out;
    &:hover {
        box-shadow: 2px 2px 40px 10px rgb(140 138 209);
    };
`
export const PInfo = Styled.p `
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    border-bottom: 1px solid #06d1c2;
    padding-bottom: 5px;
`