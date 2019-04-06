import { Color } from "../App";
import React from "react";
import axios from 'axios';
import './ColorDetail.css';
import ColorDetail from "./ColorDetail";
import * as PropTypes from "prop-types";
import { RouteComponentProps } from "react-router";
import { Link } from "react-router-dom";
import Button from "./Button";
import FourOhFour from "./FourOhFour";

interface Props extends RouteComponentProps<any> {
}

interface State {
    color?: Color;
    loading: boolean;
    error: boolean;
}

class ColorDetailContainer extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            color: undefined,
            loading: true,
            error: false,
        }
    }

    componentDidMount() {
        const hexCode = this.props.match.params.hexCode;
        const formatedHex = '%23' + hexCode.toUpperCase();

        axios.get('/colors/hex/' + formatedHex)
            .then((res) => {
                this.setState({
                    color: res.data[0],
                    loading: false,
                });
            })
            .catch((err) => {
                this.setState({
                    error: true,
                })
            })
    }

    render() {
        if (this.state.error) {
            return <div> Oh no error getting Color Detail</div>;
        }
        if (this.state.loading) {
            return <div>Loading Color Detail...</div>;
        }

        if (this.state.color) {
            return (
                <ColorDetail
                    color={this.state.color}
                />
            )
        }

        return (
            <FourOhFour />
        )
    }
}

export default ColorDetailContainer;