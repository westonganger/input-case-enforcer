# input-case-enforcer
<a href="https://badge.fury.io/js/input-case-enforcer" target="_blank"><img height="21" style='border:0px;height:21px;' border='0' src="https://badge.fury.io/js/input-case-enforcer.svg" alt="NPM Version"></a>
<a href='https://www.npmjs.org/package/input-case-enforcer' target='_blank'><img height='21' style='border:0px;height:21px;' src='https://img.shields.io/npm/dt/input-case-enforcer.svg?label=NPM+Downloads' border='0' alt='NPM Downloads' /></a>
<a href='https://ko-fi.com/A5071NK' target='_blank'><img height='22' style='border:0px;height:22px;' src='https://az743702.vo.msecnd.net/cdn/kofi1.png?v=a' border='0' alt='Buy Me a Coffee' /></a> 

`input-case-enforcer` is a plugin for enforcing uppercase, lowercase, or Capitalized inputs & textareas.

Requires a DOM library such as jQuery, Zepto, or any that supports extending $.fn

# Demo

https://jsfiddle.net/t4gdquqs/1/

# Install

#### Yarn, NPM, or Bower
```
yarn add input-case-enforcer

npm install input-case-enforcer

bower install input-case-enforcer

<!-- Then include the dist files in your HTML -->
<link rel="stylesheet" type="text/css" href="input-case-enforcer/dist/input-case-enforcer.min.css" />
<style type="text/javascript" src="input-case-enforcer/dist/input-case-enforcer.min.js"></script>
```

#### Rails
```ruby
# Gemfile
source 'https://rails-assets.org' do
  gem 'rails-assets-input-case-enforcer'
end

# app/assets/javascripts/application.js
//= require input-case-enforcer

# app/assets/javascripts/application.scss
/*
 *= require input-case-enforcer
*/
```

# Usage
```javascript
$('input').caseEnforcer('uppercase');

$('input').caseEnforcer('lowercase');

// capitalize the first letter of every word
$('textarea').caseEnforcer('capitalize');

// Remove case enforcer from an input
$('input').caseEnforcer('destroy');
```

# Credits
Created by [Weston Ganger](https://github.com/westonganger)
