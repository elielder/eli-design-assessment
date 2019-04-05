import React, { PureComponent } from "react";
import './Button.css';

interface Props {
    label: string;
    link: string;
}

class Button extends PureComponent<Props> {
    render() {
        return (
            <div className='Button'>
                {this.props.label}
            </div>
        )
    }
}

export default Button;