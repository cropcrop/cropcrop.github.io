<!-- GENERATED FROM SOURCE -->

# vjs.Component

__EXTENDS__: [vjs.CoreObject](vjs.CoreObject.md)  
__DEFINED IN__: [src/js/component.js#L35](https://github.com/videojs/video.js/blob/master/src/js/component.js#L35)  

Base UI Component class

Components are embeddable UI objects that are represented by both a
javascript object and an element in the DOM. They can be children of other
components, and can have many children themselves.

    // adding a button to the player
    var button = player.addChild('button');
    button.el(); // -> button element

    <div class="video-js">
      <div class="vjs-button">Button</div>
    </div>

Components are also event emitters.

    button.on('click', function(){
      console.log('Button Clicked!');
    });

    button.trigger('customevent');

---

## INDEX

- [METHODS](#methods)
  - [addChild](#addchild-child-options-)
  - [addClass](#addclass-classtoadd-)
  - [buildCSSClass](#buildcssclass)
  - [children](#children)
  - [contentEl](#contentel)
  - [createEl](#createel-tagname-attributes-)
  - [dimensions](#dimensions-width-height-)
  - [dispose](#dispose)
  - [el](#el)
  - [enableTouchActivity](#enabletouchactivity)
  - [getChild](#getchild-name-)
  - [getChildById](#getchildbyid-id-)
  - [hasClass](#hasclass-classtocheck-)
  - [height](#height-num-skiplisteners-)
  - [hide](#hide)
  - [id](#id)
  - [init](#init-player-options-ready-)
  - [initChildren](#initchildren)
  - [name](#name)
  - [off](#off-first-second-third-)
  - [on](#on-first-second-third-)
  - [one](#one-first-second-third-)
  - [options](#options-obj-)
  - [player](#player)
  - [ready](#ready-fn-)
  - [removeChild](#removechild-component-)
  - [removeClass](#removeclass-classtoremove-)
  - [show](#show)
  - [trigger](#trigger-event-)
  - [triggerReady](#triggerready)
  - [width](#width-num-skiplisteners-)

- [EVENTS](#events)
  - [resize](#resize-event)

---

## METHODS

### addChild( child, [options] )
> Adds a child component inside this component
> 
>     myComponent.el();
>     // -> <div class='my-component'></div>
>     myComonent.children();
>     // [empty array]
> 
>     var myButton = myComponent.addChild('MyButton');
>     // -> <div class='my-component'><div class="my-button">myButton<div></div>
>     // -> myButton === myComonent.children()[0];
> 
> Pass in options for child constructors and options for children of the child
> 
>     var myButton = myComponent.addChild('MyButton', {
>       text: 'Press Me',
>       children: {
>         buttonChildExample: {
>           buttonChildOption: true
>         }
>       }
>     });

##### PARAMETERS: 
* __child__ `String|vjs.Component` The class name or instance of a child to add
* __options__ `Object` _(OPTIONAL)_ Options, including options to be passed to children of the child.

##### RETURNS: 
* `vjs.Component` The child component (created by this process if a string was used)

_defined in_: [src/js/component.js#L362](https://github.com/videojs/video.js/blob/master/src/js/component.js#L362)

---

### addClass( classToAdd )
> Add a CSS class name to the component's element

##### PARAMETERS: 
* __classToAdd__ `String` Classname to add

##### RETURNS: 
* `vjs.Component` 

_defined in_: [src/js/component.js#L826](https://github.com/videojs/video.js/blob/master/src/js/component.js#L826)

---

### buildCSSClass()
> Allows sub components to stack CSS class names

##### RETURNS: 
* `String` The constructed class name

_defined in_: [src/js/component.js#L536](https://github.com/videojs/video.js/blob/master/src/js/component.js#L536)

---

### children()
> Get an array of all child components
> 
>     var kids = myComponent.children();

##### RETURNS: 
* `Array` The children

_defined in_: [src/js/component.js#L296](https://github.com/videojs/video.js/blob/master/src/js/component.js#L296)

---

### contentEl()
> Return the component's DOM element for embedding content.
> Will either be el_ or a new element defined in createEl.

##### RETURNS: 
* `Element` 

_defined in_: [src/js/component.js#L239](https://github.com/videojs/video.js/blob/master/src/js/component.js#L239)

---

### createEl( [tagName], [attributes] )
> Create the component's DOM element

##### PARAMETERS: 
* __tagName__ `String` _(OPTIONAL)_ Element's node type. e.g. 'div'
* __attributes__ `Object` _(OPTIONAL)_ An object of element attributes that should be set on the element

##### RETURNS: 
* `Element` 

_defined in_: [src/js/component.js#L200](https://github.com/videojs/video.js/blob/master/src/js/component.js#L200)

---

### dimensions( width, height )
> Set both width and height at the same time

##### PARAMETERS: 
* __width__ `Number|String` 
* __height__ `Number|String` 

##### RETURNS: 
* `vjs.Component` The component

_defined in_: [src/js/component.js#L938](https://github.com/videojs/video.js/blob/master/src/js/component.js#L938)

---

### dispose()
> Dispose of the component and all child components

_defined in_: [src/js/component.js#L84](https://github.com/videojs/video.js/blob/master/src/js/component.js#L84)

---

### el()
> Get the component's DOM element
> 
>     var domEl = myComponent.el();

##### RETURNS: 
* `Element` 

_defined in_: [src/js/component.js#L220](https://github.com/videojs/video.js/blob/master/src/js/component.js#L220)

---

### enableTouchActivity()
> Report user touch activity when touch events occur
> 
> User activity is used to determine when controls should show/hide. It's
> relatively simple when it comes to mouse events, because any mouse event
> should show the controls. So we capture mouse events that bubble up to the
> player and report activity when that happens.
> 
> With touch events it isn't as easy. We can't rely on touch events at the
> player level, because a tap (touchstart + touchend) on the video itself on
> mobile devices is meant to turn controls off (and on). User activity is
> checked asynchronously, so what could happen is a tap event on the video
> turns the controls off, then the touchend event bubbles up to the player,
> which if it reported user activity, would turn the controls right back on.
> (We also don't want to completely block touch events from bubbling up)
> 
> Also a touchmove, touch+hold, and anything other than a tap is not supposed
> to turn the controls back on on a mobile device.
> 
> Here we're setting the default component behavior to report user activity
> whenever touch events happen, and this can be turned off by components that
> want touch events to act differently.

_defined in_: [src/js/component.js#L1120](https://github.com/videojs/video.js/blob/master/src/js/component.js#L1120)

---

### getChild( name )
> Returns a child component with the provided name

##### PARAMETERS: 
* __name__ 

##### RETURNS: 
* `vjs.Component` 

_defined in_: [src/js/component.js#L330](https://github.com/videojs/video.js/blob/master/src/js/component.js#L330)

---

### getChildById( id )
> Returns a child component with the provided ID

##### PARAMETERS: 
* __id__ 

##### RETURNS: 
* `vjs.Component` 

_defined in_: [src/js/component.js#L313](https://github.com/videojs/video.js/blob/master/src/js/component.js#L313)

---

### hasClass( classToCheck )
> Check if a component's element has a CSS class name

##### PARAMETERS: 
* __classToCheck__ `String` Classname to check

##### RETURNS: 
* `vjs.Component` 

_defined in_: [src/js/component.js#L816](https://github.com/videojs/video.js/blob/master/src/js/component.js#L816)

---

### height( [num], [skipListeners] )
> Get or set the height of the component (CSS values)
> 
> Setting the video tag dimension values only works with values in pixels.
> Percent values will not work.
> Some percents can be used, but width()/height() will return the number + %,
> not the actual computed width/height.

##### PARAMETERS: 
* __num__ `Number|String` _(OPTIONAL)_ New component height
* __skipListeners__ `Boolean` _(OPTIONAL)_ Skip the resize event trigger

##### RETURNS: 
* `vjs.Component` This component, when setting the height
* `Number|String` The height, when getting

_defined in_: [src/js/component.js#L927](https://github.com/videojs/video.js/blob/master/src/js/component.js#L927)

---

### hide()
> Hide the component element if currently showing

##### RETURNS: 
* `vjs.Component` 

_defined in_: [src/js/component.js#L857](https://github.com/videojs/video.js/blob/master/src/js/component.js#L857)

---

### id()
> Get the component's ID
> 
>     var id = myComponent.id();

##### RETURNS: 
* `String` 

_defined in_: [src/js/component.js#L258](https://github.com/videojs/video.js/blob/master/src/js/component.js#L258)

---

### init( player, options, ready )
> the constructor function for the class

##### PARAMETERS: 
* __player__ 
* __options__ 
* __ready__ 

_defined in_: [src/js/component.js#L41](https://github.com/videojs/video.js/blob/master/src/js/component.js#L41)

---

### initChildren()
> Add and initialize default child components from options
> 
>     // when an instance of MyComponent is created, all children in options
>     // will be added to the instance by their name strings and options
>     MyComponent.prototype.options_.children = {
>       myChildComponent: {
>         myChildOption: true
>       }
>     }
> 
>     // Or when creating the component
>     var myComp = new MyComponent(player, {
>       children: {
>         myChildComponent: {
>           myChildOption: true
>         }
>       }
>     });
> 
> The children option can also be an Array of child names or
> child options objects (that also include a 'name' key).
> 
>     var myComp = new MyComponent(player, {
>       children: [
>         'button',
>         {
>           name: 'button',
>           someOtherOption: true
>         }
>       ]
>     });

_defined in_: [src/js/component.js#L481](https://github.com/videojs/video.js/blob/master/src/js/component.js#L481)

---

### name()
> Get the component's name. The name is often used to reference the component.
> 
>     var name = myComponent.name();

##### RETURNS: 
* `String` 

_defined in_: [src/js/component.js#L277](https://github.com/videojs/video.js/blob/master/src/js/component.js#L277)

---

### off( [first], [second], [third] )
> Remove an event listener from this component's element
> 
>     myComponent.off('eventType', myFunc);
> 
> If myFunc is excluded, ALL listeners for the event type will be removed.
> If eventType is excluded, ALL listeners will be removed from the component.
> 
> Alternatively you can use `off` to remove listeners that were added to other
> elements or components using `myComponent.on(otherComponent...`.
> In this case both the event type and listener function are REQUIRED.
> 
>     myComponent.off(otherElement, 'eventType', myFunc);
>     myComponent.off(otherComponent, 'eventType', myFunc);

##### PARAMETERS: 
* __first__ `String|vjs.Component` _(OPTIONAL)_ The event type or other component
* __second__ `Function|String` _(OPTIONAL)_ The listener function or event type
* __third__ `Function` _(OPTIONAL)_ The listener for other component

##### RETURNS: 
* `vjs.Component` 

_defined in_: [src/js/component.js#L646](https://github.com/videojs/video.js/blob/master/src/js/component.js#L646)

---

### on( first, second, third )
> Add an event listener to this component's element
> 
>     var myFunc = function(){
>       var myComponent = this;
>       // Do something when the event is fired
>     };
> 
>     myComponent.on('eventType', myFunc);
> 
> The context of myFunc will be myComponent unless previously bound.
> 
> Alternatively, you can add a listener to another element or component.
> 
>     myComponent.on(otherElement, 'eventName', myFunc);
>     myComponent.on(otherComponent, 'eventName', myFunc);
> 
> The benefit of using this over `vjs.on(otherElement, 'eventName', myFunc)`
> and `otherComponent.on('eventName', myFunc)` is that this way the listeners
> will be automatically cleaned up when either component is diposed.
> It will also bind myComponent as the context of myFunc.
> 
> **NOTE**: When using this on elements in the page other than window
> and document (both permanent), if you remove the element from the DOM
> you need to call `vjs.trigger(el, 'dispose')` on it to clean up
> references to it and allow the browser to garbage collect it.

##### PARAMETERS: 
* __first__ `String|vjs.Component` The event type or other component
* __second__ `Function|String` The event handler or event type
* __third__ `Function` The event handler

##### RETURNS: 
* `vjs.Component` self

_defined in_: [src/js/component.js#L577](https://github.com/videojs/video.js/blob/master/src/js/component.js#L577)

---

### one( first, second, [third] )
> Add an event listener to be triggered only once and then removed
> 
>     myComponent.one('eventName', myFunc);
> 
> Alternatively you can add a listener to another element or component
> that will be triggered only once.
> 
>     myComponent.one(otherElement, 'eventName', myFunc);
>     myComponent.one(otherComponent, 'eventName', myFunc);

##### PARAMETERS: 
* __first__ `String|vjs.Component` The event type or other component
* __second__ `Function|String` The listener function or event type
* __third__ `Function` _(OPTIONAL)_ The listener function for other component

##### RETURNS: 
* `vjs.Component` 

_defined in_: [src/js/component.js#L691](https://github.com/videojs/video.js/blob/master/src/js/component.js#L691)

---

### options( obj )
> Deep merge of options objects
> 
> Whenever a property is an object on both options objects
> the two properties will be merged using vjs.obj.deepMerge.
> 
> This is used for merging options for child components. We
> want it to be easy to override individual options on a child
> component without having to rewrite all the other default options.
> 
>     Parent.prototype.options_ = {
>       children: {
>         'childOne': { 'foo': 'bar', 'asdf': 'fdsa' },
>         'childTwo': {},
>         'childThree': {}
>       }
>     }
>     newOptions = {
>       children: {
>         'childOne': { 'foo': 'baz', 'abc': '123' }
>         'childTwo': null,
>         'childFour': {}
>       }
>     }
> 
>     this.options(newOptions);
> 
> RESULT
> 
>     {
>       children: {
>         'childOne': { 'foo': 'baz', 'asdf': 'fdsa', 'abc': '123' },
>         'childTwo': null, // Disabled. Won't be initialized.
>         'childThree': {},
>         'childFour': {}
>       }
>     }

##### PARAMETERS: 
* __obj__ `Object` Object of new option values

##### RETURNS: 
* `Object` A NEW object of this.options_ and obj merged

_defined in_: [src/js/component.js#L179](https://github.com/videojs/video.js/blob/master/src/js/component.js#L179)

---

### player()
> Return the component's player

##### RETURNS: 
* `vjs.Player` 

_defined in_: [src/js/component.js#L126](https://github.com/videojs/video.js/blob/master/src/js/component.js#L126)

---

### ready( fn )
> Bind a listener to the component's ready state
> 
> Different from event listeners in that if the ready event has already happend
> it will trigger the function immediately.

##### PARAMETERS: 
* __fn__ `Function` Ready listener

##### RETURNS: 
* `vjs.Component` 

_defined in_: [src/js/component.js#L769](https://github.com/videojs/video.js/blob/master/src/js/component.js#L769)

---

### removeChild( component )
> Remove a child component from this component's list of children, and the
> child component's element from this component's element

##### PARAMETERS: 
* __component__ `vjs.Component` Component to remove

_defined in_: [src/js/component.js#L420](https://github.com/videojs/video.js/blob/master/src/js/component.js#L420)

---

### removeClass( classToRemove )
> Remove a CSS class name from the component's element

##### PARAMETERS: 
* __classToRemove__ `String` Classname to remove

##### RETURNS: 
* `vjs.Component` 

_defined in_: [src/js/component.js#L837](https://github.com/videojs/video.js/blob/master/src/js/component.js#L837)

---

### show()
> Show the component element if hidden

##### RETURNS: 
* `vjs.Component` 

_defined in_: [src/js/component.js#L847](https://github.com/videojs/video.js/blob/master/src/js/component.js#L847)

---

### trigger( event )
> Trigger an event on an element
> 
>     myComponent.trigger('eventName');
>     myComponent.trigger({'type':'eventName'});

##### PARAMETERS: 
* __event__ `Event|Object|String` A string (the type) or an event object with a type attribute

##### RETURNS: 
* `vjs.Component` self

_defined in_: [src/js/component.js#L724](https://github.com/videojs/video.js/blob/master/src/js/component.js#L724)

---

### triggerReady()
> Trigger the ready listeners

##### RETURNS: 
* `vjs.Component` 

_defined in_: [src/js/component.js#L788](https://github.com/videojs/video.js/blob/master/src/js/component.js#L788)

---

### width( [num], skipListeners )
> Set or get the width of the component (CSS values)
> 
> Setting the video tag dimension values only works with values in pixels.
> Percent values will not work.
> Some percents can be used, but width()/height() will return the number + %,
> not the actual computed width/height.

##### PARAMETERS: 
* __num__ `Number|String` _(OPTIONAL)_ Optional width number
* __skipListeners__ `Boolean` Skip the 'resize' event trigger

##### RETURNS: 
* `vjs.Component` This component, when setting the width
* `Number|String` The width, when getting

_defined in_: [src/js/component.js#L910](https://github.com/videojs/video.js/blob/master/src/js/component.js#L910)

---

## EVENTS

### resize `EVENT`
> Fired when the width and/or height of the component changes

_defined in_: [src/js/component.js#L1020](https://github.com/videojs/video.js/blob/master/src/js/component.js#L1020)

---

