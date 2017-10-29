import React, {Component} from 'react';
import Draggable from 'react-draggable';
import {colors, getColor, getColorName} from "../../helpers";

function randomColor() {
    return getColor(colors()[Math.floor(Math.random() * 8)])
};

window.ev = false;

class ColorsCard extends Component {

    setColors = () => {
        var box1Color = randomColor();
        var box2Color = randomColor();
        while (box2Color === box1Color) {
            box2Color = randomColor();
        }
        var box3Color = randomColor();
        while (box3Color === box1Color || box3Color === box2Color) {
            box3Color = randomColor();
        }
        var box4Color = randomColor();
        while (box4Color === box1Color || box4Color === box2Color || box4Color === box3Color) {
            box4Color = randomColor();
        }
        var randomNum = Math.floor(Math.random() * 8);
        var answerColor = null;

        if (randomNum < 2) {
            answerColor = box1Color;
        }
        else if (randomNum < 4) {
            answerColor = box2Color;
        }
        else if (randomNum < 6) {
            answerColor = box3Color;
        }
        else {
            answerColor = box4Color;
        }
        this.setState({box1Color, box2Color, box3Color, box4Color, answerColor});
    };
    handleDrag = (e, ui) => {
        const {x, y} = this.state.deltaPosition;
        this.setState({
            deltaPosition: {
                x: x + ui.deltaX,
                y: y + ui.deltaY,
            }
        });
    };
    onStart = () => {
        this.setState({activeDrags: ++this.state.activeDrags});
    };
    onStop = () => {
        this.setState({activeDrags: --this.state.activeDrags});
    };
    testStop = (id) => {
        console.log(id);
        if (window.ev) {
            if (id === "1") {
                if (this.state.box1Color === this.state.answerColor) {
                    alert("YOU WIN!");
                    document.location.reload(true)
                    //this.setColors();
                }
                else {
                    alert("Try Again!");
                }
            }
            else if (id === "2") {
                if (this.state.box2Color === this.state.answerColor) {
                    alert("YOU WIN!");
                    document.location.reload(true)
                    //this.setColors();
                }
                else {
                    alert("Try Again!");
                }
            }
            else if (id === "3") {
                if (this.state.box3Color === this.state.answerColor) {
                    alert("YOU WIN!");
                    document.location.reload(true)
                    //this.setColors();
                }
                else {
                    alert("Try Again!");
                }
            }
            else if (id === "4") {
                if (this.state.box4Color === this.state.answerColor) {
                    alert("YOU WIN!");
                    document.location.reload(true)
                    //this.setColors();
                }
                else {
                    alert("Try Again!");
                }
            }
        }

        // if (evt.target.style.backgroundColor === this.state.answerColor) {
        //     if (window.ev) {
        //         alert("YOU WIN!");
        //     }
        // }

    };

    constructor(props) {
        super(props);
        this.state = ({
            activeDrags: 0,
            deltaPosition: {
                x: 0, y: 0
            },
            controlledPosition: {
                x: 50, y: 200
            },
            box1Color: null,
            box2Color: null,
            box3Color: null,
            box4Color: null,
            answerColor: null,
        });
        //this.setState({answerColor : Math.random() < 0.5 ? this.state.box1Color : this.state.box3Color});
    }

    componentDidMount() {
        this.setColors();
    }

    render() {

        const {deltaPosition, controlledPosition} = this.state;
        console.log(this.state.randomNum);

        var box1 = (
            <Draggable bounds="body" onStop={() => this.testStop("1")}>
                <div className="box" style={{backgroundColor: this.state.box1Color}}>
                </div>
            </Draggable>
        );

        var box2 = (
            <Draggable bounds="body" onStop={() => this.testStop("2")}>
                <div className="box" style={{backgroundColor: this.state.box2Color}}>
                </div>
            </Draggable>
        );

        var box3 = (
            <Draggable bounds="body" onStop={() => this.testStop("3")}>
                <div className="box" style={{backgroundColor: this.state.box3Color}}>
                </div>
            </Draggable>
        );
        var box4 = (
            <Draggable bounds="body" onStop={() => this.testStop("4")}>
                <div className="box" style={{backgroundColor: this.state.box4Color}}>
                </div>
            </Draggable>
        );

        if (this.state.box1Color) {
            return (
                <div>
                    <div className="columns is-multiline margin-top">
                        <div className="column is-4-mobile">
                            {box1}
                        </div>
                        <div className="column is-4-mobile">
                            {box2}
                        </div>
                        <div className="column is-4-mobile">
                            {box3}
                        </div>

                        <div className="column is-4-mobile">
                            {box4}
                        </div>
                    </div>

                    <Draggable axis="none" defaultPosition={{x: window.innerWidth / 3, y: window.innerHeight - 450}}
                               bounds="body">
                        <div id="answer" onMouseOver={function () {
                            //console.log("on MOUSE OVER");
                            window.ev = true;
                        }}
                             style={{backgroundColor: this.state.answerColor}} onMouseOut={

                            function () {
                                window.ev = false;
                            }}
                        >

                            <h1 style={{color: "white"}} onMouseOver={function () {
                                //console.log("on MOUSE OVER");
                                window.ev = true;
                            }} onMouseOut={

                                function () {
                                    window.ev = false;
                                }}>{getColorName(this.state.answerColor)}</h1>
                        </div>
                    </Draggable>
                </div>
            );
        }
        else {
            return <h1>LOADING</h1>
        }
    }
}

export default ColorsCard;
