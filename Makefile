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