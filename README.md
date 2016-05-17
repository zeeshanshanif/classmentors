# Class Mentors UI

[![Build Status](https://travis-ci.org/zeeshanshanif/classmentors.svg?branch=master)](https://travis-ci.org/zeeshanshanif/classmentors)
[![Coverage Status](https://coveralls.io/repos/github/zeeshanshanif/classmentors/badge.svg?branch=master)](https://coveralls.io/github/zeeshanshanif/classmentors?branch=master)

## Install

Download the lastest package from the
[release page](https://github.com/singpath/classmentors/releases),
extract it, and serve it. E.g. using Python SimpleHTTPServer:

```shell
wget https://github.com/singpath/classmentors/releases/download/v0.4.2/classmentors.zip
unzip classmentors.zip
cd classmentors
python -m SimpleHTTPServer 8000
```

Edit `window.SINGPATH.firebaseId` in `index.html` to point to the correct
Firebase DB id. By default, the build version points to "singpath"
(our production DB).


## Building from source

To locally test and run classmentors:
```shell
git clone https://github.com/singpath/classmentors.git
cd classmentors
npm install
npm test
npm start
```

To build a minified bundle of classmentors and its dependencies:
```shell
npm run build
```

The bundle will be available in `dist/`. To serve it:
```shell
npm run serve-build
```

npm test will run all available tests.

## Read more

- [Development](./CONTRIBUTING.md);
- [Release](./RELEASE.md).
