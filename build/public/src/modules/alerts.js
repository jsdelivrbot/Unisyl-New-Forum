"use strict";define("alerts",["translator","components"],function(t,e){var n={};n.alert=function(t){t.alert_id="alert_button_"+(t.alert_id?t.alert_id:(new Date).getTime());t.title=t.title?t.title.trim()||"":"";t.message=t.message?t.message.trim():"";t.type=t.type||"info";var e=$("#"+t.alert_id);if(e.length){o(e,t)}else{i(t)}};function i(n){templates.parse("alert",n,function(i){t.translate(i,function(t){var i=$("#"+n.alert_id);if(i.length){return o(i,n)}i=$(t);i.fadeIn(200);e.get("toaster/tray").prepend(i);if(typeof n.closefn==="function"){i.find("button").on("click",function(){n.closefn();a(i);return false})}if(n.timeout){r(i,n.timeout)}if(typeof n.clickfn==="function"){i.addClass("pointer").on("click",function(t){if(!$(t.target).is(".close")){n.clickfn()}a(i)})}})})}n.remove=function(t){$("#alert_button_"+t).remove()};function o(e,n){e.find("strong").html(n.title);e.find("p").html(n.message);e.attr("class","alert alert-dismissable alert-"+n.type);clearTimeout(parseInt(e.attr("timeoutId"),10));if(n.timeout){r(e,n.timeout)}e.children().fadeOut(100);t.translate(e.html(),function(t){e.children().fadeIn(100);e.html(t)});e.off("click").removeClass("pointer");if(typeof n.clickfn==="function"){e.addClass("pointer").on("click",function(t){if(!$(t.target).is(".close")){n.clickfn()}a(e)})}}function a(t){t.fadeOut(500,function(){$(this).remove()})}function r(t,e){var n=setTimeout(function(){a(t)},e);t.attr("timeoutId",n)}return n});
//# sourceMappingURL=public/src/modules/alerts.js.map