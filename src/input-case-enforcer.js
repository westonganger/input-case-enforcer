/*
 * input-case-enforcer - jQuery plugin to enforce uppercase, lowercase, or Capitalized inputs & textareas
 * @version v0.9.0
 * @link http://github.com/westonganger/input-case-enforcer
 * @license GNU GPL
 */

(function($){
  var event = 'blur';

  $.fn.caseEnforcer = function(arg){
    if(['destroy','uppercase','lowercase','capitalize'].indexOf(arg) === -1){
      console.log("input-case ArgumentError: Incorrect argument. Allowed values are 'uppercase','lowercase','capitalize', or 'destroy'");
      return false;
    }

    if(arg === 'destroy' || $(this).data('input-case')){
      this.each(function() {
        var input = $(this);
        input.off(event + '.input-case');
      });

      if(arg === 'destroy'){
        $(this).css('text-transform','none');
        return this;
      }
    }

    this.each(function(){
      var input = $(this);

      var updateCase = function(e){
        var mode = input.data('input-case');
        if(mode === 'uppercase'){
          input.val(input.val().toUpperCase());
        }else if(mode === 'lowercase'){
          input.val(input.val().toLowerCase());
        }else if(mode === 'capitalize'){
          input.val(
            input.val().replace(/(^|\s)[a-z]/g,function(f){
              return f.toUpperCase();
            })
          );
        }
      };

      input.css('text-transform', arg);
      input.data("input-case", arg);
      input.off(event + '.input-case').on(event+'.input-case', updateCase);

      updateCase(); //init on page load
    });
    return this;
  }
}(jQuery));
