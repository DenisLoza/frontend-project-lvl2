import { dirname, resolve } from 'path';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';

// Модуль получает имя файла, подставляет правильный путь
// и отдает содержимое данного файла.
// Также Определяет расширение файла.

// получение абсолютного пути к текущему файлу
const __filename = fileURLToPath(import.meta.url);
// получение абсолютного пути к текущему каталогу
const __dirname = dirname(__filename);
// получаем полный относительный путь к файлу с учетом папки "_fixtures_"
// и передаваемого имени файла.
const getFixturePath = (filename) => resolve(__dirname, '..', '__fixtures__', filename);
// получаем данные(в виде строки) из файла по указанному пути
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');
// получаем формат файла по его расширению
const getFormat = (filename) => filename.split('.')[1];

export { getFormat, readFile };
