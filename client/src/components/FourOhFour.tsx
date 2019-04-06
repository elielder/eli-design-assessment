import React, { PureComponent } from "react";
import './FourOhFour.css';
import Button from "./Button";


class FourOhFour extends PureComponent {
    render() {
        return (
            <div className='FourOhFour'>
                <div>
                    Sorry this page seems to not exist
                </div>
                <div className='FourOhFour-back'>
                    {<Button label='Back to Home Page' link='/' />}
                </div>
            </div>
        )
    }
}

export default FourOhFour;