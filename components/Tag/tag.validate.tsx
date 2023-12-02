import { tagClasses } from '../../config';

const errorMessages: {
  [key: string]: string;
} = {
  Error_wrong_format:
    'Error: Array of tags must only contain strings, but it contains at least one number. Check the data file to fix this error.',
  Error_not_array:
    'Error: Tags must be an array. Check the data file to fix this error.',
  Error_empty_array:
    'Error: Tags must not be an empty array. Check the data file to fix this error.',
};

export default function validateProps(tag: string) {
  // If tag containts a error message, return it
  if (errorMessages[tag]) {
    return {
      isValid: false,
      errorMessage: errorMessages[tag],
    };
  }

  // If tag is not one of the tags in tagClasses, return an error message
  if (!(tag in tagClasses)) {
    return {
      isValid: false,
      errorMessage: `Error: Unknown tag "${tag}".`,
    };
  }

  return { isValid: true };
}
