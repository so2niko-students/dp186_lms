import React, { Component } from "react";
import * as actions from "../../common/redux/actions/";
import { Heading, Wrapper, Ptag } from "./styledComponentsExample";
import { connect } from "react-redux";

class ExampleForRedux extends Component {
  componentDidMount() {
    const { calculate, applicationLoad } = this.props;

    applicationLoad();
    calculate('+', 180, 6);
  }

  componentDidUpdate() {
    const { isLoad } = this.props;
    if (isLoad) {
      document.title = 'Is loaded';
    }
  }

  render() {
    const { res } = this.props;  

    return (
      <Wrapper>
        <Heading>Example of h1 tag</Heading>
        <Ptag>
          DP-
          {res}
        </Ptag>
      </Wrapper>
    );
  }
}

const mapStateToPops = (state) => ({
  isLoad: state.isLoad,
  res: state.res,
});

export default connect(mapStateToPops, actions)(ExampleForRedux);
