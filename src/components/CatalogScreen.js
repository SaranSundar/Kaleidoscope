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
                            <h1 id="title"><strong>Games</strong></h1>
                            <div className="columns is-multiline">
                                <div className="column is-half">
                                    <button className="button turquoise" ref="but"
                                            onClick={() => this.goToCatalogPage("Colors")}
                                            onMouseOver={(evt) => this.showHoverOptions(evt)}>Colors
                                    </button>
                                </div>
                                <div className="column is-half">
                                    <button className="button yellow" ref="but"
                                            onClick={() => this.goToCatalogPage("Animals")}
                                            onMouseOver={(evt) => this.showHoverOptions(evt)}>Animals
                                    </button>
                                </div>
                                <div className="column is-half">
                                    <button className="button purple" ref="but"
                                            onClick={() => this.goToCatalogPage("Math")}
                                            onMouseOver={(evt) => this.showHoverOptions(evt)}>Math
                                    </button>
                                </div>
                                <div className="column is-half">
                                    <button className="button blue" ref="but"
                                            onClick={() => this.goToCatalogPage("Words")}
                                            onMouseOver={(evt) => this.showHoverOptions(evt)}>Words
                                    </button>
                                </div>
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
