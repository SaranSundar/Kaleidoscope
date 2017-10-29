import React from 'react';

export function lessons() {
    return ["Colors", "Shapes", "Sounds", "Math", "Words"]
}

export function colors() {
    var colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Pink', 'Black', 'Gray'];

    return colors;
}

export function shapes() {
    var shapes = ['Circle', 'Triangle', 'Square', 'Rectangle', 'Trapezoid', 'Parallelogram', 'Diamond', 'Pentagon', 'Hexagon', 'Octagon', 'Heart'];

    return shapes;
}

export function words() {
    var words = ['birthday cake','cake', 'pie', 'pizza', 'burger', 'taco', 'clock', 'calendar', 'pencil cup', 'beaver',
        'elephant', 'panda', 'zipper', 'raft', 'popsicle', 'cactus', 'cracker', 'marshmallow', 'chocolate', 'record',
        'cassette', 'CD', 'button', 'corn dog', 'apple', 'cupcake', 'green crayon', 'key', 'sushi',
        'battery'];

    return words;
}

export function getColorName(rgb){
    var col = "na";

    switch(rgb){
        case "rgba(237, 60, 47, 0.7)":
            col = 'Red';
            break;
        case "rgba(247, 113, 46, 0.7)":
            col = 'Orange';
            break;
        case "rgba(249, 236, 92, 0.7)":
            col = 'Yellow';
            break;
        case "rgba(79, 209, 85, 0.7)":
            col = 'Green';
            break;
        case "rgba(114, 175, 249, 0.7)" :
            col = 'Blue';
            break;
        case "rgba(157, 30, 216, 0.7)" :
            col = 'Purple';
            break;
        case "rgba(255, 0, 128, 0.7)" :
            col = 'Pink';
            break;
        case "rgba(0, 0, 0, 0.7)" :
            col = 'Black';
            break;
        case "rgba(189,195,199, 0.7)" :
            col = "Gray";
            break;
    }

    return col;
}

export function getColor(color){
    var col = "na";

    switch(color){
        case 'Red':
            col = "rgba(237, 60, 47, 0.7)";
            break;
        case 'Orange':
            col = "rgba(247, 113, 46, 0.7)";
            break;
        case 'Yellow':
            col = "rgba(249, 236, 92, 0.7)";
            break;
        case 'Green':
            col = "rgba(79, 209, 85, 0.7)";
            break;
        case 'Blue':
            col = "rgba(114, 175, 249, 0.7)";
            break;
        case 'Purple':
            col = "rgba(157, 30, 216, 0.7)";
            break;
        case 'Pink':
            col = "rgba(255, 0, 128, 0.7)";
            break;
        case 'Black':
            col = "rgba(0, 0, 0, 0.7)";
            break;
        case "Gray":
            col = "rgba(189,195,199, 0.7)"
            break;
    }

    return col;
}



export function sounds() {
    var sounds = ['dog', 'cat', 'bird', 'rabbit', 'frog', 'cow', 'elephant', 'duck', 'fish', 'lion', 'tiger', 'horse',
        'chicken', 'pig', 'sheep', 'alligator', 'bear', 'moose', 'octopus', 'shark', 'squirrel', 'penguin', 'polar bear', 'turtle',
        'giraffe', 'panda', 'monkey', 'butterfly', 'zebra', 'bee'];
    return sounds;
}

