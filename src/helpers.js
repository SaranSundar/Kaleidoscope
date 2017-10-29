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

export function sounds() {
    var words = ['egg', 'cake', 'pie', 'pizza', 'burger', 'taco', 'clock', 'calendar', 'pencil cup', 'beaver',
        'elephant', 'panda', 'zipper', 'raft', 'popsicle', 'cactus', 'cracker', 'orange', 'chocolate', 'record',
        'cassette', 'CD', 'button', 'corn dog', 'apple', 'cupcake', 'crayon', 'key', 'sushi',
        'battery'];

    return words;
}

export function getColorName(rgb) {
    var col = "na";

    switch (rgb) {
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

export function getColor(color) {
    var col = "na";

    switch (color) {
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


export function words() {
    var sounds = ['dog', 'cat', 'bird', 'rabbit', 'frog', 'cow', 'elephant', 'duck', 'fish', 'lion', 'tiger', 'horse',
        'chicken', 'pig', 'sheep', 'alligator', 'bear', 'moose', 'octopus', 'shark', 'squirrel', 'penguin', 'polar bear', 'turtle',
        'giraffe', 'panda', 'monkey', 'butterfly', 'zebra', 'bee'];
    return sounds;
}

export function wordsPicLinks() {
    var pics = ["https://files.slack.com/files-pri/T7QF7AU0P-F7RFQL1FD/golden-retriever-dogs-puppies-6.png",
        "https://files.slack.com/files-pri/T7QF7AU0P-F7SEK4RE2/cat.png",
        "https://files.slack.com/files-pri/T7QF7AU0P-F7SEK4806/bird__1_.png",
        "https://files.slack.com/files-pri/T7QF7AU0P-F7SEK5JCW/rabbit.png",
        "https://files.slack.com/files-pri/T7QF7AU0P-F7SLGHERM/frog.png",
        "https://files.slack.com/files-tmb/T7QF7AU0P-F7R2S9GM7-78f4d4d04d/cow_720.png",
        "https://files.slack.com/files-pri/T7QF7AU0P-F7SEK54TY/elephant.png",
        "https://files.slack.com/files-tmb/T7QF7AU0P-F7SEK4YEA-e6185b70cb/duck_720.png",
        "https://files.slack.com/files-tmb/T7QF7AU0P-F7R2S9XED-24f9614e83/fish_480.png",
        "https://files.slack.com/files-tmb/T7QF7AU0P-F7RN2BA4D-12e65045d4/lion_360.png",
        "https://files.slack.com/files-pri/T7QF7AU0P-F7QUDRTJL/tiger.png",
        "https://files.slack.com/files-tmb/T7QF7AU0P-F7RN9QFGV-7d461d0550/horse_480.png",
        "https://files.slack.com/files-tmb/T7QF7AU0P-F7SESJ4AJ-1262e264a2/chicken_480.png",
        "https://files.slack.com/files-tmb/T7QF7AU0P-F7RJ73RMY-8732b5ded4/pig_360.png",
        "https://files.slack.com/files-pri/T7QF7AU0P-F7R2ZQA1F/sheep.png",
        "https://files.slack.com/files-pri/T7QF7AU0P-F7RN9PLAZ/alligator.png",
        "https://files.slack.com/files-tmb/T7QF7AU0P-F7RJ72A0J-6176ecbb19/bear_360.png",
        "https://files.slack.com/files-tmb/T7QF7AU0P-F7SESJLF8-15a8ab658d/moose_720.png",
        "https://files.slack.com/files-tmb/T7QF7AU0P-F7RKR9YAY-2b9dae0cac/october_720.png",
        "https://files.slack.com/files-pri/T7QF7AU0P-F7SLQ1TPZ/shark.png",
        "https://files.slack.com/files-tmb/T7QF7AU0P-F7RFY5U67-2de689a6fb/squirrel_360.png",
        "https://files.slack.com/files-pri/T7QF7AU0P-F7RJ73NJW/penguin.png",
        "https://files.slack.com/files-tmb/T7QF7AU0P-F7QUDQMNU-9ba9320eb6/polarbear_480.png",
        "https://files.slack.com/files-tmb/T7QF7AU0P-F7RKRBYUC-73556a98c2/turtle_360.png",
        "https://files.slack.com/files-pri/T7QF7AU0P-F7RKR9BS8/giragge.png",
        "https://files.slack.com/files-tmb/T7QF7AU0P-F7SESK3SS-4f8ce6df58/panda_360.png",
        "https://files.slack.com/files-tmb/T7QF7AU0P-F7RJ72ZKL-ec38b26dcc/monkey_360.png",
        "https://files.slack.com/files-tmb/T7QF7AU0P-F7QUDP8AC-ff081e9cfd/butterfly_360.png",
        "https://files.slack.com/files-pri/T7QF7AU0P-F7SESLX9U/zebra.png",
        "https://files.slack.com/files-pri/T7QF7AU0P-F7RJ72D0S/bee.png"]
    return pics;
}

