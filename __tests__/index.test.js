import { extname, dirname, resolve } from 'path';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import genTree from '../src/genTree.js';
import format from '../src/formatters/index.js';
import genDiff from '../index';
import parsers from '../src/parsers.js';

// получение абсолютного пути к текущему файлу
const __filename = fileURLToPath(import.meta.url);
// // получение абсолютного пути к текущему каталогу
const __dirname = dirname(__filename);
// // получаем полный относительный путь к файлу с учетом папки "_fixtures_"
// // и передаваемого имени файла.
const getFixturePath = (filename) => resolve(__dirname, '..', '__fixtures__', filename);
// // получаем данные(в виде строки) из файла по указанному пути
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');
// // получение расширения файла
const getExtension = (filename) => extname(filename).slice(1);

const expectedStylishOutput = readFile('stylishOutput.txt');
const expectedPlainOutput = readFile('plainOutput.txt');
const expectedJsonOutput = readFile('jsonOutput.txt');

const formatsFiles = ['json', 'yml', 'yaml'];

test.each(formatsFiles)('different formats of files (.json, .yml, .yaml) & output styles', (formatFile) => {
  const fileName1 = `file1.${formatFile}`;
  const fileName2 = `file2.${formatFile}`;
  const readFile1 = readFile(fileName1);
  const readFile2 = readFile(fileName2);
  const file1 = parsers(readFile1, getExtension(fileName1));
  const file2 = parsers(readFile2, getExtension(fileName2));

  expect(format(genTree(file1, file2), 'stylish')).toEqual(expectedStylishOutput);
  expect(format(genTree(file1, file2), 'plain')).toEqual(expectedPlainOutput);
  expect(format(genTree(file1, file2), 'json')).toEqual(expectedJsonOutput);
});

test('additional parameter format is invalid test', () => {
  const formatName = 'invalidParameter';
  const file1 = parsers(readFile('file1.json'), 'json');
  const file2 = parsers(readFile('file2.json'), 'json');

  expect(() => format(genTree(file1, file2), 'invalidParameter')).toThrow(`Unknown format to generate a tree: '${formatName}'!`);
});

test('wrong formats of files test', () => {
  expect(() => genDiff('file1.txt', 'file2.txt')).toThrow();
});
