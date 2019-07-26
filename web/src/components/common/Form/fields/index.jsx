import React from 'react';
import { TextField } from 'react-md';

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

const getErrorText = (meta) => {
  let error = '';
  if (meta.error && meta.touched && !meta.active) {
    error = meta.error;
  }
  return error;
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

export default customInput;

/* <TextField
      {...input}
      id="floating-label-error-text-field"
      label={label}
      placeholder={placeholder}
      rows={rows || 1}
      className="md-cell md-cell--top"
      error={getValidityState(meta)}
      errorText={getErrorText(meta)}
  /> */

/* <div className="form-label-group">
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                className={cx(
                    'form-control form-control-flush',
                    { dirty: meta.dirty },
                    getValidityClassName(meta),
                )}
                {...input}
            />
            <label>{label}</label>
            {meta.error && meta.touched && !meta.active && (
                <div className="feedback-text error-text">{meta.error}</div>
            )}
            </div> */
