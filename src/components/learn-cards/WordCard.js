import React, {Component} from 'react';

class WordCard extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <button>Read Color</button>
            </div>
        );
    }
}


export default WordCard;
