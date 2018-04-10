import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Widget extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let body 
    if (this.props.numFound < 0) {
      body = <div className='no-search'>Please submit a search</div>
    } else if (this.props.numFound === 0) {
      body = <div className='no-results'>No results found</div>
    } else {
      body = this.props.items
    }
    return (
      <div id={ this.props.id } className='bento-box'>        
        <div className='bento-box-header'>
          <h3>{ this.props.title }</h3>
          { this.props.numFound >= 0 && <span className='count'>{ this.props.numFound.toLocaleString('en') } Results</span> }
        </div>
        <div className='bento-content'>
          { this.props.isFetching? 
              <div className='no-search'>Loading...</div> : 
              body }
        </div>
        { this.props.numFound >= 0 && 
          <div className='more-results'>
            <a href={ this.props.linkOut }>Explore More Results</a>
          </div> }
      </div>
    )
  }
} 

Widget.defaultProps = {
  numFound: -1,
  isFetching: false
}

Widget.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  items: PropTypes.array,
  numFound: PropTypes.number,
  url: PropTypes.string,
  isFetching: PropTypes.bool,
}

export default Widget
