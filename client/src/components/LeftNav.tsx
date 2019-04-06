import React, { PureComponent } from 'react';
import Button from './Button';
import './LeftNav.css';
import { Link } from 'react-router-dom';

interface Props { }

interface State {
    randomColor: string;
}

const colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'purple',
    'brown',
    'gray',
];

class LeftNav extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            randomColor: this.randomColor(),
        }
    }
    colorLinks = () => {
        return colors.map((color) => {
            return (
                <div key={color}>
                    <Link
                        className='LeftNav-colorLink'
                        to={'/color/' + color}
                    >
                        {color.charAt(0).toUpperCase() + color.slice(1)}
                    </Link >
                </div>

            )
        });
    }

    randomColor = (): string => {
        const randomColorIndex = Math.floor(Math.random() * colors.length);
        return '/color/' + colors[randomColorIndex]
    }

    handleClick = () => {
        this.setState({
            randomColor: this.randomColor(),
        })
    }

    render() {
        return (
            <div className='LeftNav'>
                <Button
                    label='Random Color'
                    link={this.state.randomColor}
                    onClick={this.handleClick}
                />
                {this.colorLinks()}
            </div>
        )
    }
}

export default LeftNav;