import React, { PureComponent } from "react";
import { Route, Switch } from "react-router-dom";
import './Body.css';
import ColorDetailContainer from "./ColorDetailContainer";
import ColorPageContainer from "./ColorPageContainer";
import FourOhFour from "./FourOhFour";

interface Props {
}

class Body extends PureComponent<Props> {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={ColorPageContainer} />
                <Route
                    path='/color/:colorType'
                    component={ColorPageContainer}
                />
                <Route
                    path='/detail/:hexCode'
                    component={ColorDetailContainer} />
                />
                <Route component={FourOhFour} />
            </Switch>
        )
    }
}

export default Body;