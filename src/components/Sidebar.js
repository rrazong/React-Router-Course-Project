import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Link, Route} from 'react-router-dom';
import slug from 'slug'

Sidebar.PropTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
}

function CustomLink({to, children}) {
  return (
    <Route
      path={to.pathname}
      children={({match}) => (
        <li style={{listStyleType: 'none', fontWeight: match ? 'bold' : 'normal'}}>
          <Link to={to}>{children}</Link>
        </li>
      )}
    ></Route>
  )
}
export default function Sidebar ({title, list, loading, location, match}) {
  return loading === true
    ? <h1>loading</h1>
    : <div>
      <h3 className='header'>{title}</h3>
      <ul className='sidebar-list'>
      {
        list.map((item) => (
          <CustomLink
            key={item}
            to={{
              pathname: `${match.url}/${slug(item)}`,
              search: location.search,
            }}>
            {item.toUpperCase()}
          </CustomLink>
        ))
      }
      </ul>
    </div>
}
