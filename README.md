# Class Mentors UI

## install

```shell
git clone https://github.com/singpath/classmentors.git
cd classmentors
npm install
```

Edit `src/index.html` and `build/index.html` to point to the correct Firebase DB id.
By default, the source version points to "singpath-play", the build version to
"singpath" (our production DB).


## Run Dev server

To start a server listening on https://localhost:8081
```shell
npm start
```


## Building app bundle

To build a minified bundles of the singpath apps and its dependencies:
```shell
npm run build
```

To serve it:
```shell
npm run serve-build
```


## TODO

- add README;
- add tests;
- add command to load rules;
- extract shared services and components to its own package to share it with
class mentors.
