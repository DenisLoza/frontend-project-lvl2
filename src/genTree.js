import _ from 'lodash';

const genTree = (file1, file2) => {
  // Массив ключей каждого объекта
  const keys1 = Object.keys(file1);
  const keys2 = Object.keys(file2);
  // Объединяем два массива в один без дублирующихся ключей и сортируем его
  const sortedKeys = _.union(keys1, keys2).sort();

  const result = sortedKeys.map((key) => {
    // Извлекаем значение (св-во) каждого ключа для каждого из массивов объектов
    const value1 = file1[key];
    const value2 = file2[key];
    // Если оба значения ключей являются объектами
    // рекурсивно вызываем ф-цию genTree передавая ей значения ключей
    if (typeof (value1) === 'object' && typeof (value2) === 'object') {
      return {
        key,
        type: 'nested',
        children: genTree(value1, value2),
      };
    }
    // Если текущего ключа НЕТ в файле2
    if (!Object.hasOwn(file2, key)) {
      return {
        key,
        type: 'deleted',
        value: value1,
      };
    }
    // Если текущего ключа НЕТ в файле1
    if (!Object.hasOwn(file1, key)) {
      return {
        key,
        type: 'added',
        value: value2,
      };
    }
    // Если значение текущего ключа НЕ равны значениям в файле1 и файле2
    if (value1 !== value2) {
      return {
        key,
        type: 'changed',
        removedValue: value1,
        addedValue: value2,
      };
    }
    // Если значение текущего ключа НЕ изменилось
    return {
      key,
      type: 'unchanged',
      value: value1,
    };
  });

  return result;
};

export default genTree;
