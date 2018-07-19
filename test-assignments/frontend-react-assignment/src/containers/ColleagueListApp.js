import React, { Component } from 'react';
import styles from './ColleagueListApp.css';
import { connect } from 'react-redux';

import { addColleague, deleteColleague, starColleague } from '../actions/ColleagueActions';
import ColleagueList from '../components/ColleagueList';
import AddColleagueInput from '../components/AddColleagueInput';

class ColleagueListApp extends Component {
  render () {
    const { colleagueList: { colleaguesById } } = this.props;

    const actions = {
      addColleague: this.props.addColleague,
      deleteColleague: this.props.deleteColleague,
      starColleague: this.props.starColleague
    };

    return (
      <div className="app-wrapper">
        <div className="container">
          <div className="col-xs-12 col-md-6">
            <div className={styles.ColleagueList}>
              <h2>Colleagues List</h2>
              <AddColleagueInput addColleague={actions.addColleague} />
              <ColleagueList colleagues={colleaguesById} actions={actions} />
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            <div className={styles.FavoritesList}>
              <h2>Favorites List</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {
  addColleague,
  deleteColleague,
  starColleague
})(ColleagueListApp)
