import React, { PureComponent } from "react";
import { Color } from "../App";
import ColorBox from "./ColorBox";
import * as PropTypes from "prop-types";
import './ColorDetail.css';
import Button from "./Button";


interface Props {
    color: Color
}

class ColorDetail extends PureComponent<Props> {
    static propTypes = {
        colors: PropTypes.object,
    }

    render() {
        return (
            <div className='ColorDetail'>
                <div className='ColorDetail-focused'>
                    <ColorBox hexCode={this.props.color.hexCode} />
                </div>
                <Button
                    label='Clear'
                    link='/'
                />
            </div>
        )
    }
}

export default ColorDetail;