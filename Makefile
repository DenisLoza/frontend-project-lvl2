install: # установить зависимости после клонирования проекта
	npm ci

link:
	sudo npm link

publish: # выполняет имитацию публикации проекта
	npm publish --dry-run

lint: # выполняет проверку Linter всех файлов проекта
	npx eslint .

test: # выполняет тесты Jest
	npm test
