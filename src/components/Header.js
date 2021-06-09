import React from 'react'
import PropTypes from 'prop-types'
const Header = ({title}) => {
    return (
        <header className = 'header'>
             <h1>{title}</h1> 
        </header>        
    )
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
