import React, {Component} from 'react';
import {BrowserRouter, Match, Miss} from "react-router";
import NotFound from "./NotFound";
import CatalogScreen from "./CatalogScreen";
import SoundCard from "./learn-cards/SoundCard";
import WordCard from "./learn-cards/WordCard";
import MathCard from "./learn-cards/MathCard";
import ShapeCard from "./learn-cards/ShapeCard";
import Home from "./Home";
import ColorsCard from "./learn-cards/ColorsCard";


class App extends Component {

    /**
     * Event handler for clicking zoom in. Increments the zoom level
     **/
    onZoomIn = () => {
        let zoomLevel = this.state.zoomLevel += .1;
        this.setState({zoomLevel});
    };
    /**
     * Event handler for clicking zoom out. Decrements the zoom level
     **/
    onZoomOut = () => {
        let zoomLevel = this.state.zoomLevel -= .1;

        if (zoomLevel >= 0) {
            this.setState({zoomLevel});
        }

    };
    setMode = (modeType) => {
        this.setState({mode: modeType});
    };
    setUser = (newUser) => {
        this.setState({user: newUser});
    };

    constructor(props) {
        super(props);
        //store our zoom level in state
        this.state = {
            zoomLevel: 1.0,
            user: null,
            mode: ""
        };
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Match exactly pattern="/" exact render={(props) => (
                        <Home setUser={this.setUser} {...props} />)}/>

                    <Match exactly pattern="/catalog" exact render={(props) => (
                        <CatalogScreen setUser={this.setUser} user={this.state.user}
                                       setMode={this.setMode} {...props}/>)}/>

                    <Match exactly pattern="/colors/learn" exact render={(props) => (
                        <ColorsCard setMode={this.setMode} zoomLevel={this.state.zoomLevel} {...props}/>)}/>


                    <Match exactly pattern="/shapes/learn" exact render={(props) => (
                        <ShapeCard setMode={this.setMode} {...props}/>)}/>

                    <Match exactly pattern="/sounds/learn" exact render={(props) => (
                        <SoundCard setMode={this.setMode} {...props}/>)}/>

                    <Match exactly pattern="/math/learn" exact render={(props) => (
                        <MathCard setMode={this.setMode} {...props}/>)}/>

                    <Match exactly pattern="/words/learn" exact render={(props) => (
                        <WordCard setMode={this.setMode} {...props}/>)}/>

                    <Miss component={NotFound}/>
                </div>
            </BrowserRouter>
        );
    }
}


export default App;
