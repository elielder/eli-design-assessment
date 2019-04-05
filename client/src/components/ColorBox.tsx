import React, { PureComponent } from "react";
import { checkPropTypes } from "prop-types";
import * as PropTypes from "prop-types";
import './ColorBox.scss';

interface Props {
    colorCode: string;
}

class ColorBox extends PureComponent<Props> {
    static propTypes = {
        colorCode: PropTypes.string.isRequired,
    }

    render() {
        return (
            <div className='ColorBox'>
                <div
                    className='ColorBox-color'
                    style={{background:this.props.colorCode}}
                />
                <div className='ColorBox-label'>
                    {this.props.colorCode}
                </div>
            </div>
        )
    }
}

export default ColorBox;