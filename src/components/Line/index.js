import React from 'react';
import Point from '../Point';
import { Container } from './styles';

const Line = ({ startColor, endColor }) => {

    let red = startColor[0];
    let green = startColor[1];
    let blue = startColor[2];

    const cl = [endColor[0] - startColor[0], endColor[1] - startColor[1], endColor[2] - startColor[2]];

    let lineArray = [];

    for (var i = 1; i <= 255; i++) {

        i < Math.abs(cl[0]) && cl[0] < 0 && red <= 255 && red--
        i < Math.abs(cl[0]) && cl[0] > 0 && red >= 0 && red++

        i < Math.abs(cl[1]) && cl[1] > 0 && green <= 255 && green++
        i < Math.abs(cl[1]) && cl[1] < 0 && green >= 0 && green--

        i < Math.abs(cl[2]) && cl[2] > 0 && blue <= 255 && blue++
        i < Math.abs(cl[2]) && cl[2] < 0 && blue >= 0 && blue--

        lineArray.push(`rgb(${red},${green},${blue})`);
    }


    return (
        <Container>
            {lineArray.map((l, i) => <Point key={i} color={l}> </Point>)}
        </Container>
    )
}

export default Line;
