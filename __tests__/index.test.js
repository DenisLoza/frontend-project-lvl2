import { readFile } from '../src/utils.js';
import genDiff from '../src/index.js';

const expectedOutput = readFile('flatOutput.txt');

test('gendiff test .json', () => {
  expect(genDiff('file1.json', 'file2.json')).toEqual(expectedOutput);
});

test('gendiff test .yml & .yaml', () => {
  expect(genDiff('file1.yml', 'file2.yaml')).toEqual(expectedOutput);
});
