var React = require('react');
var PropTypes = require('prop-types');

class Searcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searcher: 'Vancouver'
    };
  }
  handleUpdateSearcher () {

  }

  handleSubmitSearcher () {

  }

 render () {
   return (
     <div className='searcher-container' style={{flexDirection: this.props.direction}}>
     <input
      className='form-control'
      onChange={this.handleUpdateSearcher}
      placeholder='Vancouver'
      type='text'
      value={this.state.searcher} />

      <button
        type='button'
        style={{margin:10}}
        className='btn btn-success'
        onClick={this.handleSubmitSearcher}>
        What is the weather?

      </button>
    </div>
    )
   }
 }

 Searcher.defaultProps = {
   direction: 'column'
 }

 Searcher.propTypes = {
   direction: PropTypes.string,
 }

 module.exports = Searcher;
