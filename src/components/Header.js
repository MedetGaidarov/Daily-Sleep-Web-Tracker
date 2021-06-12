import React from 'react'
import PropTypes from 'prop-types'
const Header = ({title}) => {
    return (
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="d-flex justify-content-between">
              <h1>{title}</h1>
              <button className="btn btn-success ">Add</button>
            </div>
          </div>
        </div>
      </header>
    );
}



Header.defaultProps =
{
    title : "Task Manager"
}

Header.propTypes =
{  
    title : PropTypes.isRequired
}
export default Header