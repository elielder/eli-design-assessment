import React, { PureComponent } from "react";
import './Button.css';
import { Link } from "react-router-dom";

interface Props {
    label: string;
    link: string;
    onClick?: () => void;
}

class Button extends PureComponent<Props> {
    render() {
        return (
            <Link
                to={this.props.link}
                onClick={this.props.onClick}
            >
                <div className='Button'>
                    {this.props.label}
                </div>
            </Link>
        )
    }
}

export default Button;