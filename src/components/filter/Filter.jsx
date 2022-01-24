import React from "react";
import { FilterTitle } from "./Filter.styled";
import { connect } from "react-redux";
import actions from "../../redux/actions";
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
  return (
    <div>
      <FilterTitle>Find contacts by name</FilterTitle>
      <input type="text" value={value} onChange={onChange}></input>
    </div>
  );
};

const mapStateToProps = (state) => ({
  value: state.contacts.filter
});
const mapDispatchToProps = dispatch => ({
  onChange: (e)=> dispatch(actions.filterContact(e.target.value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};