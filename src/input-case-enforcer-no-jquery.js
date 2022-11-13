/* input-case-enforcer-no-query v0.1 - */

window.inputCaseEnforcer = { // Alternative object version of the inputCaseEnforcer in vanilla Js

  element: null,
  typeArgument: '',
  optionalDestroy: '',

  q: function(incoming) { return document.querySelector(incoming); },

  init: function(incomingElement, incomingType, optionalDestroy = null) {
    this.element = this.q(incomingElement);
    this.typeArgument = incomingType;
    this.optionalDestroy = optionalDestroy;
    this.enforcementDriver(incomingType, optionalDestroy);
  },

  enforcementDriver: function(){ // An equivalent version of caseEnforcer

    if(!this.typeArgument || ['uppercase','lowercase','capitalize','destroy'].indexOf(this.typeArgument) === -1){
      throw("Error: Allowed values for caseEnforcer function are 'uppercase','lowercase','capitalize', or 'destroy'");
    }

    let checkThisAttribute = this.element.getAttribute('data-input-case');

    if(this.optionalDestroy === 'destroy' || typeof(checkThisAttribute != undefined)){
      if(this.optionalDestroy === 'destroy'){
        this.element.style.textTransform = 'none';
        return this;
      } else {
        this.resetInputToDefault();
      }
    }

    this.setupCaseEnforcer();

    return this;
  },

  resetInputToDefault : function() {
    this.element.classList.remove('input-case');
    this.element.removeEventListener('input', this.updateCase);
  },

  setupCaseEnforcer: function() {
    this.element.style.textTransform = this.typeArgument + ";";
    this.element.setAttribute('data-input-case', this.typeArgument);
    this.element.classList.add('input-case-enforcer');

    this.watchForChange(); // Watch for change on this

    this.updateCase(true, this.element); // init on page load
  },

  watchForChange: function() { // Watch for change to handle event listener
    this.element.addEventListener('input', this.updateCase);
  },

  updateCase: function(optionalOnLoad, optionalElement){ // Update the value for the specific data attribute case, takes optional parameter for onload

    let thisElement = this;

    if (optionalOnLoad === true) { thisElement = optionalElement; }

    let mode = thisElement.getAttribute('data-input-case');

    if(mode === 'uppercase'){
      thisElement.value = thisElement.value.toUpperCase();
    }else if(mode === 'lowercase'){
      thisElement.value = thisElement.value.toLowerCase();
    }else if(mode === 'capitalize'){
      thisElement.value = thisElement.value.replace(/(^|\s)[a-z]/g, function(f){ return f.toUpperCase(); });
    }
  }
};
