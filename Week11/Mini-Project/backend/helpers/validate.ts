// src/helpers/validate.ts

export const validateEmail = (email: string) => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
};

export const validateRequiredFields = (fields: string[]) => {
  for (const field of fields) {
    if (!field) {
      return false;
    }
  }
  return true;
};
