import React from 'react'
import { ColleaguesList } from '../ColleaguesList/colleagues-list.component'
import { AddColleague } from '../AddColleague/add-colleague.component'
import styles from './layout.module.css'

export const Layout: React.FC = () => {
  return (
    <div className={styles.layout}>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <div className={styles.colleagueList}>
              <h2>Colleagues List</h2>
              <AddColleague />
              <ColleaguesList />
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            <div className={styles.favoritesList}>
              <h2>Favorites List</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
