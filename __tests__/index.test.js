import { readFile } from '../src/utils.js';
import genDiff from '../src/index.js';

const expectedStylishOutput = readFile('stylishOutput.txt');
const expectedPlainOutput = readFile('plainOutput.txt');

test('gendiff stylish .json test', () => {
  expect(genDiff('file1.json', 'file2.json', 'stylish')).toEqual(expectedStylishOutput);
});

test('gendiff stylish .yml and .yaml test', () => {
  expect(genDiff('file1.yml', 'file2.yaml', 'stylish')).toEqual(expectedStylishOutput);
});

test('gendiff plain .json test', () => {
  expect(genDiff('file1.json', 'file2.json', 'plain')).toEqual(expectedPlainOutput);
});

test('gendiff plain .yml and .yaml test', () => {
  expect(genDiff('file1.yml', 'file2.yaml', 'plain')).toEqual(expectedPlainOutput);
});
