/* input-case-enforcer v1.0.1 - http://github.com/westonganger/input-case-enforcer */

(function($){
  var event = 'blur';

  $.fn.caseEnforcer = function(arg){
    if(!arg || ['uppercase','lowercase','capitalize','destroy'].indexOf(arg) === -1){
      throw("Error: Allowed values for caseEnforcer function are 'uppercase','lowercase','capitalize', or 'destroy'");
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
            input.val().replace(/(^|\s)[a-z]/g, function(f){
              return f.toUpperCase();
            })
          );
        }
      };

      input.css('text-transform', arg).data("input-case", arg).addClass('input-case-enforcer');
      input.off(event + '.input-case').on(event+'.input-case', updateCase);

      updateCase(); //init on page load
    });

    return this;
  };
}(window.jQuery || window.Zepto || window.$));
