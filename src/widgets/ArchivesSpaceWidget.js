import React, { Component } from 'react'
import { connect } from 'react-redux'
import Widget from '../components/Widget'
import { getApiSearchPromise } from '../selectors';

const searchArchivesSpace = (searchParams) => {
  let url = `${ process.env.ARCHIVESSPACE_API }?q=${ searchParams.query }`
  return getApiSearchPromise(searchParams, url)
}

const ArchiveSpaceItemPresenter = ({ record, index }) => (
  <div className='item'>      
      <span className='itemTitle' >
        <a href={ process.env.ARCHIVESSPACE_URL + record.uri }>
        { record.title }
        </a>
      </span>
      { record.creators? <span className='types'>{ record.creators[0] }</span> : '' }
  </div>
)

const mapStateToProps = ({ data, isFetching }) => {
  let initProps = {
    id: 'archivesspace-bento',
    title: 'ArchivesSpace',
    description: 'Archives and manuscripts at JHU'
  }
  if ('results' in data) {
    let { results, total_hits } = data
    const items = results.slice(0, 5).map((record, index) =>
      <ArchiveSpaceItemPresenter key={ record.id } record={ record } index= { index }/>
    )
    return {
      ...initProps,
      numFound: total_hits,
      items,
      linkOut: 'http://jhepptest.library.jhu.edu:9999/search?op[]=&q[]=' + data.query,
      isFetching,
    }
  } else {
    return { ...initProps, isFetching }
  }
}

export default connect(mapStateToProps)(Widget)
export { searchArchivesSpace }
