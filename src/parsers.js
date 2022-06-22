import { load } from 'js-yaml';

const parsers = (fileContent, formatName) => {
  switch (formatName) {
    case 'json':
      return JSON.parse(fileContent);
    case 'yml':
    case 'yaml':
      return load(fileContent);
    default:
      throw new Error(`Incorrect file format: ${formatName}`);
  }
};

export default parsers;
