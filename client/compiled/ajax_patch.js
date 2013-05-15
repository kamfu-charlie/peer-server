// Generated by CoffeeScript 1.6.2
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  window.FakeAjax = (function() {
    function FakeAjax() {
      this.jqAjax = __bind(this.jqAjax, this);
    }

    FakeAjax.prototype.jqAjax = function(path, options) {
      if ("success" in options) {
        this.success = options["success"];
      }
      if ("failure" in options) {
        this.failure = options["failure"];
      }
      console.log("success is now:" + this.success);
      return top.window.webRTC.ajaxClient.requestAjax(path, this.success);
    };

    return FakeAjax;

  })();

  $.ajax = function(url, options) {
    var fajax;

    fajax = new FakeAjax();
    return fajax.jqAjax(url, options);
  };

}).call(this);
