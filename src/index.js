import { extname } from 'path';
import { readFile } from './utils.js';
import parsers from './parsers.js';
import genTree from './genTree.js';
import format from './formatters/index.js';

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  // получение содержимого файлов в виде строки
  const readFile1 = readFile(filepath1);
  const readFile2 = readFile(filepath2);
  // преобразование полученных строк в объекты с учетом формата файла
  const file1 = parsers(readFile1, extname(filepath1));
  const file2 = parsers(readFile2, extname(filepath2));
  // генерация массива объектов, описывающих различия в двух исходных объектах
  const tree = genTree(file1, file2);
  // Полученный массив объектов форматируем в нужного вида строку
  return format(tree, formatName);
};

export default genDiff;
