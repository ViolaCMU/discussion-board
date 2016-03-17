Package.describe({
  name: 'jingxuan:discussion-board',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'add discussion boards to your projects/classes, providing different level of permissions',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('moment', 'pages', 'router', 'autoform', 'bootstrap', 'simple-schema');
  api.addFiles('discussion-board.js');
  api.addFiles('client/views/discussion/discussion-board.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('moment', 'pages', 'router', 'autoform', 'bootstrap', 'simple-schema');
  api.use('jingxuan:discussion-board');
  api.addFiles('discussion-board-tests.js');
});
