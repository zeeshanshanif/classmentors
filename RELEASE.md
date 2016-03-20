# Release

The release package are upload by Travis each time a tag is pushed to
[singpath/classmentors](https://github.com/singpath/classmentors).


## Pushing new release

Bump the `package.json` version number, commit it, create a new tag and push
the change and the new tag. You can use `npm version major|minor|patch`; e.g.
assume you cloned the classmentor with upstream pointing to
[singpath/classmentors]:
```
git clone git@github.com:your-username/classmentors.git
cd classmentors
git remote add upstream git@github.com:singpath/classmentors.git
```

To publish the tag:
```
git checkout master
git pull upstream master
export NEW_VERSION=$(npm version patch)
git push upstream master $NEW_VERSION
```

## Travis configuration

Travis uses encrypted Github API token to upload the package. It was create with the following
commands:
```
cat > .travis.yaml << EOF
language: node_js
node_js:
- '4.2'
before_deploy:
- npm run build
EOF
gem install travis
travis setup releases -r singpath/classmentors
```

Edit `.travis.yaml` so that deploy.skip_cleanup is set true, deploy.on.repo is
set to "singpath/classmentors" and deploy.on.tags to true.

It should look like this:
```
language: node_js
node_js:
- '4.2'
before_deploy:
- npm run build
deploy:
  skip_cleanup: true
  provider: releases
  api_key:
    secure: xxxxx
  file: dist/classmentors.zip
  on:
    repo: singpath/classmentors
    tags: true
```
