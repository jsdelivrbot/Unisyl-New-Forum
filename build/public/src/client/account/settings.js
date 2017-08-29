"use strict";define("forum/account/settings",["forum/account/header","components","sounds"],function(t,e,a){var n={};$(window).on("action:ajaxify.start",function(){if(ajaxify.data.template.name==="account/settings"&&$("#bootswatchSkin").val()!==config.bootswatchSkin){o(config.bootswatchSkin)}});n.init=function(){t.init();$("#submitBtn").on("click",function(){var t=i();if(t.homePageRoute==="custom"&&t.homePageCustom){$.get(config.relative_path+"/"+t.homePageCustom,function(){s(t)}).fail(function(){app.alertError("[[error:invalid-home-page-route]]")})}else{s(t)}return false});$("#bootswatchSkin").on("change",function(){o($(this).val())});$('[data-property="homePageRoute"]').on("change",r);$(".account").find('button[data-action="play"]').on("click",function(t){t.preventDefault();var e=$(this).parent().parent().find("select").val();a.playSound(e)});r();e.get("user/sessions").find(".timeago").timeago()};function o(t){var e=$("#bootswatchCSS");if(t==="noskin"||t==="default"&&config.defaultBootswatchSkin==="noskin"){e.remove()}else{if(t==="default"){t=config.defaultBootswatchSkin}var a="//maxcdn.bootstrapcdn.com/bootswatch/latest/"+t+"/bootstrap.min.css";if(e.length){e.attr("href",a)}else{e=$('<link id="bootswatchCSS" href="'+a+'" rel="stylesheet" media="screen">');$("head").append(e)}}var n=$("body").attr("class").split(/\s+/).filter(function(t){return t.startsWith("skin-")});$("body").removeClass(n.join(" ")).addClass("skin-"+t)}function i(){var t={};$(".account").find("input, textarea, select").each(function(e,a){a=$(a);var n=a.attr("data-property");if(a.is("select")){t[n]=a.val();return}switch(a.attr("type")){case"text":case"textarea":t[n]=a.val();break;case"checkbox":t[n]=a.is(":checked")?1:0;break}});return t}function s(t){socket.emit("user.saveSettings",{uid:ajaxify.data.theirid,settings:t},function(t,e){if(t){return app.alertError(t.message)}app.alertSuccess("[[success:settings-saved]]");var n=false;for(var o in e){if(e.hasOwnProperty(o)){if(o==="userLang"&&config.userLang!==e.userLang){n=true}if(config.hasOwnProperty(o)){config[o]=e[o]}}}a.loadMap();if(n&&parseInt(app.user.uid,10)===parseInt(ajaxify.data.theirid,10)){app.alert({id:"setting-change",message:"[[user:settings-require-reload]]",type:"warning",timeout:5e3,clickfn:function(){ajaxify.refresh()}})}})}function r(){if($('[data-property="homePageRoute"]').val()==="custom"){$("#homePageCustom").show()}else{$("#homePageCustom").hide();$('[data-property="homePageCustom"]').val("")}}return n});
//# sourceMappingURL=public/src/client/account/settings.js.map