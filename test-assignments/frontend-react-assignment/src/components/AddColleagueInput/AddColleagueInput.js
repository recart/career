import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './AddColleagueInput.css';

class AddColleagueInput extends Component {

  render () {
    return (
      <input
        type="text"
        autoFocus="true"
        className={classnames('form-control', styles.addColleagueInput)}
        placeholder="Name"
        value={this.state.name}
        onChange={this.handleChange.bind(this)}
        onKeyDown={this.handleSubmit.bind(this)} />
    );
  }

  constructor (props, context) {
    super(props, context);
    this.state = {
      name: this.props.name || ''
    };
  }

  handleChange (e) {
    this.setState({ name: e.target.value });
  }

  handleSubmit (e) {
    const name = e.target.value.trim();
    if (e.which === 13) {
      this.props.addColleague(name);
      this.setState({ name: '' });
    }
  }

}

AddColleagueInput.propTypes = {
  addColleague: PropTypes.func.isRequired
};

export default AddColleagueInput
