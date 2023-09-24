import styled from "styled-components";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

export const WrapperTypeProduct = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
    justify-content:flex-start;
    border-bottom: 1px solid black;
    height: 40px;
`

export const WrapperButtonMore = styled(ButtonComponent)`
    &:hover {
        color: #fff;
        background: green;
        span{
            color: #fff;
        }
    }
    width: 100px;
    text-align:center;
`