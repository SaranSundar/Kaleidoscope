import React from 'react';

export function lessons() {
    return ["Colors", "Shapes", "Sounds", "Math", "Words"]
}

export function colors() {
    var colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Brown', 'Black'];

    return colors;
}

export function shapes() {
    var shapes = ['Circle', 'Triangle', 'Square', 'Rectangle', 'Trapezoid', 'Parallelogram', 'Diamond', 'Pentagon', 'Hexagon', 'Octagon', 'Heart'];

    return shapes;
}

export function words() {
    var words = ['birthday cake', 'green monster', 'blue monster', 'cake', 'pie', 'pizza', 'burger', 'taco', 'clock', 'calendar',
        'pencil holder', 'beaver', 'elephant', 'panda', 'zipper', 'raft', 'popsicle', 'cactus', 'cracker', 'marshmallow', 'chocolate',
        'record', 'cassette', 'CD', 'button', 'corn dog', 'candied apple', 'cupcake', 'marcaroons', 'green crayon', 'key', 'sushi', 'battery',
        'breakfast', 'camera'];

    return words;
}

export function getColor(color){
    var col = "na";
    console.log(color);

    switch(color){
        case 'Red':
            col = "rgba(237, 60, 47,.3)";
            break;
        case 'Orange':
            col = "rgba(247, 113, 46,.3)";
            break;
        case 'Yellow':
            col = "rgba(249, 236, 92,.3)";
            break;
        case 'Green':
            col = "rgba(79, 209, 85,.3)";
            break;
        case 'Blue':
            col = "rgba(114, 175, 249,.3)";
            break;
        case 'Purple':
            col = "rgba(157, 30, 216,.3)";
            break;
        case 'Brown':
            col = "rgba(127, 75, 2, .3)";
            break;
        case 'Black':
            col = "rgba(0, 0, 0, .3)";
            break;

    }

    return col;
}

export function sounds() {
    var sounds = [];
    return sounds;
}

