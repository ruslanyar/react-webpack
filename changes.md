# Общие настройки линтера и TS

## Eslint

Используем версию `8.57.0`.

Настройки берём из теории.

Докинул в `.eslinignore` файл `postcss.config.js`

## Husky

[Documentation](https://typicode.github.io/husky/get-started.html)

### Install

```bash
  npm install --save-dev husky
```

### husky init (recommended)

```bash
  npx husky init
```

В папке `.husky` заменить содержимое файла `pre-commit` на:

```bash
npx lint-staged
```

❗❗❗Т.е. вот это всё не нужно:

```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"
```

## Lint-staged

[Documentation](https://github.com/okonet/lint-staged)

настроить lint-staged в файле package.json и в него добавить:

```json
"lint-staged": {
  "*.{css,scss}": "stylelint --fix",
  "*.{js,jsx,ts,tsx}": "eslint --fix",
  "*.{js,jsx,ts,tsx,json,css,scss,md}": "prettier --write --ignore-path ./.prettierignore"
},
```

Если оставить npm скрипты (eg, `"*.{css,scss}": "npm run stylelint:fix"`), то линтер будет запускаться для всех файлов, даже для `unstaged`

## Commitizen

Убрать из скрипта `commit` команду `npm run check`:

```json
"scripts": {
    ...
    "commit": "cz"
    ...
},
```

`npm run check` запускает все линтеры до выполнения коммита и использование `lint-staged` лишается всякого смысла.
