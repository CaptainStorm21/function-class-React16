import React, { Component } from "react";
import "../App.css";


class didMount extends Component {
    constructor() {
        super();

        this.state = {
            name: 'Arlena Cobalt'
        }
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState ({
                name: 'Catherine De Long'
            });
        }, 1000);
    }

    render() {
        console.log('didMount');

        return (
            <div className = "Home">
                <p>This is didMount's output {this.state.name}</p>
            </div>
        )
    }
}

export default didMount;
