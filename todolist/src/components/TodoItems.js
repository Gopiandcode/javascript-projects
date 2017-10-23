import React, {Component} from 'react';

import FlipMove from 'react-flip-move';

class TodoItems extends Component {
    constructor(props, context) {
        super(props, context);

        this.createTasks = this.createTasks.bind(this);
        this.delete = this.delete.bind(this);
    }


    createTasks(item) {
    return (
        <li
         onClick={(e) => {this.delete(item.key, e);}}
         key={item.key}>{item.text}</li>
    );
    }

    delete(key) {
        this.props.delete(key);
    }


    render() {
        let todoEntries = this.props.entries;
        let listItems = todoEntries.map(this.createTasks); 

        return (
            <ul className="theList">
                <FlipMove duration={250} easing="ease-out">
                    {listItems}
                </FlipMove>
            </ul>
        );
    }
}


export default TodoItems;