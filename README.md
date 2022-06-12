### Hexlet tests and linter status:
[![Actions Status](https://github.com/DenisLoza/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/DenisLoza/frontend-project-lvl2/actions/workflows/hexlet-check.yml)
[![Node CI](https://github.com/DenisLoza/frontend-project-lvl2/actions/workflows/CI-tests.yml/badge.svg)](https://github.com/DenisLoza/frontend-project-lvl2/actions/workflows/CI-tests.yml)

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

## Asciinemas:
### display help and gendiff function work with flat files
[![asciicast](https://asciinema.org/a/6MLuvd5Gj2VTDuiZ4Otm6ivn4.svg)](https://asciinema.org/a/6MLuvd5Gj2VTDuiZ4Otm6ivn4)
