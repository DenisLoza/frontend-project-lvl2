import { load } from 'js-yaml';

const parsers = (content, formatName) => {
  switch (formatName) {
    case 'json':
      return JSON.parse(content);
    case 'yml':
    case 'yaml':
      return load(content);
    default:
      throw new Error(`Incorrect file format: ${formatName}`);
  }
};

export default parsers;
