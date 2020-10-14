import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({ color }) => color && color};
    height: 50px;
    width: 50px;
    display: flex;
`