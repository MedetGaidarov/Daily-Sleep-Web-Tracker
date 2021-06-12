import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({title, onAdd, showAdd}) => {
    return (
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="d-flex justify-content-between">
              <h1>{title}</h1>
              <Button
                text={showAdd ? "Close" : "Add"}
                color="green"
                onClick={onAdd}
              />
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