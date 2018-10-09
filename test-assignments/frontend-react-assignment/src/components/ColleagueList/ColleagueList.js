import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ColleagueListItem from './../ColleagueListItem';

import styles from './ColleagueList.css';

class ColleagueList extends Component {
  render () {
    return (
      <ul className={styles.colleagueList}>
        {
          this.props.colleagues.map((colleague, index) => {
            return (
              <ColleagueListItem
                key={index}
                id={index}
                name={colleague.name}
                title={colleague.title}
                starred={colleague.starred}
                {...this.props.actions} />
            );
          })
        }
      </ul>
    );
  }

}

ColleagueList.propTypes = {
  colleagues: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default ColleagueList;
