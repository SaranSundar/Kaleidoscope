import React, {Component} from 'react';
import Login from "./Login";

class CatalogScreen extends Component {

    goToCatalogPage = (category) => {
        this.props.setMode("learn");
        this.context.router.transitionTo(`/${category}/learn`);
    };
    showHoverOptions = (e) => {

    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Login setUser={this.props.setUser}/>
                <section className="section">
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <h1 className="title">Games</h1>
                            <div className="columns is-multiline">
                                <div className="column is-one-third">
                                    <button className="button turquoise" ref="but"
                                            onClick={() => this.goToCatalogPage("colors")}
                                            onMouseOver={(evt) => this.showHoverOptions(evt)}>Colors
                                    </button>
                                </div>
                                <div className="column is-one-third">
                                    <button className="button crimson" ref="but"
                                            onClick={() => this.goToCatalogPage("shapes")}
                                            onMouseOver={(evt) => this.showHoverOptions(evt)}>Shapes
                                    </button>
                                </div>
                                <div className="column is-one-third">
                                    <button className="button yellow" ref="but"
                                            onClick={() => this.goToCatalogPage("sounds")}
                                            onMouseOver={(evt) => this.showHoverOptions(evt)}>Sounds
                                    </button>
                                </div>
                                <div className="column"></div>
                                <div className="column is-one-third">
                                    <button className="button purple" ref="but"
                                            onClick={() => this.goToCatalogPage("math")}
                                            onMouseOver={(evt) => this.showHoverOptions(evt)}>Math
                                    </button>
                                </div>
                                <div className="column is-one-third">
                                    <button className="button blue" ref="but"
                                            onClick={() => this.goToCatalogPage("words")}
                                            onMouseOver={(evt) => this.showHoverOptions(evt)}>Words
                                    </button>
                                </div>
                                <div className="column"></div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

CatalogScreen.contextTypes = {
    router: React.PropTypes.object
};

export default CatalogScreen;
