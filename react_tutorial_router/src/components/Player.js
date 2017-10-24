import React, { Component } from 'react';

class Player extends Component {
    render() {
        let player = {
            name: "Kiran Gopinathan",
            number: this.props.match.params.number,
            position: 10
        };

        return (
            <div>
                <h1>{player.name} (#{player.number})</h1>
                <h2>{player.position}</h2>
            </div>
        );
    }
}

export default Player;