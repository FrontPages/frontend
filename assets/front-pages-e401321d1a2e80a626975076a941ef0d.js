"use strict";define("front-pages/adapters/application",["exports","ember-data"],function(e,t){var n="localhost"===window.location.hostname?null:"http://front-pages.herokuapp.com";e["default"]=t["default"].RESTAdapter.extend({host:n})}),define("front-pages/app",["exports","ember","ember-resolver","ember/load-initializers","front-pages/config/environment"],function(e,t,n,r,a){var o=void 0;t["default"].MODEL_FACTORY_INJECTIONS=!0,o=t["default"].Application.extend({modulePrefix:a["default"].modulePrefix,podModulePrefix:a["default"].podModulePrefix,Resolver:n["default"]}),(0,r["default"])(o,a["default"].modulePrefix),e["default"]=o}),define("front-pages/components/app-version",["exports","ember-cli-app-version/components/app-version","front-pages/config/environment"],function(e,t,n){var r=n["default"].APP.name,a=n["default"].APP.version;e["default"]=t["default"].extend({version:a,name:r})}),define("front-pages/components/jquery-coverflow-cover",["exports","ember"],function(e,t){e["default"]=t["default"].Component.extend({classNames:["cover"]})}),define("front-pages/components/jquery-coverflow",["exports","ember"],function(e,t){e["default"]=t["default"].Component.extend({didRender:function(){var e=t["default"].$(this.get("element")).coverflow(this.get("_options"));this.set("coverflow",e)},_refresh:t["default"].observer("observeForRefresh",function(){var e=this;t["default"].run.next(function(){e.get("coverflow").coverflow("index",0),e.get("coverflow").coverflow("refresh")})}),_optionList:["animateStep","animateComplete","change","confirm","density","duration","easing","enableClick","enableKeyboard","enableWheel","index","innerAngle","innerCss","innerOffset","innerScale","outerAngle","outerCss","outerOffset","outerScale","select"],_options:t["default"].computed("_optionList.[]",function(){var e=this,n={};return this.get("_optionList").forEach(function(r){"undefined"!==t["default"].typeOf(e.get(r))&&(n[r]=e.get(r))}),n})})}),define("front-pages/controllers/array",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("front-pages/controllers/object",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("front-pages/controllers/sites/site",["exports","ember","front-pages/utils/coverflow-animator"],function(e,t,n){var r=function(){var e=t["default"].$(this);e.parents(".site-screenshot-image-loading").removeClass("site-screenshot-image-loading").css("background-color",""),e.hide().fadeIn()};e["default"]=t["default"].Controller.extend({emptyGIF:"data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",coverflowAnimator:t["default"].computed(function(){return n["default"].create()}),animateStep:t["default"].computed("coverflowAnimator",function(){return this.get("coverflowAnimator.animateStep").bind(this.get("coverflowAnimator"))}),snapshots:t["default"].computed(function(){return this.store.findAll("snapshot")}),filteredSnapshots:t["default"].computed("snapshots.[]","model",function(){var e=this;return this.get("snapshots").filter(function(t){return t.get("site.id")===e.get("model.id")})}),loadImages:t["default"].observer("filteredSnapshots.[]",function(){t["default"].run.next(function(){t["default"].$(".site-screenshot-image img").each(function(){t["default"].$(this).load(r).attr("src",t["default"].$(this).data("src"))})})})})}),define("front-pages/controllers/sites",["exports","ember"],function(e,t){e["default"]=t["default"].Controller.extend({upgradeLayout:t["default"].observer("rendered",function(){var e=t["default"].$(".sites-layout").get(0);componentHandler.upgradeElement(e)})})}),define("front-pages/helpers/array-filter-by",["exports","ember"],function(e,t){function n(e){var t=e[0],n=e[1],r=e[2];return t.filterBy(n,r)}e.arrayFilterBy=n,e["default"]=t["default"].Helper.helper(n)}),define("front-pages/helpers/moment-duration",["exports","ember-moment/helpers/moment-duration"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("front-pages/helpers/moment-format",["exports","ember","front-pages/config/environment","ember-moment/helpers/moment-format"],function(e,t,n,r){e["default"]=r["default"].extend({globalAllowEmpty:!!t["default"].get(n["default"],"moment.allowEmpty")})}),define("front-pages/helpers/moment-from-now",["exports","ember","front-pages/config/environment","ember-moment/helpers/moment-from-now"],function(e,t,n,r){e["default"]=r["default"].extend({globalAllowEmpty:!!t["default"].get(n["default"],"moment.allowEmpty")})}),define("front-pages/helpers/moment-to-now",["exports","ember","front-pages/config/environment","ember-moment/helpers/moment-to-now"],function(e,t,n,r){e["default"]=r["default"].extend({globalAllowEmpty:!!t["default"].get(n["default"],"moment.allowEmpty")})}),define("front-pages/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","front-pages/config/environment"],function(e,t,n){e["default"]={name:"App Version",initialize:(0,t["default"])(n["default"].APP.name,n["default"].APP.version)}}),define("front-pages/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e["default"]={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t["default"]),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("front-pages/initializers/export-application-global",["exports","ember","front-pages/config/environment"],function(e,t,n){function r(){var e=arguments[1]||arguments[0];if(n["default"].exportApplicationGlobal!==!1){var r,a=n["default"].exportApplicationGlobal;r="string"==typeof a?a:t["default"].String.classify(n["default"].modulePrefix),window[r]||(window[r]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[r]}}))}}e.initialize=r,e["default"]={name:"export-application-global",initialize:r}}),define("front-pages/models/headline",["exports","ember-data"],function(e,t){e["default"]=t["default"].Model.extend({created_at:t["default"].attr("date"),site:t["default"].belongsTo("site"),snapshot:t["default"].attr("string"),title:t["default"].attr("string"),url:t["default"].attr("string")})}),define("front-pages/models/site",["exports","ember-data","ember"],function(e,t,n){e["default"]=t["default"].Model.extend({dasherizedName:n["default"].computed("name",function(){return this.get("name").dasherize()}),name:t["default"].attr("string"),shortcode:t["default"].attr("string"),snapshots:t["default"].hasMany("snapshot"),url:t["default"].attr("string")})}),define("front-pages/models/snapshot",["exports","ember-data"],function(e,t){e["default"]=t["default"].Model.extend({file_path:t["default"].attr("string"),site:t["default"].belongsTo("site"),created_at:t["default"].attr("date")})}),define("front-pages/router",["exports","ember","front-pages/config/environment"],function(e,t,n){var r=t["default"].Router.extend({location:n["default"].locationType});r.map(function(){this.route("sites",{path:"/"},function(){this.route("site",{path:"/site/:name"})})}),e["default"]=r}),define("front-pages/routes/sites/site",["exports","ember"],function(e,t){e["default"]=t["default"].Route.extend({model:function(e){return this.store.findAll("site").then(function(t){return t.findBy("dasherizedName",e.name)})},actions:{didTransition:function(){return!1}}})}),define("front-pages/routes/sites",["exports","ember"],function(e,t){e["default"]=t["default"].Route.extend({model:function(){return this.store.findAll("site").then(function(e){return e.sortBy("name")})},renderTemplate:function(){var e=this.controllerFor("sites");this.render("sites"),t["default"].run.next(function(){e.set("rendered",!0)})},actions:{didTransition:function(){this.replaceWith("sites.site",this.modelFor("sites").get("firstObject.dasherizedName"))}}})}),define("front-pages/serializers/snapshot",["exports","ember-data"],function(e,t){e["default"]=t["default"].RESTSerializer.extend({attrs:{site:"site_id"}})}),define("front-pages/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("front-pages/services/moment",["exports","ember","front-pages/config/environment","ember-moment/services/moment"],function(e,t,n,r){e["default"]=r["default"].extend({defaultFormat:t["default"].get(n["default"],"moment.outputFormat")})}),define("front-pages/templates/components/jquery-coverflow-cover",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["wrong-type"]},revision:"Ember@2.2.0",loc:{source:null,start:{line:1,column:0},end:{line:2,column:0}},moduleName:"front-pages/templates/components/jquery-coverflow-cover.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),r},statements:[["content","yield",["loc",[null,[1,0],[1,9]]]]],locals:[],templates:[]}}())}),define("front-pages/templates/components/jquery-coverflow",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["wrong-type"]},revision:"Ember@2.2.0",loc:{source:null,start:{line:1,column:0},end:{line:2,column:0}},moduleName:"front-pages/templates/components/jquery-coverflow.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),r},statements:[["content","yield",["loc",[null,[1,0],[1,9]]]]],locals:[],templates:[]}}())}),define("front-pages/templates/sites/site",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){var e=function(){var e=function(){var e=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.2.0",loc:{source:null,start:{line:12,column:8},end:{line:23,column:8}},moduleName:"front-pages/templates/sites/site.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("          ");e.appendChild(t,n);var n=e.createElement("figure");e.setAttribute(n,"class","site-screenshot");var r=e.createTextNode("\n            ");e.appendChild(n,r);var r=e.createElement("div");e.setAttribute(r,"class","site-screenshot-image site-screenshot-image-loading");var a=e.createTextNode("\n              ");e.appendChild(r,a);var a=e.createElement("img");e.setAttribute(a,"alt","Screenshot"),e.appendChild(r,a);var a=e.createTextNode("\n            ");e.appendChild(r,a),e.appendChild(n,r);var r=e.createTextNode("\n            ");e.appendChild(n,r);var r=e.createElement("figcaption"),a=e.createTextNode("\n              ");e.appendChild(r,a);var a=e.createElement("time");e.setAttribute(a,"class","site-coverflow-cover-date");var o=e.createTextNode("\n                ");e.appendChild(a,o);var o=e.createComment("");e.appendChild(a,o);var o=e.createTextNode("\n              ");e.appendChild(a,o),e.appendChild(r,a);var a=e.createTextNode("\n            ");e.appendChild(r,a),e.appendChild(n,r);var r=e.createTextNode("\n          ");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=e.childAt(t,[1]),a=e.childAt(r,[1,1]),o=new Array(3);return o[0]=e.createAttrMorph(a,"data-src"),o[1]=e.createAttrMorph(a,"src"),o[2]=e.createMorphAt(e.childAt(r,[3,1]),1,1),o},statements:[["attribute","data-src",["concat",[["get","snapshot.file_path",["loc",[null,[15,31],[15,49]]]]]]],["attribute","src",["concat",[["get","emptyGIF",["loc",[null,[15,60],[15,68]]]]]]],["inline","moment-from-now",[["get","snapshot.created_at",["loc",[null,[19,34],[19,53]]]]],[],["loc",[null,[19,16],[19,55]]]]],locals:[],templates:[]}}();return{meta:{fragmentReason:!1,revision:"Ember@2.2.0",loc:{source:null,start:{line:11,column:6},end:{line:24,column:6}},moduleName:"front-pages/templates/sites/site.hbs"},isEmpty:!1,arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),e.insertBoundary(t,null),r},statements:[["block","jquery-coverflow-cover",[],[],0,null,["loc",[null,[12,8],[23,35]]]]],locals:["snapshot"],templates:[e]}}();return{meta:{fragmentReason:!1,revision:"Ember@2.2.0",loc:{source:null,start:{line:3,column:4},end:{line:25,column:4}},moduleName:"front-pages/templates/sites/site.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),e.insertBoundary(t,null),r},statements:[["block","each",[["get","filteredSnapshots",["loc",[null,[11,14],[11,31]]]]],[],0,null,["loc",[null,[11,6],[24,15]]]]],locals:[],templates:[e]}}();return{meta:{fragmentReason:!1,revision:"Ember@2.2.0",loc:{source:null,start:{line:2,column:2},end:{line:26,column:2}},moduleName:"front-pages/templates/sites/site.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),e.insertBoundary(t,null),r},statements:[["block","jquery-coverflow",[],["classNames","site-coverflow","observeForRefresh",["subexpr","@mut",[["get","model.id",["loc",[null,[4,42],[4,50]]]]],[],[]],"animateStep",["subexpr","@mut",[["get","animateStep",["loc",[null,[5,36],[5,47]]]]],[],[]],"enableWheel",!1,"innerAngle",0,"outerAngle",0,"innerScale",.95,"outerScale",.1],0,null,["loc",[null,[3,4],[25,25]]]]],locals:[],templates:[e]}}();return{meta:{fragmentReason:{name:"triple-curlies"},revision:"Ember@2.2.0",loc:{source:null,start:{line:1,column:0},end:{line:28,column:0}},moduleName:"front-pages/templates/sites/site.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("div");e.setAttribute(n,"class","site");var r=e.createTextNode("\n");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(e.childAt(t,[0]),1,1),r},statements:[["block","if",[["get","filteredSnapshots",["loc",[null,[2,8],[2,25]]]]],[],0,null,["loc",[null,[2,2],[26,9]]]]],locals:[],templates:[e]}}())}),define("front-pages/templates/sites",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.2.0",loc:{source:null,start:{line:10,column:6},end:{line:12,column:6}},moduleName:"front-pages/templates/sites.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("        ");e.appendChild(t,n);var n=e.createElement("img");e.setAttribute(n,"src","/assets/images/logo.svg"),e.setAttribute(n,"alt","FrontPages logo"),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),t=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.2.0",loc:{source:null,start:{line:14,column:6},end:{line:16,column:6}},moduleName:"front-pages/templates/sites.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("        ");e.appendChild(t,n);var n=e.createElement("span");e.setAttribute(n,"class","mdl-layout-title");var r=e.createTextNode("Front Pages");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),n=function(){var e=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.2.0",loc:{source:null,start:{line:32,column:8},end:{line:35,column:8}},moduleName:"front-pages/templates/sites.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("          ");e.appendChild(t,n);var n=e.createElement("span");e.setAttribute(n,"class","sites-name");var r=e.createComment("");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n          ");e.appendChild(t,n);var n=e.createElement("span");e.setAttribute(n,"class","sites-shortcode");var r=e.createComment("");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(2);return r[0]=e.createMorphAt(e.childAt(t,[1]),0,0),r[1]=e.createMorphAt(e.childAt(t,[3]),0,0),r},statements:[["content","site.name",["loc",[null,[33,35],[33,48]]]],["content","site.shortcode",["loc",[null,[34,40],[34,58]]]]],locals:[],templates:[]}}();return{meta:{fragmentReason:!1,revision:"Ember@2.2.0",loc:{source:null,start:{line:31,column:6},end:{line:36,column:6}},moduleName:"front-pages/templates/sites.hbs"},isEmpty:!1,arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),e.insertBoundary(t,null),r},statements:[["block","link-to",["sites.site",["get","site.dasherizedName",["loc",[null,[32,32],[32,51]]]]],["class","mdl-layout__tab"],0,null,["loc",[null,[32,8],[35,20]]]]],locals:["site"],templates:[e]}}();return{meta:{fragmentReason:{name:"triple-curlies"},revision:"Ember@2.2.0",loc:{source:null,start:{line:1,column:0},end:{line:45,column:0}},moduleName:"front-pages/templates/sites.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("div");e.setAttribute(n,"class","sites-layout\n            mdl-layout\n            mdl-js-layout\n            mdl-layout--fixed-header\n            mdl-layout--fixed-tabs");var r=e.createTextNode("\n\n  ");e.appendChild(n,r);var r=e.createElement("header");e.setAttribute(r,"class","mdl-layout__header sites-header");var a=e.createTextNode("\n\n    ");e.appendChild(r,a);var a=e.createElement("div");e.setAttribute(a,"class","mdl-layout__header-row sites-header-row");var o=e.createTextNode("\n");e.appendChild(a,o);var o=e.createComment("");e.appendChild(a,o);var o=e.createTextNode("\n");e.appendChild(a,o);var o=e.createComment("");e.appendChild(a,o);var o=e.createTextNode("\n      ");e.appendChild(a,o);var o=e.createElement("div");e.setAttribute(o,"class","mdl-layout-spacer"),e.appendChild(a,o);var o=e.createTextNode("\n\n      ");e.appendChild(a,o);var o=e.createElement("p");e.setAttribute(o,"class","sites-credits");var l=e.createTextNode("\n        Created by ");e.appendChild(o,l);var l=e.createElement("a");e.setAttribute(l,"href","http://jaypinho.com"),e.setAttribute(l,"target","_blank");var i=e.createTextNode("Jay Pinho");e.appendChild(l,i),e.appendChild(o,l);var l=e.createTextNode(" & ");e.appendChild(o,l);var l=e.createElement("a");e.setAttribute(l,"href","http://jessepinho.com"),e.setAttribute(l,"target","_blank");var i=e.createTextNode("Jesse Pinho");e.appendChild(l,i),e.appendChild(o,l);var l=e.createTextNode("\n        ");e.appendChild(o,l);var l=e.createElement("br");e.appendChild(o,l);var l=e.createTextNode(" in Brooklyn & Chicago\n      ");e.appendChild(o,l),e.appendChild(a,o);var o=e.createTextNode("\n\n      ");e.appendChild(a,o);var o=e.createElement("a");e.setAttribute(o,"href","https://github.com/FrontPages"),e.setAttribute(o,"target","_blank"),e.setAttribute(o,"class","sites-github-link");var l=e.createTextNode("\n        ");e.appendChild(o,l);var l=e.createElement("img");e.setAttribute(l,"src","/assets/images/github.svg"),e.setAttribute(l,"alt","GitHub logo"),e.appendChild(o,l);var l=e.createTextNode("\n      ");e.appendChild(o,l),e.appendChild(a,o);var o=e.createTextNode("\n    ");e.appendChild(a,o),e.appendChild(r,a);var a=e.createTextNode("\n\n    ");e.appendChild(r,a);var a=e.createElement("div");e.setAttribute(a,"class","mdl-layout__tab-bar mdl-js-ripple-effect sites-tabs");var o=e.createTextNode("\n");e.appendChild(a,o);var o=e.createComment("");e.appendChild(a,o);var o=e.createTextNode("    ");e.appendChild(a,o),e.appendChild(r,a);var a=e.createTextNode("\n\n  ");e.appendChild(r,a),e.appendChild(n,r);var r=e.createTextNode("\n\n  ");e.appendChild(n,r);var r=e.createElement("main");e.setAttribute(r,"class","mdl-layout__content sites-main");var a=e.createTextNode("\n    ");e.appendChild(r,a);var a=e.createComment("");e.appendChild(r,a);var a=e.createTextNode("\n  ");e.appendChild(r,a),e.appendChild(n,r);var r=e.createTextNode("\n");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=e.childAt(t,[0]),a=e.childAt(r,[1]),o=e.childAt(a,[1]),l=new Array(4);return l[0]=e.createMorphAt(o,1,1),l[1]=e.createMorphAt(o,3,3),l[2]=e.createMorphAt(e.childAt(a,[3]),1,1),l[3]=e.createMorphAt(e.childAt(r,[3]),1,1),l},statements:[["block","link-to",["sites"],["classNames","sites-logo"],0,null,["loc",[null,[10,6],[12,18]]]],["block","link-to",["application"],["classNames","sites-title"],1,null,["loc",[null,[14,6],[16,18]]]],["block","each",[["get","model",["loc",[null,[31,14],[31,19]]]]],[],2,null,["loc",[null,[31,6],[36,15]]]],["content","outlet",["loc",[null,[42,4],[42,14]]]]],locals:[],templates:[e,t,n]}}())}),define("front-pages/utils/coverflow-animator",["exports","ember"],function(e,t){e["default"]=t["default"].Object.extend({bodyBackgroundColor:t["default"].computed(function(){return t["default"].$("body").css("background-color")}),coverBackgroundColor:t["default"].computed(function(){return this.get("firstImageWrapper").css("background-color")}),coverBorderColor:t["default"].computed(function(){return this.get("firstImageWrapper").css("border-color")}),firstImageWrapper:t["default"].computed(function(){return t["default"].$(".site-screenshot-image:eq(0)")}),calculateBackgroundColor:function(e){return $.xcolor.opacity(this.get("bodyBackgroundColor"),this.get("coverBackgroundColor"),e)},calculateBorderColor:function(e){return $.xcolor.opacity(this.get("bodyBackgroundColor"),this.get("coverBorderColor"),e)},animateStep:function(e,n,r){var a=1-Math.sqrt(Math.abs(r)),o=t["default"].$(n).find(".site-screenshot-image");$(n).find("img, figcaption").css({opacity:a}),o.css("border-color",this.calculateBorderColor(a)),o.hasClass("site-screenshot-image-loading")&&o.css("background-color",this.calculateBackgroundColor(a))}})}),define("front-pages/config/environment",["ember"],function(e){var t="front-pages";try{var n=t+"/config/environment",r=e["default"].$('meta[name="'+n+'"]').attr("content"),a=JSON.parse(unescape(r));return{"default":a}}catch(o){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests||require("front-pages/app")["default"].create({name:"front-pages",version:"0.0.0+7834b009"});