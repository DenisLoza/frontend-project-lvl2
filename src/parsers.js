import { load } from 'js-yaml';

const parsers = (fileContent, formatName) => {
  switch (formatName) {
    case 'json':
      return JSON.parse(fileContent);
    case 'yml':
      return load(fileContent);
    case 'yaml':
      return load(fileContent);
    default:
      throw new Error(`Unknown format to parse: '${formatName}'!`);
  }
};

export default parsers;
