/* input-case-enforcer v1.0.1 - http://github.com/westonganger/input-case-enforcer */
/* Vanilla JS version */

window.input_case_enforcer_events_map = {};

var NamespacedEventHandler = {
  addEventListener: function(el, event_name, func){
    actual_event_name = event_name.split('.')[0]

    window.input_case_enforcer_events_map[event_name] = func;

    el.addEventListener(actual_event_name, window.input_case_enforcer_events_map[event_name]);
  },

  removeEventListener: function(el, event_name){
    actual_event_name = event_name.split('.')[0]

    el.removeEventListener(actual_event_name, window.input_case_enforcer_events_map[event_name]);

    delete window.input_case_enforcer_events_map[event_name];
  },
};

var InputCaseEnforcer = {
  init: function(el, arg){
    if (!arg || ['uppercase','lowercase','capitalize'].indexOf(arg) === -1) {
      throw("Error calling InputCaseEnforcer.new(el, format). Allowed formats are 'uppercase','lowercase', or 'capitalize'");
    }

    if (el.getAttribute('data-input-case')) {
      InputCaseEnforcer.destroy(el);
    }

    InputCaseEnforcer.updateCase(el);
  },

  destroy: function(el){
    //el.removeEventListener(eventName + '.input-case');
    NamespacedEventHandler.removeEventListener(el, eventName + '.input-case');

    el.style.textTransform = 'none';

    return el;
  },

  updateCase: function(el){
    var mode = el.getAttribute('data-el-case');

    if (mode === 'uppercase') {
      el.val(el.value.toUpperCase());
    } else if (mode === 'lowercase') {
      el.val(el.value.toLowerCase());
    } else if (mode === 'capitalize') {
      el.value = el.value.replace(/(^|\s)[a-z]/g, function(f){
        return f.toUpperCase();
      }):
    }

    el.style.textTransform = arg;

    el.setAttribute('input-case', arg);

    el.classList.add('input-case-enforcer');

    //el.removeEventListener(eventName + '.input-case');
    NamespacedEventHandler.removeEventListener(el, eventName + '.input-case');
    //el.addEventListener(eventName + '.input-case', updateCase);
    NamespacedEventHandler.addEventListener(el, eventName + '.input-case', updateCase);
  },
};

window.InputCaseEnforcer = InputCaseEnforcer;
