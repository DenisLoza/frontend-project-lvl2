import _ from 'lodash';

const stringify = (value) => {
  // если value (значение ключа объекта) объект, то верни строку '[complex value]'
  if (_.isObject(value)) {
    return '[complex value]';
  }
  // если value НЕ объект, то верни строку 'value'
  return typeof (value) === 'string' ? `'${value}'` : String(value);
};

const buildTree = (node) => {
  const iter = (iterNode, acc = '') => {
    const {
      key,
      type,
      value,
      children,
      removedValue,
      addedValue,
    } = iterNode;

    switch (type) {
      case 'nested': {
        return children.map((child) => iter(child, `${acc}${key}.`)).join('');
      }
      case 'removed': {
        return `\nProperty '${acc}${key}' was ${type}`;
      }
      case 'added': {
        return `\nProperty '${acc}${key}' was ${type} with value: ${stringify(value)}`;
      }
      case 'updated': {
        return `\nProperty '${acc}${key}' was ${type}. From ${stringify(removedValue)} to ${stringify(addedValue)}`;
      }
      case 'unchanged': {
        return '';
      }
      default:
        throw new Error(`Unknown type: '${type}' of node!`);
    }
  };

  return iter(node);
};

const plain = (tree) => {
  const result = tree.map(buildTree);
  return result.join('').replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
};

export default plain;
