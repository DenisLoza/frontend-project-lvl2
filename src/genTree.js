import _ from 'lodash';

const genTree = (data1, data2) => {
  // Массив ключей каждого объекта
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  // Объединяем два массива в один без дублирующихся ключей и сортируем его
  const sortedKeys = _.sortBy(_.union(keys1, keys2));

  const result = sortedKeys.map((key) => {
    // Если текущего ключа НЕТ в файле1
    if (!_.has(data1, key)) {
      return {
        key,
        type: 'added',
        value: data2[key],
      };
    }
    // Если текущего ключа НЕТ в файле2
    if (!_.has(data2, key)) {
      return {
        key,
        type: 'removed',
        value: data1[key],
      };
    }
    // Если оба значения ключей являются объектами
    // рекурсивно вызываем ф-цию genTree передавая ей значения ключей
    if (_.isPlainObject(data1[key]) && _.isPlainObject(data2[key])) {
      return {
        key,
        type: 'nested',
        children: genTree(data1[key], data2[key]),
      };
    }
    // Если значения текущего ключа НЕ равны друг другу (значениям в файле1 и файле2)
    if (!_.isEqual(data1[key], data2[key])) {
      return {
        key,
        type: 'updated',
        removedValue: data1[key],
        addedValue: data2[key],
      };
    }
    // Если значение текущего ключа НЕ изменилось
    return {
      key,
      type: 'unchanged',
      value: data1[key],
    };
  });

  return result;
};

export default genTree;
