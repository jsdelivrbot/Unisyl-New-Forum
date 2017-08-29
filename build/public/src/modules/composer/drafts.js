"use strict";define("composer/drafts",function(){var e={};var t;var r=false;e.init=function(e,r){var n=e.find("textarea");n.on("keyup",function(){a();t=setTimeout(function(){o(e,r)},1e3)})};function a(){if(t){clearTimeout(t);t=0}}e.getDraft=function(e){return localStorage.getItem(e)};function o(t,r){var a;if(n()&&r&&r.save_id&&t.length){a=t.find("textarea").val();if(a.length){localStorage.setItem(r.save_id,a)}else{e.removeDraft(r.save_id)}}}e.removeDraft=function(t){a();e.updateVisibility(t);return localStorage.removeItem(t)};e.updateVisibility=function(e,t){if(!n()){return}try{var r=localStorage.getItem("drafts:open");r=r?JSON.parse(r):[]}catch(e){console.warn("[composer/drafts] Could not read list of open drafts");var r=[]}var a=r.indexOf(e);if(t&&a===-1){r.push(e)}else if(!t&&a!==-1){r.splice(a,1)}localStorage.setItem("drafts:open",JSON.stringify(r))};function n(){if(r){return r}try{localStorage.setItem("test","test");localStorage.removeItem("test");r=true;return true}catch(e){r=false;return false}}return e});
//# sourceMappingURL=node_modules/nodebb-plugin-composer-default/static/lib/composer/drafts.js.map