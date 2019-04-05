import React, { PureComponent } from 'react';
import Button from './Button';
import './LeftNav.scss';
import { Link } from 'react-router-dom';

interface Props {

}

class LeftNav extends PureComponent {
    render() {
        return (
            <div className='LeftNav'>
                <Button
                    label='Random Color'
                    link=''
                />
                <div className='LeftNav-colorLink'>
                    Red
                </div>
                <div className='LeftNav-colorLink'>
                    Orange
                </div>
                <div className='LeftNav-colorLink'>
                    Yellow
                </div>
                <div className='LeftNav-colorLink'>
                    Green
                </div>
                <div className='LeftNav-colorLink'>
                    Blue
                </div>
                <div className='LeftNav-colorLink'>
                    Purple
                </div>
                <div className='LeftNav-colorLink'>
                    Brown
                </div>
                <div className='LeftNav-colorLink'>
                    Gray
                </div>
            </div>
        )
    }
}

export default LeftNav;