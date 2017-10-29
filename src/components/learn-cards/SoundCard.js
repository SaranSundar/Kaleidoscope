import React, {Component} from 'react';
import {words} from "../../helpers";
import Login from "../Login";
import {BingSpeechClient, VoiceVoiceSynthesisResponse} from 'bingspeech-api-client';
var fs = require('fs');
var os = require('os');
var path = require('path');

var colors = ["button turquoise", "button crimson", "button purple", "button yellow", "button blue"];

class SoundCard extends Component {


    handleClick = (e) => {
          var msg = new SpeechSynthesisUtterance();
        // // //var voices = window.speechSynthesis.getVoices();
          msg.text = e.target.innerHTML;
        // // // msg.lang = 'ta-MY';
          window.speechSynthesis.speak(msg);
        // console.log("WORKING");
        // let subscriptionKey = '5e128f97f2ba48328b40879815b1366a';
        //  let client = new BingSpeechClient(subscriptionKey);
        // // console.log("CLIENT IS " + client);
        //  //client.synthesizeStream('I have a dream').then(audioStream => console.log(audioStream));
        // client.synthesize('Todos para uno y uno para todos', 'es-es', 'female').then(result => {
        //     var file = path.join(os.tmpdir(), 'bingspeech-api-client.wav');
        //     var wstream = fs.createWriteStream(file);
        //     wstream.write(result.wave);
        //     console.log('Text To Speech completed. Audio file written to', file);
        // });
    };

    render() {
        const listItems = words().map((word, index) =>
            <div className="column has-text-centered is-2">
                <button className={colors[Math.floor(Math.random() * 5)]} key={word}
                        onClick={(e) => this.handleClick(e)}>
                    {word}
                </button>
            </div>
        );
        return (
            <div>
                <Login setUser={this.props.setUser}/>
                <div className="section">
                    <div className="container">
                        <div className="columns is-multiline">
                            {listItems}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default SoundCard;
