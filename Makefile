install: # установить зависимости после клонирования проекта
	npm ci

publish: # выполняет имитацию публикации проекта
	npm publish --dry-run
