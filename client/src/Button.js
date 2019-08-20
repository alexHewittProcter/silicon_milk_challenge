import React, {Component} from 'react';

export default class Button extends Component {
    render() {
        return (
            <button type='submit' className={'btn btn-large btn-block btn-'+this.props.status} onClick={this.props.onClick}>
                {this.props.title}
            </button>
        );
    }
}