var React = require('react');
var cloneWithProps = require('react/lib/cloneWithProps');

var KendoTemplate = function (component) {
  var container = document.createElement('div');
  React.render(cloneWithProps(component), container);
  return $(container).html();
};

module.exports = KendoTemplate;