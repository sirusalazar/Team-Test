export const required = (value) => {
  let error = '';
  if (!value) {
    error = 'This field is required';
  }
  return error;
};

export const email = (value) => {
  let error = '';
  const expresion = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  );
  if (!expresion.test(value)) {
    error = 'This is not a valid URL';
  }
  return error;
};
