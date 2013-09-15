miniclass.js
=========

A tiny JavaScript class library.

### Usage ###
=========

Simply include the file `miniclass.js` into your html.

 ```javascript
// Use subclass method of mini.Class and its subclasses.
var SubClass = mini.Class.subclass({
    doSomething: function() {
        return "foobar";
    }
});

// If specified the initialize function is call on construction.
SubSubClass = SubClass.subclass({
    initialize: function() {
        this.doSomething();
    }
});

new SubSubClass(); // calls initialize

// Inject new behaviour into defined classes.
SubClass.inject({
    doEvenMore: function() {
        return "blub";
    }
});
```

### MIT License ###
=========

Copyright (c) 2013 Stefan Lehmann (Onsetsu)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.