import React, { Component } from 'react';

import UserInfo from './UserInfo';
import './Comment.css';

class Comment extends Component {
    render() {
        return (<div className="Comment">
            <UserInfo user={this.props.author}/>
            <div className="Comment-text">
                {this.props.text}
            </div>
            <div className="Comment-date">
                {this.props.date.toLocaleTimeString()}
            </div>
        </div>);
    };
}


export default Comment;