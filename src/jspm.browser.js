SystemJS.config({
  baseURL: "/",
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*",
    "classmentors/": "classmentors/"
  },
  depCache: {
    "app.js": [
      "angular",
      "./classmentors/index.js"
    ],
    "classmentors/components/ace/ace.js": [
      "../../module.js",
      "./2015-ace-view.html!text"
    ],
    "classmentors/components/classmentors/classmentors.js": [
      "../../module.js",
      "./classmentors-view.html!text",
      "./classmentors.css!"
    ],
    "classmentors/components/events/events.js": [
      "angular",
      "../../module.js",
      "./events-view-event-edit.html!text",
      "./events-view-event-table-participants.html!text",
      "./events-view-event-table-rank.html!text",
      "./events-view-event-task-form.html!text",
      "./events-view-event.html!text",
      "./events-view-list.html!text",
      "./events-view-new.html!text",
      "./events-view-pager.html!text",
      "./events-view-password.html!text",
      "./events-view-provide-link.html!text",
      "./events-view-provide-response.html!text",
      "./events.css!"
    ],
    "classmentors/components/index.js": [
      "./ace/ace.js",
      "./classmentors/classmentors.js",
      "./events/events.js",
      "./profiles/profiles.js"
    ],
    "classmentors/components/profiles/profiles.js": [
      "angular",
      "../../module.js",
      "./profiles-view-clm-profile.html!text",
      "./profiles-view-spf-profile.html!text",
      "./profiles-view-codecombat-lookup-error.html!text",
      "./profiles-view-edit.html!text",
      "./profiles-view-show.html!text",
      "./profiles.css!"
    ],
    "classmentors/directives.js": [
      "./module.js"
    ],
    "classmentors/filters.js": [
      "./module.js"
    ],
    "classmentors/index.js": [
      "./module.js",
      "./directives.js",
      "./filters.js",
      "./services/index.js",
      "./components/index.js"
    ],
    "classmentors/module.js": [
      "angular",
      "firebase",
      "angularfire",
      "angular-material",
      "angular-loading-bar",
      "angular-animate",
      "angular-messages",
      "angular-route",
      "singpath-core"
    ],
    "classmentors/services/datastore.js": [
      "angular",
      "../module.js"
    ],
    "classmentors/services/index.js": [
      "./datastore.js",
      "./routes.js"
    ],
    "classmentors/services/routes.js": [
      "../module.js"
    ],
    "github:ajaxorg/ace-builds@1.2.3/ace.js": [
      "ace/ace"
    ],
    "github:ajaxorg/ace-builds@1.2.3/mode-html.js": [
      "ace/ace"
    ],
    "github:ajaxorg/ace-builds@1.2.3/mode-java.js": [
      "ace/ace"
    ],
    "github:ajaxorg/ace-builds@1.2.3/mode-javascript.js": [
      "ace/ace"
    ],
    "github:ajaxorg/ace-builds@1.2.3/mode-python.js": [
      "ace/ace"
    ],
    "github:ajaxorg/ace-builds@1.2.3/theme-twilight.js": [
      "ace/ace"
    ],
    "github:angular/bower-angular-animate@1.5.1/angular-animate.js": [
      "angular"
    ],
    "github:angular/bower-angular-aria@1.5.1/angular-aria.js": [
      "angular"
    ],
    "github:angular/bower-angular-messages@1.5.1/angular-messages.js": [
      "angular"
    ],
    "github:angular/bower-angular-route@1.5.1/angular-route.js": [
      "angular"
    ],
    "github:angular/bower-material@1.0.6/angular-material.js": [
      "./angular-material.css!",
      "angular",
      "angular-animate",
      "angular-aria"
    ],
    "github:chieffancypants/angular-loading-bar@0.8.0/build/loading-bar.js": [
      "angular",
      "./loading-bar.css!"
    ],
    "github:firebase/angularfire@1.1.4/dist/angularfire.js": [
      "firebase",
      "angular"
    ],
    "github:singpath/singpath-core@0.3.0/components/ace/ace.js": [
      "angular",
      "../../module.js",
      "ace",
      "ace/mode-html.js",
      "ace/mode-java.js",
      "ace/mode-javascript.js",
      "ace/mode-python.js",
      "ace/theme-twilight.js",
      "./ace.css!"
    ],
    "github:singpath/singpath-core@0.3.0/components/alert/alert.js": [
      "../../module.js",
      "./alert-view-toaster.html!text",
      "./alert.css!text"
    ],
    "github:singpath/singpath-core@0.3.0/components/index.js": [
      "./ace/ace.js",
      "./alert/alert.js",
      "./navbar/navbar.js",
      "./sign/sign.js"
    ],
    "github:singpath/singpath-core@0.3.0/components/navbar/navbar.js": [
      "angular",
      "../../module.js",
      "./navbar-view.html!text",
      "./navbar.css!"
    ],
    "github:singpath/singpath-core@0.3.0/components/sign/sign.js": [
      "../../module.js",
      "./sign-view.html!text"
    ],
    "github:singpath/singpath-core@0.3.0/filters.js": [
      "./module.js"
    ],
    "github:singpath/singpath-core@0.3.0/index.js": [
      "./module.js",
      "./filters.js",
      "./services/index.js",
      "./components/index.js",
      "./shared.css!"
    ],
    "github:singpath/singpath-core@0.3.0/module.js": [
      "angular",
      "firebase",
      "angularfire",
      "angular-loading-bar",
      "angular-animate",
      "angular-messages",
      "angular-route",
      "angular-material"
    ],
    "github:singpath/singpath-core@0.3.0/services/countries.js": [
      "../module.js"
    ],
    "github:singpath/singpath-core@0.3.0/services/crypto.js": [
      "cryptojs",
      "cryptojs/md5.js",
      "cryptojs/pbkdf2.js",
      "cryptojs/sha256.js",
      "../module.js"
    ],
    "github:singpath/singpath-core@0.3.0/services/datastore.js": [
      "angular",
      "../module.js"
    ],
    "github:singpath/singpath-core@0.3.0/services/firebase.js": [
      "angular",
      "firebase",
      "../module.js"
    ],
    "github:singpath/singpath-core@0.3.0/services/icons/icons.js": [
      "../../module.js",
      "./svgdefs.svg!text",
      "./icons-python.svg!text",
      "./icons-angularjs.svg!text",
      "./icons-javascript.svg!text",
      "./icons-java.svg!text"
    ],
    "github:singpath/singpath-core@0.3.0/services/index.js": [
      "./countries.js",
      "./crypto.js",
      "./datastore.js",
      "./firebase.js",
      "./routes.js",
      "./icons/icons.js"
    ],
    "github:singpath/singpath-core@0.3.0/services/routes.js": [
      "../module.js"
    ],
    "github:sytelus/cryptojs@3.1.2/hmac.js": [
      "cryptojs/core.js"
    ],
    "github:sytelus/cryptojs@3.1.2/md5.js": [
      "cryptojs/core.js"
    ],
    "github:sytelus/cryptojs@3.1.2/pbkdf2.js": [
      "cryptojs/sha1.js",
      "cryptojs/hmac.js"
    ],
    "github:sytelus/cryptojs@3.1.2/sha1.js": [
      "cryptojs/core.js"
    ],
    "github:sytelus/cryptojs@3.1.2/sha256.js": [
      "cryptojs/core.js"
    ]
  }
});
