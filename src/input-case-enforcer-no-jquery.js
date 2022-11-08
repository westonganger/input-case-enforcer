/* input-case-enforcer-no-query v0.1 - */

window.inputCaseEnforcer = { // Alternative object version of the inputCaseEnforcer in vanilla Js

  element: null,

  q: function(incoming) { return document.querySelector(incoming); },

  init: function(incomingElement, incomingType, optionalDestroy = null) {
    this.element = this.q(incomingElement);
    this.enforcementDriver(incomingType, optionalDestroy);
  },

  enforcementDriver: function(typeArgument, optionalDestroy){ // An equivalent version of caseEnforcer

    if(!typeArgument || ['uppercase','lowercase','capitalize','destroy'].indexOf(typeArgument) === -1){
      throw("Error: Allowed values for caseEnforcer function are 'uppercase','lowercase','capitalize', or 'destroy'");
    }

    if(optionalDestroy === 'destroy' || typeof(this.element.getAttribute('data-input-case') != undefined)){
      this.element.classList.remove('input-case');

      if(optionalDestroy === 'destroy'){
        this.element.style.textTransform = "none";
        return this;
      }
    }

    this.element.style.textTransform = typeArgument + ";";
    this.element.setAttribute('data-input-case', typeArgument);
    this.element.classList.add('input-case-enforcer');

    this.watchForChange(); // Watch for change on this

    this.updateCase(true, this.element); // init on page load

    return this;
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