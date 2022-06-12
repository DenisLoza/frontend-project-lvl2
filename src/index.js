import _ from 'lodash';
import readFile from './readFile.js';
import parse from './parse.js';

const genDiff = (filepath1, filepath2) => {
  // получение содержимого файлов в виде строки
  const readFile1 = readFile(filepath1);
  const readFile2 = readFile(filepath2);
  // преобразование полученных строк в объекты
  const file1 = parse(readFile1);
  const file2 = parse(readFile2);
  // Массив ключей каждого объекта
  const keys1 = Object.keys(file1);
  const keys2 = Object.keys(file2);
  // Объединяем два массива в один без дублирующихся ключей и сортируем его
  const sortedKeys = _.union(keys1, keys2).sort();

  const newArr = [];
  sortedKeys.map((key) => {
    // Если в 1-м файле НЕТ ключа из общего массива
    if (!Object.hasOwn(file1, key)) {
      newArr.push(`  + ${key}: ${file2[key]}`);
      // Если во 2-м файле НЕТ ключа из общего массива
    } else if (!Object.hasOwn(file2, key)) {
      newArr.push(`  - ${key}: ${file1[key]}`);
      // Если значение ключа в 1-м файле НЕ равно значению ключа из 2-го файла
    } else if (file1[key] !== file2[key]) {
      newArr.push(`  - ${key}: ${file1[key]}`);
      newArr.push(`  + ${key}: ${file2[key]}`);
    } else {
      // Если ключи и их значения равны и они присутствуют в обоих файлах
      newArr.push(`    ${key}: ${file1[key]}`);
    }

    return null;
  });
  // Полученный массив мы форматируем в строку нужного вида
  return ['{', ...newArr, '}'].join('\n');
};

export default genDiff;
