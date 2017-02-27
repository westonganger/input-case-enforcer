# input-case-enforcer
<a href='https://ko-fi.com/A5071NK' target='_blank'><img height='32' style='border:0px;height:32px;' src='https://az743702.vo.msecnd.net/cdn/kofi1.png?v=a' border='0' alt='Buy Me a Coffee' /></a> 

`input-case-enforcer` is a plugin for enforcing uppercase, lowercase, or Capitalized inputs & textareas.

Requires a DOM library such as jQuery, Zepto, or any that supports extending $.fn

# Install

#### Yarn, NPM, or Bower
```
yarn add input-case-enforcer

npm install input-case-enforcer

bower install input-case-enforcer
```

#### Rails Install
```ruby
# Gemfile
source 'https://rails-assets.org' do
  gem 'rails-assets-input-case-enforcer'
end


# app/assets/javascripts/application.js
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
Created by Weston Ganger - @westonganger
