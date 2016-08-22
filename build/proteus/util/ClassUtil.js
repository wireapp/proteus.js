// Generated by CoffeeScript 1.10.0
(function() {
  var DontCallConstructor;

  DontCallConstructor = require('../errors/DontCallConstructor');

  module.exports = (function() {
    return {
      new_instance: function(klass) {
        var e, error;
        try {
          return new klass;
        } catch (error) {
          e = error;
          if (!(e instanceof DontCallConstructor)) {
            throw e;
          }
          return e._instance;
        }
      }
    };
  })();

}).call(this);
