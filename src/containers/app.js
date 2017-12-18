import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadApp } from 'actions/app';
import { loginUser } from 'actions/user';
import styles from './app.css';

type Props = {
  dispatch: () => void,
  loaded: boolean
}

export class AppContainer extends Component {
  componentDidMount() {
    this.props.dispatch(loadApp());
  }

  click() {
    this.props.dispatch(loginUser())
  }

  props: Props;

  render() {
    if (!this.props.loaded) {
      return null;
    }

    return (
      <div className={styles.container} onClick={this.click.bind(this)}>
        hello
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    loaded: state.app.loaded
  };
}

export default connect(mapStateToProps)(AppContainer);
