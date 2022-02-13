lint:
	./node_modules/.bin/eslint ./**/*.ts

lint-fix:
	./node_modules/.bin/eslint ./**/*.ts --fix

test:
	./node_modules/.bin/jest

test-coverage:
	./node_modules/.bin/jest --coverage

compile:
	./node_modules/.bin/tsc

install:
	npm install

task1:
	node build/tasks/task1.js

task2:
	node build/tasks/task2.js

task3:
	node build/tasks/task3.js

run:
	node build/src/index.js