import React, {Component} from 'react';


class MathCard extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            randomNum1: 0,
            randomNum2: 0,
            operation: null,
            level: 1,
            score: 0
        });
    }

    componentDidMount() {
        this.setNumbers();
    }

    validateInput(e){
        e.preventDefault();
        if(this.state.operation === "+"){
            if(parseInt(this.answer.value) === this.state.randomNum1 + this.state.randomNum2){
                alert("YOUR ANSWER IS RIGHT");
                this.setState({score: this.state.score+1});
                this.setNumbers();

            }
            else{
                alert("TRY AGAIN");
            }
        }
        else if(this.state.operation === "-"){
            if(parseInt(this.answer.value) === this.state.randomNum1 - this.state.randomNum2){
                alert("YOUR ANSWER IS RIGHT");
                this.setState({score: this.state.score+1});
                this.setNumbers();

            }
            else{
                alert("TRY AGAIN");
            }
        }
        this.answer.clear()

    }

    setNumbers = () => {

        var num1 = Math.floor((Math.random() * Math.pow(10, this.state.level)) + 1);
        var num2 = Math.floor((Math.random() * Math.pow(10, this.state.level)) + 1);
        var chance = Math.floor((Math.random() * 10) + 1);
        var op = "";
        if (chance >= 5) {
            op = "+";
        }
        else {
            op = "-";
        }

        this.setState({randomNum1: num1, randomNum2: num2, operation: op});
        document.getElementById("mathInput").value = null;
    };

    render() {
        if (this.state.operation) {
            return (
                <form onSubmit={(e) => this.validateInput(e)}>
                    <div className="container vcenter hidden">
                        <div className="columns">
                            <div className="column has-text-centered is-2">
                                <h1 className="math">{this.state.randomNum1}</h1>
                            </div>
                            <div className="column has-text-centered is-2">
                                <h1 className="math">{this.state.operation}</h1>
                            </div>
                            <div className="column has-text-centered is-2">
                                <h1 className="math">{this.state.randomNum2}</h1>
                            </div>
                            <div className="column has-text-centered is-2">
                                <h1 className="math">=</h1>
                            </div>
                            <div className="column has-text-centered is-2">
                                <input ref={(input) => this.answer = input} type="text" id="mathInput" placeholder="Answer!"/>
                            </div>
                        </div>
                    </div>
                </form>
            );
        }
        else {
            return <h1>Loading</h1>;
        }

    }


}


export default MathCard;
