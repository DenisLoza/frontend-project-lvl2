import readFile from '../src/readFile.js';
import genDiff from '../src/index.js';

const expectedOutput = readFile('flatOutput.txt');

test('gendiff test', () => {
  expect(genDiff('file1.json', 'file2.json')).toEqual(expectedOutput);
});
