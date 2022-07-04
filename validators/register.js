const Validator = require('validator');
const isEmpty = require('./is_empty');

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.email = !isEmpty(data.email) ? data.email : '';
  data.mobile = !isEmpty(data.mobile) ? data.mobile : '';
  data.username = !isEmpty(data.username) ? data.username : '';
  //check fields
  if (Validator.isEmpty(data.email) && Validator.isEmpty(data.mobile) && Validator.isEmpty(data.username)) {
    errors.msg = 'All fields are required';
  }
  else if (Validator.isEmpty(data.email) && Validator.isEmpty(data.mobile)) {
    errors.msg = 'Both fields required';
  }  
  else if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }
  else if (Validator.isEmpty(data.mobile)) {
    errors.mobile = 'mobile field is required';
  }
  else if (Validator.isEmpty(data.username)) {
    errors.username = 'username field is required';
  }
  //check valid field
  else if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }
  else if (!Validator.isNumeric(data.mobile)) {
    errors.mobile = 'Mobile is invalid';
  }
  else if (!Validator.isLength(data.mobile, { max: 10 })) {
    errors.mobile = 'mobile must be at least 10 in length';
  }
  else if (!Validator.isAlphanumeric(data.username)) {
    errors.username = 'username is invalid';
  }  
  
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
