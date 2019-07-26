import React from 'react';
import { TextField } from 'react-md';

import PropTypes from 'prop-types';

const getValidityState = (meta) => {
  if (meta.active) {
    return;
  }

  if (meta.touched && meta.invalid) {
    return false;
  }

  if (meta.touched && meta.valid) {
    return true;
  }
};

const customInput = (props) => {
  const {
    label,
    name,
    meta,
    placeholder,
    error,
    id,
    length,
    rows,
    change,
  } = props;
  return (
    <TextField
      id={id}
      name={name}
      label={label}
      placeholder={placeholder}
      required
      error={getValidityState(meta)}
      errorText={error}
      maxLength={length}
      rows={rows || 1}
      onChange={change}
    />
  );
};

customInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  meta: PropTypes.shape({}).isRequired,
  placeholder: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  length: PropTypes.number.isRequired,
  rows: PropTypes.number,
  change: PropTypes.func.isRequired,
};

customInput.defaultProps = {
  rows: 1,
  name: '',
};

export default customInput;
