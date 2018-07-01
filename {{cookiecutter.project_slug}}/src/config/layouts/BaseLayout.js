import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const BaseLayout = ({ children, ...props }) => <div>{children}</div>

BaseLayout.propTypes = {
  dispatch: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
}

const mapStateToProps = (state, ownProps) => {
  const postList = state.postList
  return { postList }
}

export default connect(mapStateToProps)(BaseLayout)
