import * as PropTypes from "prop-types";
import React, { Component } from "react";
import { Color } from "../App";
import ColorBox from "./ColorBox";
import './ColorPage.css';
import Pagination from "./Pagination";

interface Props {
    colors: Color[];
}

interface State {
    colorsOnPage: Color[];
}

class ColorPage extends React.Component<Props, State> {
    static propTypes = {
        colors: PropTypes.arrayOf(PropTypes.object).isRequired,
    }

    constructor(props: Props) {
        super(props);

        this.state = {
            colorsOnPage: []
        }

    }

    presentColors() {
        return this.props.colors.map((color, index) => {
            return <ColorBox
                key={index}
                hexCode={color.hexCode}
            />
        });
    }

    onChangePage = (newPageColors: Color[]) => {
        this.setState({
            colorsOnPage: newPageColors
        })
    }

    render() {
        return (
            <div className='ColorPage'>
                {this.state.colorsOnPage.map((color, index) => {
                    return <ColorBox key={index} hexCode={color.hexCode} />
                })}
                <Pagination
                    defaultPage={1}
                    pageSize={15}
                    colors={this.props.colors}
                    onChangePage={this.onChangePage}
                />
                {this.presentColors()}
            </div>
        )
    }
}

export default ColorPage;