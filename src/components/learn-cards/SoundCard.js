import React, {Component} from 'react';


class SoundCard extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <button>Play Sound</button>
            </div>
        );
    }
}


export default SoundCard;
