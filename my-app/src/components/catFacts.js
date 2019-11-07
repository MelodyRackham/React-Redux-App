import React from 'react';
import { connect } from 'react-redux';
import Fact from './Fact';
import { fetchFacts } from '../actions';

const CatFacts = props => {
  useEffect(() => {
    props.fetchFacts();
  }, []);
  if (props.isFecthing) {
    /* usually a spinner */

    return <h2> Loading Cat Facts... </h2>;
  }

  return (
    <div>
      {props.error && <p> {props.error} </p>}
      {props.catFacts.map(fact => (
        <Fact key={fact._id} fact={fact} />
      ))}
    </div>
  );
};

const mapStatetoProps = state => {
  return {
    catFacts: state.catFacts,
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(
  mapStatetoProps,
  { fetchFacts },
)(CatFacts);
