import { Color } from "../App";
import React from "react";
import axios from 'axios';
import ColorPage from "./ColorPage";
import { RouteComponentProps } from "react-router-dom";


interface Props extends RouteComponentProps<any> {
}

interface State {
    colors: Color[];
    loading: boolean;
    error: boolean;
}

class ColorPageContainer extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            colors: [],
            loading: true,
            error: false,
        }
    }

    componentDidUpdate(nextProps: Props) {
        if (this.props.match.params.colorType !== nextProps.match.params.colorType) {
            let axiosUrl = '/colors/type/' + this.props.match.params.colorType;
            this.fetchColor(axiosUrl)
        }
    }

    componentDidMount() {
        let axiosUrl = '/colors/';

        if (this.props.match.params.colorType) {
            axiosUrl += 'type/' + this.props.match.params.colorType;
        }

        this.fetchColor(axiosUrl);
    }

    fetchColor(axiosUrl: string) {
        axios.get(axiosUrl)
            .then((res) => {
                this.setState({
                    colors: res.data,
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
            return <div> Oh no error getting Colors</div>;
        }
        if (this.state.loading) {
            return <div>Loading Colors...</div>;
        }
        return (
            <ColorPage
                colors={this.state.colors}
            />
        )
    }
}

export default ColorPageContainer;