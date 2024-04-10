export const isValidPhoneNumber = (phoneNumber) => {
  const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

  if (phoneRegex.test(phoneNumber)) {
    return phoneNumber.replace(phoneRegex, "($1) $2-$3");
  } else {
    // Invalid phone number
    return null; // You can choose to return null or another value to indicate invalid input
  }
};
