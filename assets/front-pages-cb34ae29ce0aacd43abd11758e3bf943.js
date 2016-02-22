"use strict";define("front-pages/adapters/application",["exports","ember-data"],function(e,t){var r="localhost"===window.location.hostname?null:"http://front-pages.herokuapp.com";e["default"]=t["default"].RESTAdapter.extend({host:r})}),define("front-pages/app",["exports","ember","ember-resolver","ember/load-initializers","front-pages/config/environment"],function(e,t,r,n,a){var l=void 0;t["default"].MODEL_FACTORY_INJECTIONS=!0,l=t["default"].Application.extend({modulePrefix:a["default"].modulePrefix,podModulePrefix:a["default"].podModulePrefix,Resolver:r["default"]}),(0,n["default"])(l,a["default"].modulePrefix),e["default"]=l}),define("front-pages/components/app-version",["exports","ember-cli-app-version/components/app-version","front-pages/config/environment"],function(e,t,r){var n=r["default"].APP.name,a=r["default"].APP.version;e["default"]=t["default"].extend({version:a,name:n})}),define("front-pages/components/jquery-coverflow-cover",["exports","ember-cli-jquery-coverflow/components/jquery-coverflow-cover"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("front-pages/components/jquery-coverflow",["exports","ember-cli-jquery-coverflow/components/jquery-coverflow"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("front-pages/controllers/array",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("front-pages/controllers/object",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("front-pages/controllers/sites/site/snapshot/headlines",["exports","ember"],function(e,t){e["default"]=t["default"].Controller.extend({actions:{stopHeadlineClickPropagation:t["default"].observer("headlines.[]",function(){t["default"].run.next(function(){t["default"].$(".headlines-list").on("click","a",function(e){e.stopPropagation()})})})}})}),define("front-pages/controllers/sites/site",["exports","ember"],function(e,t){var r=function(){var e=t["default"].$(this);e.parents(".site-snapshot-image-loading").removeClass("site-snapshot-image-loading").css("background-color",""),e.hide().fadeIn()};e["default"]=t["default"].Controller.extend({emptyGIF:"data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",selectedSnapshot:null,changeSnapshot:t["default"].computed(function(){var e=this;return function(t,r,n){e.set("currentIndex",n)}}),snapshots:t["default"].computed(function(){return this.store.query("snapshot",{site_id:this.get("model.id")})}),filteredSnapshots:t["default"].computed("snapshots.[]","model",function(){var e=this;return this.get("snapshots").filter(function(t){return t.get("site.id")===e.get("model.id")}).slice(0,50)}),loadImagesObserver:t["default"].observer("filteredSnapshots.[]",function(){this._loadImages()}),_loadImages:function(){t["default"].run.next(function(){t["default"].$(".site-snapshot-image img").each(function(){var e=t["default"].$(this).parent(".site-snapshot-image").hasClass("site-snapshot-image-loading");e&&t["default"].$(this).load(r).attr("src",t["default"].$(this).data("src"))})})},actions:{loadImages:function(){this._loadImages()}}})}),define("front-pages/controllers/sites",["exports","ember"],function(e,t){e["default"]=t["default"].Controller.extend({upgradeLayout:t["default"].observer("rendered",function(){var e=t["default"].$(".sites-layout").get(0);componentHandler.upgradeElement(e)})})}),define("front-pages/helpers/and",["exports","ember","ember-truth-helpers/helpers/and"],function(e,t,r){var n=null;t["default"].Helper?n=t["default"].Helper.helper(r.andHelper):t["default"].HTMLBars.makeBoundHelper&&(n=t["default"].HTMLBars.makeBoundHelper(r.andHelper)),e["default"]=n}),define("front-pages/helpers/eq",["exports","ember","ember-truth-helpers/helpers/equal"],function(e,t,r){var n=null;t["default"].Helper?n=t["default"].Helper.helper(r.equalHelper):t["default"].HTMLBars.makeBoundHelper&&(n=t["default"].HTMLBars.makeBoundHelper(r.equalHelper)),e["default"]=n}),define("front-pages/helpers/gt",["exports","ember","ember-truth-helpers/helpers/gt"],function(e,t,r){var n=null;t["default"].Helper?n=t["default"].Helper.helper(r.gtHelper):t["default"].HTMLBars.makeBoundHelper&&(n=t["default"].HTMLBars.makeBoundHelper(r.gtHelper)),e["default"]=n}),define("front-pages/helpers/gte",["exports","ember","ember-truth-helpers/helpers/gte"],function(e,t,r){var n=null;t["default"].Helper?n=t["default"].Helper.helper(r.gteHelper):t["default"].HTMLBars.makeBoundHelper&&(n=t["default"].HTMLBars.makeBoundHelper(r.gteHelper)),e["default"]=n}),define("front-pages/helpers/is-array",["exports","ember","ember-truth-helpers/helpers/is-array"],function(e,t,r){var n=null;t["default"].Helper?n=t["default"].Helper.helper(r.isArrayHelper):t["default"].HTMLBars.makeBoundHelper&&(n=t["default"].HTMLBars.makeBoundHelper(r.isArrayHelper)),e["default"]=n}),define("front-pages/helpers/lt",["exports","ember","ember-truth-helpers/helpers/lt"],function(e,t,r){var n=null;t["default"].Helper?n=t["default"].Helper.helper(r.ltHelper):t["default"].HTMLBars.makeBoundHelper&&(n=t["default"].HTMLBars.makeBoundHelper(r.ltHelper)),e["default"]=n}),define("front-pages/helpers/lte",["exports","ember","ember-truth-helpers/helpers/lte"],function(e,t,r){var n=null;t["default"].Helper?n=t["default"].Helper.helper(r.lteHelper):t["default"].HTMLBars.makeBoundHelper&&(n=t["default"].HTMLBars.makeBoundHelper(r.lteHelper)),e["default"]=n}),define("front-pages/helpers/moment-duration",["exports","ember-moment/helpers/moment-duration"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("front-pages/helpers/moment-format",["exports","ember","front-pages/config/environment","ember-moment/helpers/moment-format"],function(e,t,r,n){e["default"]=n["default"].extend({globalAllowEmpty:!!t["default"].get(r["default"],"moment.allowEmpty")})}),define("front-pages/helpers/moment-from-now",["exports","ember","front-pages/config/environment","ember-moment/helpers/moment-from-now"],function(e,t,r,n){e["default"]=n["default"].extend({globalAllowEmpty:!!t["default"].get(r["default"],"moment.allowEmpty")})}),define("front-pages/helpers/moment-to-now",["exports","ember","front-pages/config/environment","ember-moment/helpers/moment-to-now"],function(e,t,r,n){e["default"]=n["default"].extend({globalAllowEmpty:!!t["default"].get(r["default"],"moment.allowEmpty")})}),define("front-pages/helpers/not-eq",["exports","ember","ember-truth-helpers/helpers/not-equal"],function(e,t,r){var n=null;t["default"].Helper?n=t["default"].Helper.helper(r.notEqualHelper):t["default"].HTMLBars.makeBoundHelper&&(n=t["default"].HTMLBars.makeBoundHelper(r.notEqualHelper)),e["default"]=n}),define("front-pages/helpers/not",["exports","ember","ember-truth-helpers/helpers/not"],function(e,t,r){var n=null;t["default"].Helper?n=t["default"].Helper.helper(r.notHelper):t["default"].HTMLBars.makeBoundHelper&&(n=t["default"].HTMLBars.makeBoundHelper(r.notHelper)),e["default"]=n}),define("front-pages/helpers/or",["exports","ember","ember-truth-helpers/helpers/or"],function(e,t,r){var n=null;t["default"].Helper?n=t["default"].Helper.helper(r.orHelper):t["default"].HTMLBars.makeBoundHelper&&(n=t["default"].HTMLBars.makeBoundHelper(r.orHelper)),e["default"]=n}),define("front-pages/helpers/xor",["exports","ember","ember-truth-helpers/helpers/xor"],function(e,t,r){var n=null;t["default"].Helper?n=t["default"].Helper.helper(r.xorHelper):t["default"].HTMLBars.makeBoundHelper&&(n=t["default"].HTMLBars.makeBoundHelper(r.xorHelper)),e["default"]=n}),define("front-pages/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","front-pages/config/environment"],function(e,t,r){e["default"]={name:"App Version",initialize:(0,t["default"])(r["default"].APP.name,r["default"].APP.version)}}),define("front-pages/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e["default"]={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t["default"]),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("front-pages/initializers/export-application-global",["exports","ember","front-pages/config/environment"],function(e,t,r){function n(){var e=arguments[1]||arguments[0];if(r["default"].exportApplicationGlobal!==!1){var n,a=r["default"].exportApplicationGlobal;n="string"==typeof a?a:t["default"].String.classify(r["default"].modulePrefix),window[n]||(window[n]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[n]}}))}}e.initialize=n,e["default"]={name:"export-application-global",initialize:n}}),define("front-pages/initializers/truth-helpers",["exports","ember","ember-truth-helpers/utils/register-helper","ember-truth-helpers/helpers/and","ember-truth-helpers/helpers/or","ember-truth-helpers/helpers/equal","ember-truth-helpers/helpers/not","ember-truth-helpers/helpers/is-array","ember-truth-helpers/helpers/not-equal","ember-truth-helpers/helpers/gt","ember-truth-helpers/helpers/gte","ember-truth-helpers/helpers/lt","ember-truth-helpers/helpers/lte"],function(e,t,r,n,a,l,o,s,i,d,u,p,c){function m(){t["default"].Helper||((0,r.registerHelper)("and",n.andHelper),(0,r.registerHelper)("or",a.orHelper),(0,r.registerHelper)("eq",l.equalHelper),(0,r.registerHelper)("not",o.notHelper),(0,r.registerHelper)("is-array",s.isArrayHelper),(0,r.registerHelper)("not-eq",i.notEqualHelper),(0,r.registerHelper)("gt",d.gtHelper),(0,r.registerHelper)("gte",u.gteHelper),(0,r.registerHelper)("lt",p.ltHelper),(0,r.registerHelper)("lte",c.lteHelper))}e.initialize=m,e["default"]={name:"truth-helpers",initialize:m}}),define("front-pages/mixins/google-pageview",["exports","ember","front-pages/config/environment"],function(e,t,r){e["default"]=t["default"].Mixin.create({beforePageviewToGA:function(e){},pageviewToGA:t["default"].on("didTransition",function(e,n){var e=e?e:this.get("url"),n=n?n:this.get("url");if(null!=t["default"].get(r["default"],"googleAnalytics.webPropertyId")){var a=t["default"].getWithDefault(r["default"],"googleAnalytics.tracker","analytics.js");if("analytics.js"===a){var l=t["default"].getWithDefault(r["default"],"googleAnalytics.globalVariable","ga");this.beforePageviewToGA(window[l]),window[l]("send","pageview",{page:e,title:n})}else"ga.js"===a&&window._gaq.push(["_trackPageview"])}})})}),define("front-pages/models/headline",["exports","ember-data"],function(e,t){e["default"]=t["default"].Model.extend({snapshot:t["default"].belongsTo("snapshot"),title:t["default"].attr("string"),url:t["default"].attr("string")})}),define("front-pages/models/site",["exports","ember-data","ember"],function(e,t,r){e["default"]=t["default"].Model.extend({dasherizedName:r["default"].computed("name",function(){return this.get("name").dasherize()}),name:t["default"].attr("string"),shortcode:t["default"].attr("string"),snapshots:t["default"].hasMany("snapshot"),url:t["default"].attr("string")})}),define("front-pages/models/snapshot",["exports","ember-data"],function(e,t){e["default"]=t["default"].Model.extend({file_path:t["default"].attr("string"),headlines:t["default"].hasMany("headline"),site:t["default"].belongsTo("site"),created_at:t["default"].attr("date")})}),define("front-pages/router",["exports","ember","front-pages/config/environment","front-pages/mixins/google-pageview"],function(e,t,r,n){var a=t["default"].Router.extend(n["default"],{location:r["default"].locationType});a.map(function(){this.route("sites",{path:"/"},function(){this.route("site",{path:"/site/:name"},function(){this.route("snapshot",{path:"/:snapshotId"},function(){this.route("headlines",{path:"/headlines"})})})})}),e["default"]=a}),define("front-pages/routes/sites/site/snapshot/headlines",["exports","ember"],function(e,t){e["default"]=t["default"].Route.extend({model:function(){var e=this.modelFor("sites.site.snapshot").get("id");return this.store.query("headline",{snapshot_id:e})},setupController:function(e,t){this._super(e,t),e.send("stopHeadlineClickPropagation"),e.set("snapshot",this.modelFor("sites.site.snapshot"))},renderTemplate:function(){this.render("sites.site.snapshot.headlines",{into:"sites"})}})}),define("front-pages/routes/sites/site/snapshot",["exports","ember"],function(e,t){e["default"]=t["default"].Route.extend({model:function(e){return this.store.findAll("snapshot").then(function(t){return t.findBy("id",e.snapshotId)})}})}),define("front-pages/routes/sites/site",["exports","ember"],function(e,t){e["default"]=t["default"].Route.extend({model:function(e){return this.store.findAll("site").then(function(t){return t.findBy("dasherizedName",e.name)})},actions:{didTransition:function(){return this.get("controller").send("loadImages"),!1}}})}),define("front-pages/routes/sites",["exports","ember"],function(e,t){e["default"]=t["default"].Route.extend({model:function(){return this.store.findAll("site").then(function(e){return e.sortBy("name")})},renderTemplate:function(){var e=this.controllerFor("sites");this.render("sites"),t["default"].run.next(function(){e.set("rendered",!0)})},actions:{didTransition:function(){this.replaceWith("sites.site",this.modelFor("sites").get("firstObject.dasherizedName"))}}})}),define("front-pages/serializers/snapshot",["exports","ember-data"],function(e,t){e["default"]=t["default"].RESTSerializer.extend({attrs:{site:"site_id"}})}),define("front-pages/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("front-pages/services/moment",["exports","ember","front-pages/config/environment","ember-moment/services/moment"],function(e,t,r,n){e["default"]=n["default"].extend({defaultFormat:t["default"].get(r["default"],"moment.outputFormat")})}),define("front-pages/templates/components/jquery-coverflow-cover",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["wrong-type"]},revision:"Ember@2.2.0",loc:{source:null,start:{line:1,column:0},end:{line:2,column:0}},moduleName:"front-pages/templates/components/jquery-coverflow-cover.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),r=e.createComment("");e.appendChild(t,r);var r=e.createTextNode("\n");return e.appendChild(t,r),t},buildRenderNodes:function(e,t,r){var n=new Array(1);return n[0]=e.createMorphAt(t,0,0,r),e.insertBoundary(t,0),n},statements:[["content","yield",["loc",[null,[1,0],[1,9]]]]],locals:[],templates:[]}}())}),define("front-pages/templates/components/jquery-coverflow",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["wrong-type"]},revision:"Ember@2.2.0",loc:{source:null,start:{line:1,column:0},end:{line:2,column:0}},moduleName:"front-pages/templates/components/jquery-coverflow.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),r=e.createComment("");e.appendChild(t,r);var r=e.createTextNode("\n");return e.appendChild(t,r),t},buildRenderNodes:function(e,t,r){var n=new Array(1);return n[0]=e.createMorphAt(t,0,0,r),e.insertBoundary(t,0),n},statements:[["content","yield",["loc",[null,[1,0],[1,9]]]]],locals:[],templates:[]}}())}),define("front-pages/templates/sites/site/snapshot/headlines",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.2.0",loc:{source:null,start:{line:13,column:4},end:{line:15,column:4}},moduleName:"front-pages/templates/sites/site/snapshot/headlines.hbs"},isEmpty:!1,arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),r=e.createTextNode("      ");e.appendChild(t,r);var r=e.createElement("li"),n=e.createElement("a");e.setAttribute(n,"target","_blank"),e.setAttribute(n,"class","headlines-headline");var a=e.createComment("");e.appendChild(n,a),e.appendChild(r,n),e.appendChild(t,r);var r=e.createTextNode("\n");return e.appendChild(t,r),t},buildRenderNodes:function(e,t,r){var n=e.childAt(t,[1,0]),a=new Array(2);return a[0]=e.createAttrMorph(n,"href"),a[1]=e.createMorphAt(n,0,0),a},statements:[["attribute","href",["concat",[["get","headline.url",["loc",[null,[14,21],[14,33]]]]]]],["content","headline.title",["loc",[null,[14,80],[14,98]]]]],locals:["headline"],templates:[]}}();return{meta:{fragmentReason:{name:"triple-curlies"},revision:"Ember@2.2.0",loc:{source:null,start:{line:1,column:0},end:{line:18,column:0}},moduleName:"front-pages/templates/sites/site/snapshot/headlines.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),r=e.createElement("section");e.setAttribute(r,"class","headlines");var n=e.createTextNode("\n  ");e.appendChild(r,n);var n=e.createElement("figure");e.setAttribute(n,"class","headlines-screenshot");var a=e.createTextNode("\n    ");e.appendChild(n,a);var a=e.createElement("div");e.setAttribute(a,"class","headlines-screenshot-image");var l=e.createTextNode("\n      ");e.appendChild(a,l);var l=e.createElement("img");e.setAttribute(l,"alt","Screenshot"),e.appendChild(a,l);var l=e.createTextNode("\n    ");e.appendChild(a,l),e.appendChild(n,a);var a=e.createTextNode("\n    ");e.appendChild(n,a);var a=e.createElement("figcaption"),l=e.createTextNode("\n      ");e.appendChild(a,l);var l=e.createElement("time");e.setAttribute(l,"class","headlines-screenshot-date");var o=e.createTextNode("\n        ");e.appendChild(l,o);var o=e.createComment("");e.appendChild(l,o);var o=e.createTextNode("\n      ");e.appendChild(l,o),e.appendChild(a,l);var l=e.createTextNode("\n    ");e.appendChild(a,l),e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a),e.appendChild(r,n);var n=e.createTextNode("\n  ");e.appendChild(r,n);var n=e.createElement("ul");e.setAttribute(n,"class","headlines-list");var a=e.createTextNode("\n");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("  ");e.appendChild(n,a),e.appendChild(r,n);var n=e.createTextNode("\n");e.appendChild(r,n),e.appendChild(t,r);var r=e.createTextNode("\n");return e.appendChild(t,r),t},buildRenderNodes:function(e,t,r){var n=e.childAt(t,[0]),a=e.childAt(n,[1]),l=e.childAt(a,[1,1]),o=new Array(3);return o[0]=e.createAttrMorph(l,"src"),o[1]=e.createMorphAt(e.childAt(a,[3,1]),1,1),o[2]=e.createMorphAt(e.childAt(n,[3]),1,1),o},statements:[["attribute","src",["concat",[["get","snapshot.file_path",["loc",[null,[4,18],[4,36]]]]]]],["inline","moment-from-now",[["get","snapshot.created_at",["loc",[null,[8,26],[8,45]]]]],[],["loc",[null,[8,8],[8,47]]]],["block","each",[["get","model",["loc",[null,[13,12],[13,17]]]]],[],0,null,["loc",[null,[13,4],[15,13]]]]],locals:[],templates:[e]}}())}),define("front-pages/templates/sites/site",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){var e=function(){var e=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.2.0",loc:{source:null,start:{line:4,column:4},end:{line:16,column:6}},moduleName:"front-pages/templates/sites/site.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),r=e.createTextNode("        ");e.appendChild(t,r);var r=e.createElement("div");e.setAttribute(r,"class","site-snapshot-image site-snapshot-image-loading");var n=e.createTextNode("\n          ");e.appendChild(r,n);var n=e.createElement("img");e.setAttribute(n,"alt","Screenshot"),e.appendChild(r,n);var n=e.createTextNode("\n        ");e.appendChild(r,n),e.appendChild(t,r);var r=e.createTextNode("\n        ");e.appendChild(t,r);var r=e.createElement("figcaption"),n=e.createTextNode("\n          ");e.appendChild(r,n);var n=e.createElement("time");e.setAttribute(n,"class","site-snapshot-date");var a=e.createTextNode("\n            ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n          ");e.appendChild(n,a),e.appendChild(r,n);var n=e.createTextNode("\n        ");e.appendChild(r,n),e.appendChild(t,r);var r=e.createTextNode("\n");return e.appendChild(t,r),t},buildRenderNodes:function(e,t,r){var n=e.childAt(t,[1,1]),a=new Array(3);return a[0]=e.createAttrMorph(n,"data-src"),a[1]=e.createAttrMorph(n,"src"),a[2]=e.createMorphAt(e.childAt(t,[3,1]),1,1),a},statements:[["attribute","data-src",["concat",[["get","snapshot.file_path",["loc",[null,[9,27],[9,45]]]]]]],["attribute","src",["concat",[["get","emptyGIF",["loc",[null,[9,56],[9,64]]]]]]],["inline","moment-from-now",[["get","snapshot.created_at",["loc",[null,[13,30],[13,49]]]]],[],["loc",[null,[13,12],[13,51]]]]],locals:[],templates:[]}}();return{meta:{fragmentReason:!1,revision:"Ember@2.2.0",loc:{source:null,start:{line:3,column:4},end:{line:17,column:4}},moduleName:"front-pages/templates/sites/site.hbs"},isEmpty:!1,arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),r=e.createComment("");return e.appendChild(t,r),t},buildRenderNodes:function(e,t,r){var n=new Array(1);return n[0]=e.createMorphAt(t,0,0,r),e.insertBoundary(t,0),e.insertBoundary(t,null),n},statements:[["block","link-to",["sites.site.snapshot.headlines",["get","snapshot.id",["loc",[null,[5,15],[5,26]]]]],["tagName","figure","classNames","site-snapshot"],0,null,["loc",[null,[4,4],[16,18]]]]],locals:["snapshot"],templates:[e]}}();return{meta:{fragmentReason:!1,revision:"Ember@2.2.0",loc:{source:null,start:{line:2,column:2},end:{line:18,column:2}},moduleName:"front-pages/templates/sites/site.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),r=e.createComment("");return e.appendChild(t,r),t},buildRenderNodes:function(e,t,r){var n=new Array(1);return n[0]=e.createMorphAt(t,0,0,r),e.insertBoundary(t,0),e.insertBoundary(t,null),n},statements:[["block","each",[["get","filteredSnapshots",["loc",[null,[3,12],[3,29]]]]],[],0,null,["loc",[null,[3,4],[17,13]]]]],locals:[],templates:[e]}}();return{meta:{fragmentReason:{name:"triple-curlies"},revision:"Ember@2.2.0",loc:{source:null,start:{line:1,column:0},end:{line:20,column:0}},moduleName:"front-pages/templates/sites/site.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),r=e.createElement("div");e.setAttribute(r,"class","site");var n=e.createTextNode("\n");e.appendChild(r,n);var n=e.createComment("");e.appendChild(r,n),e.appendChild(t,r);var r=e.createTextNode("\n");return e.appendChild(t,r),t},buildRenderNodes:function(e,t,r){var n=new Array(1);return n[0]=e.createMorphAt(e.childAt(t,[0]),1,1),n},statements:[["block","if",[["get","filteredSnapshots",["loc",[null,[2,8],[2,25]]]]],[],0,null,["loc",[null,[2,2],[18,9]]]]],locals:[],templates:[e]}}())}),define("front-pages/templates/sites",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.2.0",loc:{source:null,start:{line:10,column:6},end:{line:12,column:6}},moduleName:"front-pages/templates/sites.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),r=e.createTextNode("        ");e.appendChild(t,r);var r=e.createElement("img");e.setAttribute(r,"src","/assets/images/logo.svg"),e.setAttribute(r,"alt","FrontPages logo"),e.appendChild(t,r);var r=e.createTextNode("\n");return e.appendChild(t,r),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),t=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.2.0",loc:{source:null,start:{line:14,column:6},end:{line:16,column:6}},moduleName:"front-pages/templates/sites.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),r=e.createTextNode("        ");e.appendChild(t,r);var r=e.createElement("span");e.setAttribute(r,"class","mdl-layout-title");var n=e.createTextNode("Front Pages");e.appendChild(r,n),e.appendChild(t,r);var r=e.createTextNode("\n");return e.appendChild(t,r),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),r=function(){var e=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.2.0",loc:{source:null,start:{line:32,column:8},end:{line:35,column:8}},moduleName:"front-pages/templates/sites.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),r=e.createTextNode("          ");e.appendChild(t,r);var r=e.createElement("span");e.setAttribute(r,"class","sites-name");var n=e.createComment("");e.appendChild(r,n),e.appendChild(t,r);var r=e.createTextNode("\n          ");e.appendChild(t,r);var r=e.createElement("span");e.setAttribute(r,"class","sites-shortcode");var n=e.createComment("");e.appendChild(r,n),e.appendChild(t,r);var r=e.createTextNode("\n");return e.appendChild(t,r),t},buildRenderNodes:function(e,t,r){var n=new Array(2);return n[0]=e.createMorphAt(e.childAt(t,[1]),0,0),n[1]=e.createMorphAt(e.childAt(t,[3]),0,0),n},statements:[["content","site.name",["loc",[null,[33,35],[33,48]]]],["content","site.shortcode",["loc",[null,[34,40],[34,58]]]]],locals:[],templates:[]}}();return{meta:{fragmentReason:!1,revision:"Ember@2.2.0",loc:{source:null,start:{line:31,column:6},end:{line:36,column:6}},moduleName:"front-pages/templates/sites.hbs"},isEmpty:!1,arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),r=e.createComment("");return e.appendChild(t,r),t},buildRenderNodes:function(e,t,r){var n=new Array(1);return n[0]=e.createMorphAt(t,0,0,r),e.insertBoundary(t,0),e.insertBoundary(t,null),n},statements:[["block","link-to",["sites.site",["get","site.dasherizedName",["loc",[null,[32,32],[32,51]]]]],["class","mdl-layout__tab"],0,null,["loc",[null,[32,8],[35,20]]]]],locals:["site"],templates:[e]}}();return{meta:{fragmentReason:{name:"triple-curlies"},revision:"Ember@2.2.0",loc:{source:null,start:{line:1,column:0},end:{line:45,column:0}},moduleName:"front-pages/templates/sites.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),r=e.createElement("div");e.setAttribute(r,"class","sites-layout\n            mdl-layout\n            mdl-js-layout\n            mdl-layout--fixed-header\n            mdl-layout--fixed-tabs");var n=e.createTextNode("\n\n  ");e.appendChild(r,n);var n=e.createElement("header");e.setAttribute(n,"class","mdl-layout__header sites-header");var a=e.createTextNode("\n\n    ");e.appendChild(n,a);var a=e.createElement("div");e.setAttribute(a,"class","mdl-layout__header-row sites-header-row");var l=e.createTextNode("\n");e.appendChild(a,l);var l=e.createComment("");e.appendChild(a,l);var l=e.createTextNode("\n");e.appendChild(a,l);var l=e.createComment("");e.appendChild(a,l);var l=e.createTextNode("\n      ");e.appendChild(a,l);var l=e.createElement("div");e.setAttribute(l,"class","mdl-layout-spacer"),e.appendChild(a,l);var l=e.createTextNode("\n\n      ");e.appendChild(a,l);var l=e.createElement("p");e.setAttribute(l,"class","sites-credits");var o=e.createTextNode("\n        Created by ");e.appendChild(l,o);var o=e.createElement("a");e.setAttribute(o,"href","http://jaypinho.com"),e.setAttribute(o,"target","_blank");var s=e.createTextNode("Jay Pinho");e.appendChild(o,s),e.appendChild(l,o);var o=e.createTextNode(" & ");e.appendChild(l,o);var o=e.createElement("a");e.setAttribute(o,"href","http://jessepinho.com"),e.setAttribute(o,"target","_blank");var s=e.createTextNode("Jesse Pinho");e.appendChild(o,s),e.appendChild(l,o);var o=e.createTextNode("\n        ");e.appendChild(l,o);var o=e.createElement("br");e.appendChild(l,o);var o=e.createTextNode(" in Brooklyn & Chicago\n      ");e.appendChild(l,o),e.appendChild(a,l);var l=e.createTextNode("\n\n      ");e.appendChild(a,l);var l=e.createElement("a");e.setAttribute(l,"href","https://github.com/FrontPages"),e.setAttribute(l,"target","_blank"),e.setAttribute(l,"class","sites-github-link");var o=e.createTextNode("\n        ");e.appendChild(l,o);var o=e.createElement("img");e.setAttribute(o,"src","/assets/images/github.svg"),e.setAttribute(o,"alt","GitHub logo"),e.appendChild(l,o);var o=e.createTextNode("\n      ");e.appendChild(l,o),e.appendChild(a,l);var l=e.createTextNode("\n    ");e.appendChild(a,l),e.appendChild(n,a);var a=e.createTextNode("\n\n    ");e.appendChild(n,a);var a=e.createElement("div");e.setAttribute(a,"class","mdl-layout__tab-bar mdl-js-ripple-effect sites-tabs");var l=e.createTextNode("\n");e.appendChild(a,l);var l=e.createComment("");e.appendChild(a,l);var l=e.createTextNode("    ");e.appendChild(a,l),e.appendChild(n,a);var a=e.createTextNode("\n\n  ");e.appendChild(n,a),e.appendChild(r,n);var n=e.createTextNode("\n\n  ");e.appendChild(r,n);var n=e.createElement("main");e.setAttribute(n,"class","mdl-layout__content sites-main");var a=e.createTextNode("\n    ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a),e.appendChild(r,n);var n=e.createTextNode("\n");e.appendChild(r,n),e.appendChild(t,r);var r=e.createTextNode("\n");return e.appendChild(t,r),t},buildRenderNodes:function(e,t,r){var n=e.childAt(t,[0]),a=e.childAt(n,[1]),l=e.childAt(a,[1]),o=new Array(4);return o[0]=e.createMorphAt(l,1,1),o[1]=e.createMorphAt(l,3,3),o[2]=e.createMorphAt(e.childAt(a,[3]),1,1),o[3]=e.createMorphAt(e.childAt(n,[3]),1,1),o},statements:[["block","link-to",["sites"],["classNames","sites-logo"],0,null,["loc",[null,[10,6],[12,18]]]],["block","link-to",["application"],["classNames","sites-title"],1,null,["loc",[null,[14,6],[16,18]]]],["block","each",[["get","model",["loc",[null,[31,14],[31,19]]]]],[],2,null,["loc",[null,[31,6],[36,15]]]],["content","outlet",["loc",[null,[42,4],[42,14]]]]],locals:[],templates:[e,t,r]}}())}),define("front-pages/utils/coverflow-animator",["exports","ember"],function(e,t){e["default"]=t["default"].Object.extend({bodyBackgroundColor:t["default"].computed(function(){return t["default"].$("body").css("background-color")}),coverBackgroundColor:t["default"].computed(function(){return this.get("firstImageWrapper").css("background-color")}),coverBorderColor:t["default"].computed(function(){return this.get("firstImageWrapper").css("border-color")}),firstImageWrapper:t["default"].computed(function(){return t["default"].$(".site-screenshot-image:eq(0)")}),calculateBackgroundColor:function(e){return t["default"].$.xcolor.opacity(this.get("bodyBackgroundColor"),this.get("coverBackgroundColor"),e)},calculateBorderColor:function(e){return t["default"].$.xcolor.opacity(this.get("bodyBackgroundColor"),this.get("coverBorderColor"),e)},animateStep:function(e,r,n,a){if(a){var l=1-Math.sqrt(Math.abs(n)),o=t["default"].$(r),s=t["default"].$(r).find(".site-screenshot-image");o.hasClass("site-screenshot-coverflow-initialized")||o.addClass("site-screenshot-coverflow-initialized"),o.find("img, figcaption").css({opacity:l}),s.css("border-color",this.calculateBorderColor(l)),s.hasClass("site-screenshot-image-loading")&&s.css("background-color",this.calculateBackgroundColor(l))}}})}),define("front-pages/config/environment",["ember"],function(e){var t="front-pages";try{var r=t+"/config/environment",n=e["default"].$('meta[name="'+r+'"]').attr("content"),a=JSON.parse(unescape(n));return{"default":a}}catch(l){throw new Error('Could not read config from meta tag with name "'+r+'".')}}),runningTests||require("front-pages/app")["default"].create({name:"front-pages",version:"0.0.0+4d2e1396"});