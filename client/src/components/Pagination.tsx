import * as PropTypes from "prop-types";
import { Component } from "react";
import { Color } from "../App";
import React from 'react';
import './Pagination.css'

interface Props {
    defaultPage: number;
    pageSize: number;
    colors: Color[];
    onChangePage: (newPageColors: Color[]) => void;
}

interface State {
    page: number;
    pageCount: number;
    pages: number[];
}

class Pagination extends Component<Props, State> {
    static propTypes = {
        defaultPage: PropTypes.number.isRequired,
        pageSize: PropTypes.number.isRequired,
        colors: PropTypes.arrayOf(PropTypes.object),
        onChangePage: PropTypes.func,
    }

    constructor(props: Props) {
        super(props);

        const pageCount = Math.floor(this.props.colors.length / this.props.pageSize);
        this.state = {
            page: this.props.defaultPage,
            pageCount: pageCount,
            pages: Array.from(Array(pageCount).keys()).map(index => index + 1)
        }
    }

    componentDidMount() {
        if (this.props.colors && this.props.colors.length) {
            this.setPage(this.props.defaultPage);
        }
    }

    componentDidUpdate(prevProps: Props) {
        if (this.props.colors !== prevProps.colors) {
            this.setPage(this.props.defaultPage);
        }
    }

    setPage(page: number) {
        const colors = this.props.colors;
        const pageSize = this.props.pageSize;
        const pageIndex = page - 1;

        const newPageColors = colors.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize);
        
        this.setState({
            page: page
        });

        this.props.onChangePage(newPageColors);
    }

    render() {
        return (
            <div className='Pagination'>
                {this.state.pages.map((page, index) =>
                    <span className={this.state.page === page ? 'Pagination-active' : ''} key={index} >
                        <a onClick={() => this.setPage(page)}>{page}</a>
                    </span>
                )
                }
            </div>
        )
    }
}

export default Pagination;