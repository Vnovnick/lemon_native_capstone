const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const validateEmail = (email) => emailRegex.test(email);

const nameRegex = /^[a-zA-Z]+$/;

export const validateName = (name) => nameRegex.test(name);

const phoneRegex = /\(?\d{3}\)?-? *\d{3}-? *-?\d{4}/;

export const validatePhone = (phoneNumber) => phoneRegex.test(phoneNumber);
