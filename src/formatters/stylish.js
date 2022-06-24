import _ from 'lodash';
// Принимает (глубина, заменитель, кол-во пробелов) отдает строку пробелов
const indent = (depth, replacer = ' ', spacesCount = 2) => replacer.repeat(depth * (spacesCount + 2) - 2);
// преобразование каждого не строкового значения св-ва объекта в строку
const stringify = (value, depth = 1) => {
  // если value (значение ключа объекта) НЕ объект, то верни строку
  if (!_.isObject(value)) {
    return String(value);
  }
  // Ключи вложенного объекта (когда value является объектом)
  // keys является массивом ключей value
  const keys = Object.keys(value);
  // проходим по ключам объекта value
  const result = keys.map((key) => {
    const prop = value[key];
    // и если prop снова окажется объектом, то вызовем ф-цию stringify() снова
    return `${indent(depth)}  ${key}: ${stringify(prop, depth + 1)}`;
  });

  return `{\n${result.join('\n')}\n  ${indent(depth - 1)}}`;
};
// Принимает ноду дерева (объект из массива), отдает форматированную строку
const buildTree = (node) => {
  // Итератор принимает ноду и дополнительный параметр: глубина отступа от л.края
  const iter = (iterNode, depth = 1) => {
    const {
      key,
      type,
      value,
      children,
      removedValue,
      addedValue,
    } = iterNode;

    switch (type) {
      // если значение ключа = содержит объект
      case 'nested': {
        return `\n${indent(depth)}  ${key}: {${children.map((child) => iter(child, depth + 1)).join('')}\n${indent(depth)}  }`;
      }
      // если значение ключа = удалено значение
      case 'removed': {
        return `\n${indent(depth)}- ${key}: ${stringify(value, depth + 1)}`;
      }
      // если значение ключа = добавлено значение
      case 'added': {
        return `\n${indent(depth)}+ ${key}: ${stringify(value, depth + 1)}`;
      }
      // если значение ключа = изменено значение
      case 'updated': {
        const removed = `\n${indent(depth)}- ${key}: ${stringify(removedValue, depth + 1)}`;
        const added = `\n${indent(depth)}+ ${key}: ${stringify(addedValue, depth + 1)}`;
        return `${removed}${added}`;
      }
      // если значение ключа = не изменилось
      case 'unchanged': {
        return `\n${indent(depth)}  ${key}: ${stringify(value, depth + 1)}`;
      }
      default:
        return null;
    }
  };

  return iter(node);
};

const stylish = (tree) => {
  // отправляем каждый объект дерева в ф-цию формирования строки нужного вида
  const result = tree.map(buildTree);
  // преобразование полученного массива из buildTree с разделителями в строку
  return `{${result.join('')}\n}`;
};

export default stylish;
