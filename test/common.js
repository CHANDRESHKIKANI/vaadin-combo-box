var fullScreen = (function() {
  try {
    document.createEvent("TouchEvent");
    return true;
  } catch (e) {
    return false;
  }
})();

var describeSkipIf = function(bool, title, callback) {
  bool = typeof bool == 'function' ? bool() : bool;
  if (bool) {
    describe.skip(title, callback);
  } else {
    describe(title, callback);
  }
};

var asyncDone = function(cb, done) {
  Polymer.Base.async(function() {
    try {
      cb();
      done();
    } catch (err) {
      done(err);
    }
  });
};