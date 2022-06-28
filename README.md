### Hexlet tests and linter status:
[![Actions Status](https://github.com/DenisLoza/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/DenisLoza/frontend-project-lvl2/actions/workflows/hexlet-check.yml)
[![Node CI](https://github.com/DenisLoza/frontend-project-lvl2/actions/workflows/CI-tests.yml/badge.svg)](https://github.com/DenisLoza/frontend-project-lvl2/actions/workflows/CI-tests.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/ad2b6554b2a73def0f25/maintainability)](https://codeclimate.com/github/DenisLoza/frontend-project-lvl2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/ad2b6554b2a73def0f25/test_coverage)](https://codeclimate.com/github/DenisLoza/frontend-project-lvl2/test_coverage)
![GitHub top language](https://img.shields.io/github/languages/top/DenisLoza/frontend-project-lvl2)

## Description:

The following repository contains gendiff function. It compares two configuration files and shows a difference. Function works with *.yml* *.yaml* and *.json* formats.

### 🛠️ Setup

1) Clone this repo by SSH key:

```
git clone git@github.com:DenisLoza/frontend-project-lvl2.git
```

2) Install depencies:

```sh
make install
```

3) Link the package to execute gendiff function:

```sh
make link
```

### 👩🏻‍💻 Usage

```sh
Usage: gendiff [options] <filepath1> <filepath2>

Compares two configuration files and shows a difference.

Options:
  -V, --version        output the version number
  -f, --format <type>  output format
  -h, --help           output usage information  
```

Сall example to compare files from tests folder
(output format PLAIN):

```sh
gendiff -f plain __fixtures__/file1.json __fixtures__/file2.json
```

### 🧪 Tests & Coverage

1) Run linter:

```sh
make lint
```

2) Run test:

```sh
make test
```

3) Get test coverage:

```sh
make test-coverage
```

## Asciinemas:
### display help and gendiff function work with flat files (.json, .yml, .yaml)
[![asciicast](https://asciinema.org/a/sfUkqoPoGjiB6zoVv7sUSVVjz.svg)](https://asciinema.org/a/sfUkqoPoGjiB6zoVv7sUSVVjz)

### display gendiff function work with nested files (.json, .yml, .yaml)
[![asciicast](https://asciinema.org/a/KyXM4GVtmqvHRQMU8urHc2hk8.svg)](https://asciinema.org/a/KyXM4GVtmqvHRQMU8urHc2hk8)

### display gendiff plain output format function work with nested files (.json, .yml, .yaml)
[![asciicast](https://asciinema.org/a/OKOQR6GMk3cNGwaJNVLxPICBy.svg)](https://asciinema.org/a/OKOQR6GMk3cNGwaJNVLxPICBy)

### display gendiff JSON output format function work with nested files (.json, .yml, .yaml)
[![asciicast](https://asciinema.org/a/V0BD2dguGw5xLFLGcennyans6.svg)](https://asciinema.org/a/V0BD2dguGw5xLFLGcennyans6)
