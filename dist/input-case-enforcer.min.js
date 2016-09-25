/*
 * input-case-enforcer - jQuery plugin to enforce uppercase, lowercase, or Capitalized inputs & textareas
 * @version v0.9.0
 * @link http://github.com/westonganger/input-case-enforcer
 * @license GNU GPL
 */
!function(e){var a="blur";e.fn.caseEnforcer=function(t){return-1===["destroy","uppercase","lowercase","capitalize"].indexOf(t)?(console.log("input-case ArgumentError: Incorrect argument. Allowed values are 'uppercase','lowercase','capitalize', or 'destroy'"),!1):"destroy"!==t&&!e(this).data("input-case")||(this.each(function(){var t=e(this);t.off(a+".input-case")}),"destroy"!==t)?(this.each(function(){var r=e(this),s=function(e){var a=r.data("input-case");"uppercase"===a?r.val(r.val().toUpperCase()):"lowercase"===a?r.val(r.val().toLowerCase()):"capitalize"===a&&r.val(r.val().replace(/(^|\s)[a-z]/g,function(e){return e.toUpperCase()}))};r.css("text-transform",t),r.data("input-case",t),r.off(a+".input-case").on(a+".input-case",s),s()}),this):(e(this).css("text-transform","none"),this)}}(jQuery);