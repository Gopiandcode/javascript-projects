import React, {Component} from 'react';

import Avatar from './Avatar';
import './UserInfo.js';

class UserInfo extends Component {
    render() {
        return (
            <div className="UserInfo">
                <Avatar user={this.props.user}/>
                <div className="UserInfo-name">
                    {this.props.user.name}
                </div>
            </div>
        );
    }
}


export default UserInfo;