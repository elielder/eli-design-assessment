import React, { PureComponent } from "react";
import './SearchBox.css';

interface Props {

}

class SearchBox extends PureComponent {
    render() {
        return (
            <div className='SearchBox'>
                <input placeholder='Search'/>
            </div>
        )
    }
}

export default SearchBox;