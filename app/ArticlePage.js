const React = require('react')
const SearchBox = require('./SearchBox.js')

/**
 * Shows a Wikipedia article, with a search bar at the top.
 */
module.exports = class ArticlePage extends React.Component {
  render () {
    const {store, dispatch} = this.props
    const {urlName} = store

    const name = decodeURIComponent(urlName.replace(/_/g, ' '))

    const html = store.articleCache[urlName] || 'Loading...'

    return (
      <div className='ArticlePage'>
        <header>
          <a href='#'>datpedia</a>
          <SearchBox items={store.searchIndex} dispatch={dispatch} />
        </header>
        <h1>{name}</h1>
        <div dangerouslySetInnerHTML={{__html: html}} />
      </div>
    )
  }
}