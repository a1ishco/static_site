export const validateForm = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Name is required";
  }
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.subject) {
    errors.subject = "Subject is required";
  }
  if (!values.message) {
    errors.message = "Message is required";
  }
  if (!values.phone) {
    errors.phone = "Phone number is required";
  } else if (values.phone.length < 9 || values.phone.length > 11) {
    errors.phone = "Phone number should be between 9 and 11 characters";
  }

  return errors;
};