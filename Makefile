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

test-coverage: # отображает в ком.строке процент покрытия тестами
	npm test -- --coverage --coverageProvider=v8

test-watch: # тесты в режиме наблюдения с доп. параметрами
	npm test -- --watchAll
