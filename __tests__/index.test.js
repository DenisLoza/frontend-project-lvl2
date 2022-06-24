import { dirname, resolve } from 'path';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import genDiff from '../index';

// получение абсолютного пути к текущему файлу
const __filename = fileURLToPath(import.meta.url);
// // получение абсолютного пути к текущему каталогу
const __dirname = dirname(__filename);
// // получаем полный относительный путь к файлу с учетом папки "_fixtures_"
// // и передаваемого имени файла.
const getFixturePath = (filename) => resolve(__dirname, '..', '__fixtures__', filename);
// // получаем данные(в виде строки) из файла по указанному пути
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

const expectedStylishOutput = readFile('stylishOutput.txt');
const expectedPlainOutput = readFile('plainOutput.txt');
const expectedJsonOutput = readFile('jsonOutput.txt');

const formats = ['json', 'yml', 'yaml'];

test.each(formats)('different formats of files (.json, .yml, .yaml) & output styles', (format) => {
  const fileName1 = `file1.${format}`;
  const fileName2 = `file2.${format}`;

  expect(genDiff(fileName1, fileName2)).toEqual(expectedStylishOutput);
  expect(genDiff(fileName1, fileName2, 'stylish')).toEqual(expectedStylishOutput);
  expect(genDiff(fileName1, fileName2, 'plain')).toEqual(expectedPlainOutput);
  expect(genDiff(fileName1, fileName2, 'json')).toEqual(expectedJsonOutput);
});

test('format check for invalid value test', () => {
  const formatName = 'invalidFormat';
  expect(() => genDiff('file1.json', 'file2.json', 'invalidFormat')).toThrow(`Unknown format to generate a tree: '${formatName}'!`);
});

test('wrong formats of files test', () => {
  expect(() => genDiff('file1.txt', 'file2.txt')).toThrow();
});
