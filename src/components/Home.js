var React = require('react');
var Searcher = require('./Searcher')

class Home extends React.Component {
  render () {
    return (
      <div className='container'>
            <div>
              <h1>Main Header</h1>
            </div>
            <div className='home-container' style={{ backgroundImage: "url('../images/pattern.svg')" }}>
              <h1 className='header'>Enter a City</h1>
              <Searcher
                direction='column'
                onSubmitSearcher={function(){}}
                onUpdateSearcher={function(){}}
                searcher={123} />
            </div>
          </div>

    )
  }
}


module.exports = Home;
