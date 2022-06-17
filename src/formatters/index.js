import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

// Функция отправляет diff-дерево на форматирование согласно formatName
const format = (tree, formatName) => {
  switch (formatName) {
    case 'stylish': {
      return stylish(tree);
    }
    case 'plain': {
      return plain(tree);
    }
    case 'json': {
      return json(tree);
    }
    default:
      return null;
  }
};

export default format;
