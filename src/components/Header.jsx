import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

function Header({text, myColor, bgColor}) {
  const headerStyle = {
    backgroundColor: bgColor, 
    color: myColor,
  }

  return (
    <header style={headerStyle}>
        <div className="container">
            <Link to='/'>
              <h2>{text}</h2>
            </Link>
        </div>
    </header>
  )
}

Header.defaultProps = {
    text: 'Profile Feedback',
    somElse: 2,
    bgColor: 'rgba(0,0,0,0.4)',
    myColor: '#ff6895'
}

Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    myColor: PropTypes.string,
}

export default Header