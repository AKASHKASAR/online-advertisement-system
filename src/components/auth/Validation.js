import validator from "validator";

class ValidateFields {
    /*
     * A method that takes in the email
     * Validates it
     * Returns the response either error or false if there is no error
     */
    validateEmail(email) {
      if (validator.isEmpty(email)) {
        return 'Email is required';
      } else if (!validator.isEmail(email)) {
        return 'Invalid Email';
      }
      return false;
    }
  
    validatePassword(password) {
      if (validator.isEmpty(password)) {
        return 'Password is required';
      } else if (!validator.isLength(password, { min: 8 })) {
        return 'Password should be minimum 8 characters';
      }
      return false;
    }
  }
  
  const validateFields = new ValidateFields();
  
  // export the class instance, so we can import and use it anywhere
  export { validateFields };