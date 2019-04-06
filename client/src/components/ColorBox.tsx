import React, { PureComponent } from "react";
import * as PropTypes from "prop-types";
import './ColorBox.css';
import { Link } from "react-router-dom";

interface Props {
    hexCode: string;
}

class ColorBox extends PureComponent<Props> {
    static propTypes = {
        hexCode: PropTypes.string.isRequired,
    }

    render() {
        const hexUpperCase = this.props.hexCode.toUpperCase();
        const hexNoPound = hexUpperCase.slice(1);
        const hexLowerCase = this.props.hexCode.toLowerCase();

        return (
            <Link
                className='ColorBox'
                to={'/detail/' + hexNoPound}
            >
                <div className='ColorBox-box'>
                    <div
                        className='ColorBox-color'
                        style={{ background: this.props.hexCode }}
                    />
                    <div className='ColorBox-label'>
                        {hexLowerCase}
                    </div>
                </div>
            </Link>
        )
    }
}

export default ColorBox;