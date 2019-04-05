import React, { PureComponent } from 'react';
import * as PropTypes from 'prop-types';
import SearchBox from './SearchBox';
import './Header.scss'

interface Props {
    title: string;
}

class Header extends PureComponent<Props> {
    static propTypes = {
        title: PropTypes.string.isRequired,
    }

    render() {
        return (
            <div className='Header'>
                <div className='Header-left'>
                    <div className='Header-left-logo'>

                    </div>
                    <div className='Header-left-title'>
                        {this.props.title}
                    </div>
                </div>
                <div className='Header-right'>
                    <SearchBox />
                </div>
            </div>
        )
    }
}

export default Header;