'use strict';

define("new/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/contact.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/contact.js should pass ESLint\n\n');
  });
  QUnit.test('models/contact.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/contact.js should pass ESLint\n\n');
  });
  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('routes/about.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/about.js should pass ESLint\n\n25:9 - \'params\' is defined but never used. (no-unused-vars)');
  });
  QUnit.test('routes/contact.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/contact.js should pass ESLint\n\n26:5 - \'queryParams:\' is defined but never used. (no-unused-labels)\n27:9 - \'id:\' is defined but never used. (no-unused-labels)\n32:7 - Unexpected console statement. (no-console)\n49:15 - Unreachable code. (no-unreachable)\n57:11 - Unexpected console statement. (no-console)\n61:23 - \'i\' is already defined. (no-redeclare)\n62:19 - \'x\' is already defined. (no-redeclare)\n63:20 - \'obj\' is already defined. (no-redeclare)\n65:25 - \'key\' is already defined. (no-redeclare)\n66:22 - \'value\' is already defined. (no-redeclare)');
  });
  QUnit.test('routes/error.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/error.js should pass ESLint\n\n2:5 - \'arr\' is assigned a value but never used. (no-unused-vars)\n25:9 - \'params\' is defined but never used. (no-unused-vars)');
  });
  QUnit.test('routes/missing.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/missing.js should pass ESLint\n\n');
  });
});
define("new/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('new/templates/about-loading.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'new/templates/about-loading.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('new/templates/about.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'new/templates/about.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('new/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'new/templates/application.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('new/templates/contact.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'new/templates/contact.hbs should pass TemplateLint.\n\nnew/templates/contact.hbs\n  9:0  error  HTML comment detected  no-html-comments\n  10:0  error  HTML comment detected  no-html-comments\n');
  });
  QUnit.test('new/templates/error-loading.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'new/templates/error-loading.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('new/templates/error.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'new/templates/error.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('new/templates/missing.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'new/templates/missing.hbs should pass TemplateLint.\n\n');
  });
});
define("new/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/controllers/contact-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/contact-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/models/contact-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/contact-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/about-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/about-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/contact-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/contact-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/error-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/error-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/missing-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/missing-test.js should pass ESLint\n\n');
  });
});
define("new/tests/test-helper", ["new/app", "new/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("new/tests/unit/controllers/contact-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | contact', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:contact');
      assert.ok(controller);
    });
  });
});
define("new/tests/unit/models/contact-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | contact', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('contact', {});
      assert.ok(model);
    });
  });
});
define("new/tests/unit/routes/about-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | about', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:about');
      assert.ok(route);
    });
  });
});
define("new/tests/unit/routes/contact-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | contact', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:contact');
      assert.ok(route);
    });
  });
});
define("new/tests/unit/routes/error-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | error', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:error');
      assert.ok(route);
    });
  });
});
define("new/tests/unit/routes/missing-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | missing', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:missing');
      assert.ok(route);
    });
  });
});
define('new/config/environment', [], function() {
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

require('new/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
