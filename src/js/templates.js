define(function(){

this["templates"] = this["templates"] || {};

this["templates"]["app.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '';

}
return __p
};

this["templates"]["intro.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="page-wrap index">\n  <h1 class="page-header container"> \n    <img class="info" src="/img/info.svg" alt="info">\n    <img class="logo" src="/img/biologo.svg" alt="BIOLABS IN YOUR BACKYARD">\n   </h1>\n\n  <p class="text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>\n\n  <div class="button intro-view-state-button">view your state</div>\n  <div class="button intro-read-story-button">read story</div>\n\n  <div class ="container foot"> \n    <div class="ftbutton"> share </div>\n  </div>\n</div>\n\n';

}
return __p
};

this["templates"]["labView.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '';

}
return __p
};

this["templates"]["stateIndexView.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="page-wrap content">\n<h1 class="page-header container"> \n    <img class="info" src="/img/info.svg" alt="info">\n    <img class="headimg" src="/img/states.svg" alt="States">\n  </h1>\n\n  <div class="stcont">\n  </div>\n\n<img class="range" src="/img/range.svg">\n \n\n  <div class ="container foot"> \n    <div class="ftbutton">read story</div>\n    <a href="index.html">\n      <div class="ftbutton">intro</div>\n    </a>\n    <div class="ftbutton">share</div>\n  </div>\n  </div>\n';

}
return __p
};

this["templates"]["stateView.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="page-wrap content">\n  <h1 class="page-header container"> \n    <img class="info" src="/img/info.svg" alt="info">\n    <img class="headimg" src="/img/virginia.svg" alt="Virginia">\n  </h1>\n\n  <p class="text chatt">  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>\n  <div class="hr1"></div>\n';
 _.each(states, function(state){ ;
__p += '\n\n\n\n  <a class="link" href="vatech.html">\n    <p class="text labnm">' +
((__t = ( state.name )) == null ? '' : __t) +
'</p>\n    <p class="text labloc">' +
((__t = ( state.city )) == null ? '' : __t) +
' , ' +
((__t = ( state.state )) == null ? '' : __t) +
'</p>\n  </a>\n<div class="hr2"></div>\n\n';
 }) ;
__p += '\n\n\n  <div class ="container foot"> \n    <div class="ftbutton">read story</div>\n    <a href="viewyourstate.html">\n      <div class="ftbutton">states</div>\n    </a>\n    <div class="ftbutton">share</div>\n  </div>\n</div>';

}
return __p
};

  return this["templates"];

});