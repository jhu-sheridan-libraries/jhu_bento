import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { subspaced } from 'react-redux-subspace'
import { searchBegin } from '../actions';
import LaraResourcesWidget from '../widgets/LaraResourcesWidget'
import CatalystWidget from '../widgets/CatalystWidget'
import ArchivesSpaceWidget from '../widgets/ArchivesSpaceWidget'
import EdsWidget from '../widgets/EdsWidget'
const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: () => {
      dispatch(searchBegin({ 
        query: 'test'
      }))
    }
  }
}

const LaraContainer = subspaced('lara')(LaraResourcesWidget)
const CatalystContainer = subspaced('catalyst')(CatalystWidget)
const ArchivesSpaceContainer = subspaced('aspace')(ArchivesSpaceWidget)
const EdsContainer = subspaced('eds')(EdsWidget)

class Bento extends Component {
  sendClick = () => {
    this.props.handleClick()
  }
  render() {
    return (
      <Grid fluid>
        <Row top="xs">
          <Col xs={12} md={12} lg={12}>
            <button className="btn btn-primary" onClick={ this.sendClick }>Fetch</button>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} lg={6}>
            <CatalystContainer />
          </Col>
          <Col xs={12} md={6} lg={6}>
            <LaraContainer />
          </Col>          
        </Row>
        <Row>
          <Col xs={12} md={6} lg={6}>
            <ArchivesSpaceContainer />
          </Col>
          <Col xs={12} md={6} lg={6}>
            <EdsContainer />
          </Col>          
        </Row>
      </Grid>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bento)