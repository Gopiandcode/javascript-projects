import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class FullRoster extends Component {

    render() {
        let objs = [
            {
                name: "Kiran Gopinathan",
                number: 10,
                position: 13
            },
            {
                name: "Dhen Padilla",
                number: 11,
                position: 4
            },
            {
                name: "Alexandru Bondor",
                number: 12,
                position: 10
            },
            {
                name: "Alexandru Matei",
                number: 4,
                position: 3
            }
        ];

        return (
            <div>
                <ul>
                    {
                        objs.map((p) => (
                            <li key={p.number}>
                                <Link to={`/roster/${p.number}`}>{p.name}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default FullRoster;