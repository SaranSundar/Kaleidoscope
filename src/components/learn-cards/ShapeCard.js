import React, {Component} from 'react';
import {init} from "../shapes";

class ShapeCard extends Component {

    componentDidMount() {
        const canvas = this.refs.canvas;
        init(canvas);
    }

    render() {
        return(
            <div>
                <canvas ref="canvas" width={window.innerWidth} height={window.innerHeight} />
            </div>
        )
    }
}
export default ShapeCard;
