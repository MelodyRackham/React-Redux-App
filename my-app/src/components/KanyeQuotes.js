import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Quote from './Quote';
import { fetchQuotes } from '../actions';

const KanyeQuotes = props => {
  useEffect(() => {
    props.fetchQuotes();
  }, []);
  if (props.isFecthing) {
    return <h2> Loading Kanye Quote... </h2>;
  }

  return (
    <div>
      {props.error && <p> {props.error} </p>}
      {props.quotesArr}
    </div>
  );
};

const mapStatetoProps = state => {
  return {
    quotesArr: state.quotesArr,
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(
  mapStatetoProps,
  { fetchQuotes },
)(KanyeQuotes);
