import React, { Component } from "react";
import actions from "../../common/redux/actions/";
import store from "../../common/redux/store";
import { Heading, Wrapper, Ptag } from "./styledComponentsExample";

class ExampleForRedux extends Component {
    constructor(props) {
        super(props);
        const unsubscribe = store.subscribe(() => {
            const check = store.getState();
            if (check.isLoad) {
                document.title = "React is loaded";
                unsubscribe();
            }
        });
    }
    render() {
        store.dispatch(actions.calculate("+", 180, 6));
        store.dispatch(actions.applicationLoad());
        const check = store.getState();
        return (
            <Wrapper>
                <Heading>Example of h1 tag</Heading>
                <Ptag>DP-{check.res}</Ptag>
            </Wrapper>
        );
    }
}

export default ExampleForRedux;
