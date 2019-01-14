'use strict';



;define("new/app", ["exports", "new/resolver", "ember-load-initializers", "new/config/environment"], function (_exports, _resolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
  var _default = App;
  _exports.default = _default;
});
;define("new/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define("new/controllers/contact", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    queryParams: ['id'],
    id: null,
    filteredContact: Ember.computed('id', 'model', function () {
      let id = this.id;
      let contact = this.model;

      if (id) {
        return contact.filterBy('id', id);
      } else {
        return contact;
      }
    })
  });

  _exports.default = _default;
});
;define("new/helpers/app-version", ["exports", "new/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = Ember.Helper.helper(appVersion);

  _exports.default = _default;
});
;define("new/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("new/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("new/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "new/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("new/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }

  };
  _exports.default = _default;
});
;define("new/initializers/ember-data", ["exports", "ember-data/setup-container", "ember-data"], function (_exports, _setupContainer, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    ```app/services/store.js
    import DS from 'ember-data';
  
    export default DS.Store.extend({
      adapter: 'custom'
    });
    ```
  
    ```app/controllers/posts.js
    import { Controller } from '@ember/controller';
  
    export default Controller.extend({
      // ...
    });
  
    When the application is initialized, `ApplicationStore` will automatically be
    instantiated, and the instance of `PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("new/initializers/export-application-global", ["exports", "new/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("new/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (_exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'ember-data',
    initialize: _initializeStoreService.default
  };
  _exports.default = _default;
});
;define("new/models/contact", ["exports", "ember-data"], function (_exports, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _emberData.default.Model.extend({});
  /*
  let result = [];
  let a = 1;
    console.log(params);
    for(var i=0;i<4;i++)
    {
      if(data[i] == params.contact_id)
      {
         console.log(data[i]);
         let ans = data[i];
         result.push(i);
         return result;
         console.log("This should not be printed");
      }
    }
    console.log("Post Loop");
    return data;*/


  _exports.default = _default;
});
;define("new/resolver", ["exports", "ember-resolver"], function (_exports, _emberResolver) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _emberResolver.default;
  _exports.default = _default;
});
;define("new/router", ["exports", "new/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });
  Router.map(function () {
    this.route('contact');
    this.route('contact', {
      path: '/contact/:contact_id'
    }); //  this.route('missing', { path: "/*path" });
  });
  var _default = Router;
  _exports.default = _default;
});
;define("new/routes/about", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var arr = [{
    "id": "1",
    "name": "aaa"
  }, {
    "id": "2",
    "name": "bbb"
  }, {
    "id": "3",
    "name": "ccc"
  }, {
    "id": "4",
    "name": "ddd"
  }];

  function delay(sec) {
    return new Promise(resolve => setTimeout(resolve, sec));
  }

  var _default = Ember.Route.extend({
    model(params) {
      return delay(3000).then(() => {
        return arr;
      });
    }

  });

  _exports.default = _default;
});
;define("new/routes/contact", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var arr = [{
    "id": "1",
    "name": "aaa"
  }, {
    "id": "2",
    "name": "bbb"
  }, {
    "id": "3",
    "name": "ccc"
  }, {
    "id": "4",
    "name": "ddd"
  }];

  var _default = Ember.Route.extend({
    model(params) {
      queryParams: {
        id: '';
      }

      var res = [];
      var j = 0;
      var qp = params.id;
      console.log(qp);

      if (qp < 5 && qp > 1) {
        for (var i = 0; i < arr.length; i++) {
          var x = params.contact_id;
          var obj = arr[i]; // console.log(obj);

          for (var key in obj) {
            var value = obj[key]; //console.log(value, params.contact_id);

            if (value == qp) {
              res[j] = obj;
              j++; //console.log(obj);ss

              return res;
              break;
            }
          }
        }
      }

      if (params.contact_id == null) {
        console.log("Inside if");
        return arr;
      } else {
        for (var i = 0; i < arr.length; i++) {
          var x = params.contact_id;
          var obj = arr[i]; // console.log(obj);

          for (var key in obj) {
            var value = obj[key]; //console.log(value, params.contact_id);

            if (key == "id" && value == x) {
              res[j] = obj;
              j++; //console.log(obj);ss

              break;
            }
          }
        }

        return res;
      }
      /*
      actions: {
       error(error, transition) {
         console.log("Inside actions");
         if (error.status === '200') {
            this.replaceWith('contacts');
            }
        else {
           // Let the route above this handle the error.
           return true;
         }
       }
      }
      */

    }

  });

  _exports.default = _default;
});
;define("new/routes/error", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var arr = [{
    "id": "1",
    "name": "aaa"
  }, {
    "id": "2",
    "name": "bbb"
  }, {
    "id": "3",
    "name": "ccc"
  }, {
    "id": "4",
    "name": "ddd"
  }];

  function delay(sec) {
    return new Promise(reject => setTimeout(reject, sec));
  }

  var _default = Ember.Route.extend({
    model(params) {
      return delay(3000).then(() => {// does not return anything
      });
    }

  });

  _exports.default = _default;
});
;define("new/routes/missing", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    redirect: function () {
      //App.LOG.warn("No Route for given URL found. Will transition to Contact Route instead.");
      this.transitionTo("contact");
    }
  });

  _exports.default = _default;
});
;define("new/services/ajax", ["exports", "ember-ajax/services/ajax"], function (_exports, _ajax) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
;define("new/templates/about-loading", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "+hkwi3Q3",
    "block": "{\"symbols\":[],\"statements\":[[7,\"h5\"],[9],[0,\" Please wait while the route loads \"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "new/templates/about-loading.hbs"
    }
  });

  _exports.default = _default;
});
;define("new/templates/about", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "NYp4SOau",
    "block": "{\"symbols\":[\"contact\"],\"statements\":[[4,\"each\",[[23,[\"model\"]]],null,{\"statements\":[[0,\"  \"],[1,[22,1,[\"id\"]],false],[0,\"\\n  \"],[7,\"br\"],[9],[10],[0,\"\\n  \"],[1,[22,1,[\"name\"]],false],[0,\"\\n  \"],[7,\"br\"],[9],[10],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"\\n\"],[1,[21,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "new/templates/about.hbs"
    }
  });

  _exports.default = _default;
});
;define("new/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "J++zF8+z",
    "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\\n\"],[1,[21,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "new/templates/application.hbs"
    }
  });

  _exports.default = _default;
});
;define("new/templates/contact", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "Q9Y0WMnd",
    "block": "{\"symbols\":[\"contact\"],\"statements\":[[0,\"\\n\\n\"],[4,\"each\",[[23,[\"model\"]]],null,{\"statements\":[[0,\"    \"],[1,[22,1,[\"id\"]],false],[0,\"\\n    \"],[7,\"br\"],[9],[10],[0,\"\\n    \"],[1,[22,1,[\"name\"]],false],[0,\"\\n    \"],[7,\"br\"],[9],[10],[0,\"\\n\"]],\"parameters\":[1]},null],[2,\"  {{contact.name}} \"],[0,\"\\n\"],[2,\"\\n{{#each contact in filteredContact}}\\n    {{contact.name}}\\n    <br>\\n    {{contact.id}}\\n    {{/each}}\"],[0,\"\\n\"],[1,[21,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "new/templates/contact.hbs"
    }
  });

  _exports.default = _default;
});
;define("new/templates/error-loading", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "qxP4RrQI",
    "block": "{\"symbols\":[],\"statements\":[[0,\"Please wait while the application loads\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "new/templates/error-loading.hbs"
    }
  });

  _exports.default = _default;
});
;define("new/templates/error", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "/X3k8D1E",
    "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[7,\"h4\"],[9],[0,\" Error ! Check your route \"],[10],[0,\"\\n\\n\\n\"],[1,[21,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "new/templates/error.hbs"
    }
  });

  _exports.default = _default;
});
;define("new/templates/missing", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "6cCtAIZl",
    "block": "{\"symbols\":[],\"statements\":[[1,[21,\"outlet\"],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "new/templates/missing.hbs"
    }
  });

  _exports.default = _default;
});
;

;define('new/config/environment', [], function() {
  var prefix = 'new';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("new/app")["default"].create({"name":"new","version":"0.0.0+d3dbb70e"});
          }
        
//# sourceMappingURL=new.map
