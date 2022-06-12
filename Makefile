install: # установить зависимости после клонирования проекта
	npm ci

link:
	sudo npm link

publish: # выполняет имитацию публикации проекта
	npm publish --dry-run
