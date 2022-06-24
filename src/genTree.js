import _ from 'lodash';

const genTree = (data1, data2) => {
  // _.keys(data) - Массив ключей каждого объекта
  // Объединяем два массива в один без дублирующихся ключей и сортируем его
  const sortedKeys = _.sortBy(_.union(_.keys(data1), _.keys(data2)));

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
