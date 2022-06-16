const stringify = (value) => {
  // если value (значение ключа объекта) объект, то верни строку '[complex value]'
  if (value instanceof Object) {
    return '[complex value]';
  }
  // если value НЕ объект, то верни строку 'value'
  return typeof (value) === 'string' ? `'${value}'` : value;
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
      case 'deleted': {
        return `\nProperty '${acc}${key}' was removed`;
      }
      case 'added': {
        return `\nProperty '${acc}${key}' was added with value: ${stringify(value)}`;
      }
      case 'changed': {
        return `\nProperty '${acc}${key}' was updated. From ${stringify(removedValue)} to ${stringify(addedValue)}`;
      }
      case 'unchanged': {
        return '';
      }
      default:
        return null;
    }
  };

  return iter(node);
};

const plain = (tree) => {
  const result = tree.map((node) => buildTree(node));

  return result.join('').replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
};

export default plain;