import React, { Component } from 'react';
import PropTypes from 'prop-types'
import classnames from 'classnames';

import styles from './ColleagueListItem.css';

class ColleagueListItem extends Component {

  render() {
    return (
      <li className={styles.ColleagueListItem}>
        <div className={styles.ColleagueInfos}>
          <div><span>{this.props.name}</span></div>
        </div>
        <div className={styles.ColleagueActions}>
          <button className={`btn btn-default ${styles.btnAction}`}
                  onClick={() => this.props.starColleague(this.props.id)}>
            <i className={classnames('fa', {
              'fa-star': this.props.starred,
              'fa-star-o': !this.props.starred
            })} />
          </button>
          <button className={`btn btn-default ${styles.btnAction}`}
                  onClick={() => this.props.deleteColleague(this.props.id)}>
            <i className="fa fa-trash" />
          </button>
        </div>
      </li>
    );
  }

}

ColleagueListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  starred: PropTypes.bool,
  starColleague: PropTypes.func.isRequired
};

export default ColleagueListItem
