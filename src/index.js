import { readFile, getFormat } from './utils.js';
import parsers from './parsers.js';
import genTree from './genTree.js';
import stylish from './formatters/stylish.js';

const genDiff = (filepath1, filepath2, format) => {
  // получение содержимого файлов в виде строки
  const readFile1 = readFile(filepath1);
  const readFile2 = readFile(filepath2);
  // преобразование полученных строк в объекты с учетом формата файла
  const file1 = parsers(readFile1, getFormat(filepath1));
  const file2 = parsers(readFile2, getFormat(filepath2));
  // генерация массива объектов, описывающих различия в двух исходных объектах
  const tree = genTree(file1, file2);
  // Полученный массив объектов форматируем в нужного вида строку
  return stylish(tree);
};

export default genDiff;
