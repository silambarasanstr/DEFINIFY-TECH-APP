import { title } from "framer-motion/client";

export const courseData = {
  html: [
    {
      title: "HTML",
      definition:
        "HyperText Markup Language is the standard markup language for documents designed to be displayed in a web browser.",
    },
    {
      title: "Element",
      definition: [
        `An HTML element is a type of HTML document component, one of several types of HTML nodes.
         An HTML element can be an HTML tag, a comment, a doctype, or a processing instruction. 
         An HTML element is defined by a start tag, some content, and an end tag. 
         The start tag and end tag are also called opening and closing tags, respectively. 
         The content can be text, other HTML elements, or a combination of both.`,
      ],
    },
    {
      title: "Attribute",
      definition: [
        "An HTML attribute is a modifier of an HTML element type. It provides additional information about the element.",
        'Attributes are always specified in the start tag (or opening tag), and usually come in name/value pairs like: name="value".',
      ],
    },
    {
      title: "Semantic HTML",
      definition: [
        "Semantic HTML is HTML that conveys meaning to the user and not just appearance.",
        "Semantic HTML elements clearly describe their meaning in a human- and machine-readable way.",
        "Examples of semantic HTML elements include <header>, <footer>, <article>, and <section>.",
      ],
    },
    {
      title: "Block vs Inline Elements",
      definition: [
        "Block-level elements start on a new line and take up the full width available. Examples include <div>, <p>, and <h1>.",
        "Inline elements do not start on a new line and only take up as much width as necessary. Examples include <span>, <a>, and <strong>.",
      ],
    },
    {
      title: "HTML5",
      definition:
        "HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and current version of the HTML standard. It was published in October 2014 and includes new features such as support for multimedia, improved support for web applications, and enhanced semantic elements.",
    },

    {
      title: "HTML Forms",
      definition:
        "HTML forms are used to collect user input. They consist (அடங்கியிருத்தல்) of form elements such as text fields, checkboxes, radio buttons, and submit buttons. Forms can be submitted to a server for processing or handled client-side using JavaScript.",
    },

    {
      title: "HTML5 Semantic Elements",
      definition: [
        "Semantic elements are those that clearly describe their meaning to both the browser and the developer. Examples include <header>, <footer>, <article>, <section>, and <nav>.",
        "Using semantic elements improves accessibility, SEO, and code readability.",
      ],
    },

    {
      title: "HTML5 Multimedia Elements",
      definition: [
        "HTML5 introduced new multimedia elements such as <audio> and <video> for embedding audio and video content directly into web pages without the need for third-party plugins.",
        "These elements provide built-in controls for play, pause, and volume, making it easier to manage multimedia content on the web.",
      ],
    },

    {
      title: "HTML5 APIs",
      definition: [
        "HTML5 includes several APIs (Application Programming Interfaces) that allow developers to create more interactive and dynamic web applications. Examples include the Geolocation API, Web Storage API, and Canvas API.",
        "These APIs enable developers to access device features, store data locally, and create graphics and animations directly in the browser.",
      ],
    },

    {
      title: "Meta tags",
      definition: [
        "Meta tags are used to provide metadata about an HTML document. They are placed in the <head> section of the document and can include information such as the page description, keywords, author, and viewport settings.",
        "Meta tags can help improve SEO (Search Engine Optimization) and ensure that web pages are displayed correctly on different devices.",
      ],
    },
    {
      title: "DOCTYPE",
      definition:
        "DOCTYPE is a declaration that defines the document type and version of HTML being used. It is placed at the very beginning of an HTML document and helps browsers to render the page correctly.",
    },
    {
      title: "HTML Entities",
      definition: [
        "HTML entities are used to represent reserved characters in HTML. For example, the less-than sign (<) is represented as &lt; and the greater-than sign (>) is represented as &gt;.",
        "Using HTML entities ensures that special characters are displayed correctly in the browser and do not interfere with the structure of the HTML document.",
      ],
    },
    {
      title: "Link tag",
      definition:
        "The <link> tag is used to link external resources such as stylesheets, icons, and prefetching resources to an HTML document. It is placed in the <head> section of the document and can include attributes such as rel, href, and type.",
    },
    {
      title: "HTML Comments",
      definition:
        "HTML comments are used to add notes or explanations within the HTML code. They are not displayed in the browser and are enclosed within <!-- and -->. Comments can be helpful for developers to understand the code and provide context for future maintenance.",
    },
    {
      title: "Classes and IDs",
      definition: [
        "Classes and IDs are used to identify and style HTML elements. An ID is a unique identifier for an element, while a class can be shared among multiple elements. IDs are defined using the id attribute, while classes are defined using the class attribute.",
        "IDs are typically used for JavaScript manipulation and styling specific elements, while classes are used for styling groups of elements with similar characteristics.",
      ],
    },

    {
      title: "Difference between HTML and HTML5",
      definition: [
        "HTML is the standard markup language used to create web pages, while HTML5 is the latest version with new features and improvements.",
        "HTML5 supports multimedia elements like <audio> and <video> without plugins, whereas older HTML required external tools like Flash.",
        "HTML5 also introduces new semantic tags like <article>, <section>, and <nav>.",
      ],
    },

    {
      title: "Local Storage vs Session Storage",
      definition: [
        "Both are part of Web Storage API used to store data in the browser.",
        "Local Storage stores data with no expiration time (persists even after browser is closed).",
        "Session Storage stores data only for the duration of the page session (cleared when tab is closed).",
      ],
    },

    {
      title: "Difference between <div> and <span>",
      definition: [
        "<div> is a block-level element and takes full width.",
        "<span> is an inline element and takes only required width.",
        "<div> is used for layout, while <span> is used for styling small parts of text.",
      ],
    },

    {
      title: "Iframe",
      definition: [
        "The <iframe> tag is used to embed another HTML page within the current page.",
        "It is commonly used to embed videos, maps, and external content.",
      ],
    },

    {
      title: "Alt attribute in image",
      definition: [
        "The alt attribute provides alternative text for an image.",
        "It is useful for accessibility (screen readers) and SEO.",
        "If the image fails to load, the alt text will be displayed.",
      ],
    },

    {
      title: "Difference between id and class",
      definition: [
        "id is unique and used for one element only.",
        "class can be used for multiple elements.",
        "id has higher specificity than class in CSS.",
      ],
    },

    {
      title: "Data Attributes",
      definition: [
        "Custom attributes used to store extra information in HTML elements.",
        "They start with 'data-' (e.g., data-id, data-name).",
        "Accessible using JavaScript via dataset property.",
      ],
    },

    {
      title: "Viewport Meta Tag",
      definition: [
        "Used to control layout on mobile browsers.",
        "Example: <meta name='viewport' content='width=device-width, initial-scale=1.0'>",
        "Helps in responsive design.",
      ],
    },

    {
      title: "Accessibility (a11y)",
      definition: [
        "Accessibility ensures websites are usable by people with disabilities.",
        "Includes using semantic HTML, alt text, labels, and proper structure.",
        "Improves SEO and user experience.",
      ],
    },

    {
      title: "Difference between GET and POST",
      definition: [
        "GET sends data in URL, POST sends data in request body.",
        "GET is less secure compared to POST.",
        "POST is used for sensitive data like passwords.",
      ],
    },

    {
      title: "Required attribute",
      definition: [
        "Used in form inputs to make a field mandatory.",
        "Browser prevents form submission if the field is empty.",
      ],
    },

    {
      title: "Placeholder attribute",
      definition: [
        "Provides a hint inside input fields.",
        "Disappears when the user starts typing.",
      ],
    },

    {
      title: "Autocomplete attribute",
      definition: [
        "Used to enable or disable autofill feature in forms.",
        "Example: autocomplete='on' or 'off'.",
      ],
    },

    {
      title: "Difference between <strong> and <b>",
      definition: [
        "<strong> has semantic importance (important text).",
        "<b> is only for bold styling without meaning.",
      ],
    },

    {
      title: "Difference between <em> and <i>",
      definition: [
        "<em> adds emphasis (semantic meaning).",
        "<i> is just italic styling.",
      ],
    },

    {
      title: "Lazy Loading",
      definition: [
        "Technique to load images only when they are visible on screen.",
        "Improves performance and page speed.",
        "Example: <img src='image.jpg' loading='lazy' />",
      ],
    },

    {
      title: "Favicon",
      definition: [
        "Small icon displayed in browser tab.",
        "Added using <link rel='icon' href='favicon.ico'>",
      ],
    },

    {
      title: "Canvas vs SVG",
      definition: [
        "Canvas is pixel-based and used for dynamic graphics.",
        "SVG is vector-based and scalable without losing quality.",
        "Canvas is better for games, SVG for UI graphics.",
      ],
    },

    {
      title: "Drag and Drop API",
      definition: [
        "Allows elements to be draggable and droppable.",
        "Uses attributes like draggable='true'.",
        "Handled with JavaScript events like dragstart, dragover, drop.",
      ],
    },

    {
      title: "Progressive Enhancement",
      definition: [
        "Building a basic version first, then adding advanced features.",
        "Ensures compatibility across all browsers.",
      ],
    },
  ],
  css: [
    {
      title: "CSS",
      definition:
        "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language.",
    },
    {
      title: "Selector",
      definition: [
        "A CSS selector is a pattern used to select the element(s) you want to style. It can be based on element type, class, ID, attribute, or a combination of these.",
        "Examples of CSS selectors include element selectors (e.g., p), class selectors (e.g., .my-class), ID selectors (e.g., #my-id), and attribute selectors (e.g., [type='text']).",
      ],
    },

    {
      title: "Box Model",
      definition: [
        "The box model is a model used to style HTML elements. It includes the content, padding, border, and margin of an element.",
        "It defines the layout and spacing of elements.",
      ],
    },

    {
      title: "Display Property",
      definition: [
        "The display property specifies how an element is displayed on the page (e.g., block, inline, inline-block, flex, grid).",
        "The display property is essential for controlling the layout and visibility of elements on a web page.",
      ],
    },
    {
      title: "Flexbox",
      definition: [
        "Flexbox is a one-dimensional layout system used to arrange elements in a row or column.",
        "It provides an efficient way to align, distribute space, and control layout even  when their size is unknown and/or dynamic.",
        "Flexbox is commonly used for building responsive layouts and aligning elements easily.",
      ],
    },
    {
      title: "Grid",
      definition: [
        "CSS Grid is a two-dimensional layout system used to create layouts with rows and columns.",
        "It allows developers to build complex and responsive grid-based designs with ease.",
        "CSS Grid provides powerful control over the placement and alignment of elements within a grid container.",
      ],
    },
    {
      title: "Position",
      definition:
        "The position property specifies how an element is positioned (static, relative, absolute, fixed, sticky).",
    },
    {
      title: "Padding vs Margin",
      definition: [
        "Padding is the space between the content of an element and its border, while margin is the space outside the border of an element.",
        "Padding adds space inside an element, while margin adds space outside an element.",
        "Padding can affect the size of an element, while margin does not affect the size of an element.",
      ],
    },

    {
      title: "Relative vs Absolute Units",
      definition: [
        "Relative units (such as em, rem, and %) are based on the size of the parent element or the root element, while absolute units (such as px, cm, and in) are fixed and do not change based on the context.",
        "Relative units allow for more flexible and responsive designs, while absolute units provide precise control over the size of elements.",
      ],
    },

    {
      title: "Absolute Positioning",
      definition: [
        "Absolute positioning is a CSS technique that allows an element to be positioned relative to its nearest positioned ancestor. The element is removed from the normal document flow and can be placed at specific coordinates.",
        "Absolute positioning is useful for creating overlays, popups, and other elements that need to be positioned precisely on the page.",
      ],
    },
    {
      title: "Relative Positioning",
      definition: [
        "Relative positioning is a CSS technique that allows an element to be positioned relative to its normal position in the document flow. The element can be moved using the top, right, bottom, and left properties.",
        "Relative positioning is useful for making small adjustments to the position of an element without affecting the layout of other elements on the page.",
      ],
    },
    {
      title: "Fixed Positioning",
      definition: [
        "Fixed positioning is a CSS technique that allows an element to be positioned relative to the viewport. The element is removed from the normal document flow and remains in a fixed position even when the page is scrolled.",
        "Fixed positioning is useful for creating sticky headers, footers, and other elements that need to remain visible on the page at all times.",
      ],
    },
    {
      title: "Sticky Positioning",
      definition: [
        "Sticky positioning is a CSS technique that allows an element to be positioned based on the user's scroll position. The element toggles between relative and fixed positioning depending on the scroll position.",
        "Sticky positioning is useful for creating elements that stick to the top of the page when scrolling down and return to their normal position when scrolling back up.",
      ],
    },
    {
      title: "Z-Index",
      definition: [
        "Z-index controls the vertical stacking order of positioned elements.",
        "Elements with a higher z-index are displayed on top of elements with a lower z-index.",
        "Z-index can be used to create overlapping or layered content.",
      ],
    },
    {
      title: "CSS Specificity",
      definition:
        "CSS Specificity determines which style rule is applied when multiple rules target the same element. It follows a priority system based on selector types.",
    },
    {
      title: "Specificity Order",
      definition: [
        "Inline styles (style='') → Highest priority",
        "ID selectors (#id)",
        "Class, attribute, pseudo-class (.class, [type='text'], :hover)",
        "Element and pseudo-elements (div, p, ::before) → Lowest priority",
      ],
    },
    {
      title: "Specificity Value",

      definition: [
        "Inline → 1-0-0-0",
        "ID → 0-1-0-0",
        "Class → 0-0-1-0",
        "Element → 0-0-0-1",
      ],
    },
    {
      title: "Responsive Design",
      definition:
        "Responsive design ensures that web pages look good on all devices using media queries and flexible layouts.",
    },
    {
      title: "Media Queries",
      definition: [
        "Media queries are a CSS technique used to apply different styles based on device characteristics such as screen size, width, height, or orientation.",
        "They are essential for building responsive designs that adapt to different devices.",
        "Media queries use the @media rule with conditions like min-width, max-width, and orientation.",
      ],
    },
    {
      title: "Pseudo Classes",
      definition:
        "Pseudo-classes define a special state of an element (e.g., :hover, :active, :focus).",
    },
    {
      title: "Pseudo Elements",
      definition:
        "Pseudo-elements style specific parts of an element (e.g., ::before, ::after).",
    },
    {
      title: "Overflow",
      definition: [
        " It can be set to values such as visible, hidden, scroll, and auto.",
        "The overflow property is useful for managing content that may not fit within a container and can help prevent layout issues.",
      ],
    },
    {
      title: "Opacity",
      definition: [
        "that controls the transparency of an element. It can be set to a value between 0 (completely transparent) and 1 (completely opaque).",
      ],
    },
    {
      title: "display: none vs visibility: hidden",
      definition: [
        "display: none completely removes the element from the document flow, meaning it will not take up any space on the page and will not be visible to users or assistive technologies.",
        "visibility: hidden hides the element from view but still takes up space in the document flow. The element will not be visible to users, but it will still be accessible to assistive technologies.",
      ],
    },
    {
      title: "Box Shadow",
      definition: [
        "Box shadow creates a shadow around an element. It can be used to add depth and elevation to elements on a web page.",
      ],
    },
  ],
  javascript: [
    {
      title: "JavaScript",
      definition: [
        "JavaScript is a lightweight, high-level, interpreted programming language primarily used to create interactive effects within web browsers.",
        "JavaScript is a dynamic programming language.",
        "JavaScript is a single-threaded language.",
        "JavaScript has three core components: ECMAScript (the language specification), DOM (Document Object Model), and BOM (Browser Object Model).",
      ],
    },
    {
      title: "Class",
      definition: [
        "A class is a blueprint for creating objects. It defines properties (data) and methods (functions) that the objects will have.",
        "Classes were introduced in ES6 as a cleaner and more readable syntax for working with objects and prototypes.",
        "Creating a class → class Person {}",
        "Constructor method → constructor() is used to initialize object properties",
        "Creating an object (instance) → const obj = new ClassName()",
        "Adding methods → methods are defined inside the class",
        "Using 'this' keyword → refers to the current instance of the class",
        "Class inheritance → using 'extends' to inherit from another class",
        "Calling parent constructor → using super()",
        "Method overriding → child class can override parent methods",
        "Static methods → methods that belong to the class, not instances",
        "Getters and setters → get and set keywords for controlled access",
        "Encapsulation → hiding internal details using private fields (#)",
        "Classes are syntactic sugar over JavaScript prototypes",
      ],
    },
    {
      title: "OOP Concepts",
      definition: [
        "Encapsulation → bundling data and methods together inside a class and restricting direct access to some details.",
        "Encapsulation helps in data hiding and protecting object integrity using private fields (#) or controlled access (get/set).",
        "Polymorphism → ability of a method to behave differently based on the object or context.",
        "Polymorphism can be achieved through method overriding or method overloading (JS mostly uses overriding).",
        "Abstraction → hiding complex implementation details and showing only the necessary features.",
        "Abstraction helps in reducing complexity and improving code maintainability.",
        "Encapsulation example → using private fields and getters/setters",
        "Polymorphism example → same method name with different behavior in child class",
        "Abstraction example → exposing only essential methods and hiding internal logic",
      ],
    },
    {
      title: "Object",
      definition: [
        "An object is a collection of properties, where each property consists of a key-value pair. Objects are used to store and organize data, and they can hold various data types such as strings, numbers, arrays, and even other objects.",
        "Objects can be created using the Object constructor (e.g., const user = new Object()) or using object literals ({}).",
        "Accessing object properties (dot notation and bracket notation).",
        "Adding and modifying properties in an object.",
        "Deleting properties using the delete keyword.",
        "Object Methods → Functions defined inside objects.",
        "Object Prototypes → Shared properties and methods between objects.",
        "Object Inheritance → Objects can inherit properties and methods from other objects.",
        "Object Composition → Combining multiple objects into one.",
        "Object Equality → Objects are compared by reference, not by value.",
        "Looping over object properties using for...in or Object methods.",
        "Checking property existence using 'in' operator or hasOwnProperty().",
        "Object Destructuring → Extracting values from objects into variables.",
        "Object Spread Operator → Copying and merging objects (...).",
        "Object Rest Operator → Collecting remaining properties into a new object.",
      ],
    },

    {
      title: "Array",
      definition: [
        "An array is a data structure used to store multiple values in a single variable. These values can be of any data type, such as numbers, strings, objects, or even other arrays.",
        "Arrays help manage and manipulate groups of data efficiently",
        "Arrays are ordered and indexed collections, where each element is accessed using its index (starting from 0).",
        "Arrays can be created using array literals (e.g., const arr = []) or using the Array constructor (e.g., const arr = new Array()).",
        "Arrays in JavaScript are dynamic in size (they are not fixed).",
        "Accessing array elements",
        "Adding and removing elements",
        "Updating array elements",
        "Array methods → built-in functions like push, pop, map, filter, reduce",
        "Array iteration → looping using for, forEach, map",
        "Array destructuring",
        "Spread operator with arrays",
        "Rest operator with arrays",
        "Searching in arrays → includes, indexOf, find",
        "Sorting and reversing arrays",
        "Array length property",
        "Interview One-Liner",
        "Encapsulation → data hiding",
        "Polymorphism → same method, different behavior",
        "Abstraction → hide complexity",
      ],
    },

    {
      title: "Function",
      definition: [
        "A function is a reusable block of code designed to perform a specific task. It helps in organizing code, improving readability, and avoiding repetition.",
        "Functions can take inputs (parameters) and return an output (return value).",
        "Functions can be created using function declarations, function expressions, or arrow functions.",
        "Function declaration → function greet() {}",
        "Function expression → const greet = function() {}",
        "Arrow function → const greet = () => {}",
        "Parameters and arguments",
        "Return statement",
        "Default parameters",
        "Rest parameters",
        "Callback functions → passing a function as an argument",
        "Higher-order functions → functions that take or return other functions",
        "Closures → functions remembering their outer scope",
        "Immediately Invoked Function Expression (IIFE)",
        "Pure and impure functions",
      ],
    },

    {
      title: "String",
      definition: [
        "A string is a sequence of characters used to represent text. It can include letters, numbers, symbols, and spaces.",
        "Strings are immutable in JavaScript, meaning their values cannot be changed directly.",
        "Strings can be created using single quotes (' '), double quotes (\" \"), or template literals (` `).",
        "Accessing string characters using index",
        "String length property",
        "Common string methods → toUpperCase, toLowerCase, trim",
        "Searching in strings → includes, indexOf, startsWith, endsWith",
        "Extracting parts of a string → slice, substring",
        "Replacing content → replace, replaceAll",
        "Template literals → string interpolation using `${}`",
        "String concatenation → using + operator or template literals",
        "Splitting and joining strings → split, join",
        "Escape characters in strings",
        "Comparing strings",
      ],
    },

    {
      title: "Closure",
      definition:
        "A closure gives you access to an outer function's scope from an inner function. A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).",
    },

    {
      title: "Asynchronous JavaScript",
      definition:
        "Asynchronous JavaScript is a technique that allows JavaScript code to execute in the background without blocking the main thread of execution.",
    },
    {
      title: "Event Loop",
      definition: [
        "The event loop is a mechanism that handles asynchronous operations in JavaScript.",
        "It allows JavaScript to perform non-blocking operations by offloading tasks to the browser or Node.js environment and executing them when they are ready.",
        "The event loop continuously checks the call stack and the task queue, executing tasks from the queue when the call stack is empty.",
        "The event loop is responsible for handling callbacks, timers, and other asynchronous operations in JavaScript.",
      ],
    },
    {
      title: "Promise",
      definition: [
        "A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.",
        "A Promise has three states → pending, fulfilled, and rejected.",
        "Promises are used to handle asynchronous operations like API calls, file reading, or timers.",
        "Creating a Promise → new Promise((resolve, reject) => {})",
        "Resolving a Promise → resolve(value)",
        "Rejecting a Promise → reject(error)",
        "Handling success → .then()",
        "Handling errors → .catch()",
        "Finally block → .finally() runs regardless of success or failure",
        "Promise chaining → multiple .then() calls in sequence",
        "Async/Await → cleaner syntax to work with Promises",
        "Error handling with try...catch in async/await",
        "Promise.all → runs multiple promises in parallel (fails if one fails)",
        "Promise.allSettled → waits for all promises (success + failure)",
        "Promise.race → returns the first completed promise",
        "Promise.any → returns the first fulfilled promise",
      ],
    },
    {
      title: "Async/Await",
      definition: [
        "Async/Await is a syntax that allows you to write asynchronous code in a more readable and maintainable way.",
        "Async functions return a Promise, and the await keyword can be used to wait for the resolution of a Promise before proceeding with the execution of the code.",
        "Async/Await makes it easier to handle asynchronous operations and can help avoid callback hell.",
      ],
    },
    {
      title: "Generator",
      definition:
        "A generator is a special kind of function that can be paused and resumed.",
    },
    {
      title: "Iterator",
      definition: [
        "An iterator is an object that allows you to iterate over a collection of values.",
        "Iterators are used to iterate over collections, such as arrays, objects, or strings, and they provide a way to access each element of the collection one at a time.",
        "Iterators have a next() method that returns an object with two properties: value (the current element) and done (a boolean indicating whether the iteration is complete),",
      ],
    },
    {
      title: "Generator",
      definition:
        "A generator is a special kind of function that can be paused and resumed.",
    },

    {
      title: "Event Delegation",
      definition: [
        "Event delegation is a technique that allows you to handle events on a parent element instead of individual child elements.",
        "This is useful when you have a large number of child elements and want to handle events on a common parent element.",
        "With event delegation, you can attach a single event listener to the parent element and let it handle events for all child elements.",
        "This can help improve performance and reduce code complexity.",
        "Event delegation is also known as event bubbling or event capturing.",
      ],
    },
    {
      title: "Hoisting",
      definition: [
        "Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope during the compilation phase.",
        "This means that you can use variables and functions before they are declared in the code.",
        "However, only the declarations are hoisted, not the initializations. This can lead to unexpected behavior if you try to access a variable before it has been assigned a value.",
      ],
    },
    {
      title: "Scope",
      definition:
        "Scope is the context in which variables and functions are accessible in JavaScript.",
    },
    {
      title: "This Keyword",
      definition:
        "The this keyword refers to the object that is currently executing the code.",
    },
    {
      title: "Prototype",
      definition: [
        "Prototype என்பது JavaScript-ல் ஒரு object மற்றொரு object-இலிருந்து properties மற்றும் methods inherit பண்ணும் mechanism.",

        "🧠 Prototype-based Design (Simple Meaning): JavaScript-ல் objects, மற்ற objects-லிருந்து properties மற்றும் methods inherit பண்ணும் — இதை prototype-based design என்று சொல்வாங்க.",

        "Prototype is a powerful feature in JavaScript that allows objects to inherit properties and methods from other objects.",

        "ஒரு property object-ல் கிடைக்கலனா, JavaScript அதன் prototype-ல் தேடும் — இதை prototype chain என்று சொல்வாங்க.",

        "JavaScript is prototype-based, not class-based.",
      ],
    },
    {
      title: "Inheritance",
      definition:
        "Inheritance is a mechanism in JavaScript that allows one object to inherit properties and methods from another object.",
    },
    {
      title: "ES6 Features",
      definition: [
        "ES6 (ECMAScript 2015) introduced several new features to JavaScript, including let and const for variable declarations, arrow functions for concise function syntax, template literals for easier string interpolation, destructuring assignment for object and array destructuring, and class syntax for defining classes.",
      ],
    },
    {
      title: "JavaScript Modules",
      definition:
        "JavaScript modules are a way to organize and encapsulate code into reusable pieces. They allow you to export and import functions, objects, or values between different files.",
    },

    {
      title: "JavaScript Frameworks and Libraries",
      definition: [
        "JavaScript frameworks and libraries are pre-written code that provides a structure and set of tools for building web applications. Examples include React, Angular, Vue.js, and jQuery.",
      ],
    },
    {
      title: "JavaScript Engines",
      definition:
        "JavaScript engines are programs that execute JavaScript code. Examples include V8 (used in Chrome and Node.js), SpiderMonkey (used in Firefox), and JavaScriptCore (used in Safari).",
    },
    {
      title: "JavaScript Runtime Environment",
      definition:
        "A JavaScript runtime environment is an environment in which JavaScript code can be executed. It includes the JavaScript engine, as well as additional APIs and libraries that provide functionality for tasks such as DOM manipulation, network requests, and file system access. Examples include web browsers and Node.js.",
    },

    {
      title: "Map",
      definition: [
        "A Map is a collection of key-value pairs where keys can be of any data type (objects, functions, primitives).",
        "Maps maintain insertion order and allow efficient data retrieval.",
        "Creating a Map → const map = new Map()",
        "Adding values → map.set(key, value)",
        "Accessing values → map.get(key)",
        "Checking key existence → map.has(key)",
        "Removing values → map.delete(key)",
        "Map size → map.size",
        "Clearing all entries → map.clear()",
        "Iterating over Map → map.forEach(), for...of",
        "Keys, values, entries → map.keys(), map.values(), map.entries()",
        "Map vs Object → Map allows any type as key, Object only allows string/symbol keys",
      ],
    },
    {
      title: "Set",
      definition: [
        "A Set is a collection of unique values, meaning duplicate values are not allowed.",
        "Sets can store any data type such as numbers, strings, or objects.",
        "Creating a Set → const set = new Set()",
        "Adding values → set.add(value)",
        "Checking existence → set.has(value)",
        "Removing values → set.delete(value)",
        "Set size → set.size",
        "Clearing all values → set.clear()",
        "Iterating over Set → set.forEach(), for...of",
        "Removing duplicates → new Set(array)",
        "Set vs Array → Set stores unique values, Array allows duplicates",
      ],
    },

    {
      title: "WeakMap",
      definition: [
        "A WeakMap is a collection of key-value pairs where keys must be objects only.",
        "WeakMap does not prevent garbage collection, meaning if the key object is no longer referenced, it can be removed automatically.",
        "Creating a WeakMap → const wm = new WeakMap()",
        "Adding values → wm.set(keyObject, value)",
        "Accessing values → wm.get(keyObject)",
        "Checking existence → wm.has(keyObject)",
        "Removing values → wm.delete(keyObject)",
        "WeakMap keys are not iterable → no forEach, no keys(), values(), entries()",
        "Use case → storing private data or metadata for objects without memory leaks",
      ],
    },

    {
      title: "WeakSet",
      definition: [
        "A WeakSet is a collection of unique objects only (no primitive values allowed).",
        "WeakSet does not prevent garbage collection of its objects.",
        "Creating a WeakSet → const ws = new WeakSet()",
        "Adding values → ws.add(object)",
        "Checking existence → ws.has(object)",
        "Removing values → ws.delete(object)",
        "WeakSet is not iterable → no forEach, no keys(), values(), entries()",
        "Use case → tracking object references without preventing memory cleanup",
      ],
    },
  ],
  reactjs: [
    {
      title: "React 19",
      definition: [
        "use hook for promises",
        "useActionState for Forms",
        "useOptimistic for instant UI",
        "Server Component & Action",
        "React Compiler (auto-optimization)",
        "Advanced Hooks : useRef,useMemo,useCallback,useReducer",
        "Performance:Code splitting,lazy loading,Virtualization",
        "Advanced Router : useParams,useNavigate,Protected routes",
        "Suspense & Error Boundaries",
      ],
    },
    {
      title: "React Links",
      definition: [
        "https://github.com/muazimmaqbool/Reactjs-with-Me/tree/master",
        "https://github.com/AhsanAyaz/react-in-90ish",
      ],
    },
    {
      title: "React",
      definition:
        "React is an open-source JavaScript library used for building scalable and high-performance frontend applications. It enables developers to create reusable UI components, making development faster and more efficient.",
    },
    {
      title: "Key Features of React",
      definition: [
        "Component Based Architecture",
        "One Way Data Binding",
        "single-page apllication (SPA)",
        "It uses a virtual DOM to efficiently update and render the user interface.",
        "Rich Ecosystem of Libraries and Tools",
        "It supports server-side rendering and client-side routing.",
        "It is a popular choice for building user interfaces for web applications.",
        "It is used by Facebook, Instagram, and many other companies.",
        "State Management",
        "Props",
        "Event Handling",
        "Lifecycle Methods",
      ],
    },

    {
      title: "Lifecycle Method",
      definition: ["dddd", "dddd"],
    },

    {
      title: "What is Rendering",
      definition:
        "Rendering is the process of converting data or code (such as HTML, CSS, and JavaScript) into a visual user interface that is displayed on the screen.",
      typesTitle: "Types of Rendering",
      types: [
        {
          name: "Initial Rendering",
          description:
            "The first time the UI is loaded and displayed on the screen.",
        },
        {
          name: "Re-rendering",
          description:
            "When state or props change, the UI updates and renders again.",
        },
      ],
    },

    {
      title: "Component",

      definition:
        "A component in React is a small, reusable piece of UI. It can be either a functional component or a class component.",
    },
    {
      title: "Functional Component",
      definition: [
        "A functional component is just a plain JavaScript pure function that accepts props as an argument and returns a React element",
        "There is no render method used in functional components",
        "Also known as Stateless Components as they simply accept data and display them in some form, they are mainly responsible for rendering UI ",
        "Hooks can be easily used in Functional component to make them stateful",
        "Functional component is simple and faster on the other hand",
      ],
    },
    {
      title: "Class Component",
      definition: [
        "A class component requires you to extend from React.Component and create a render function that returns a React element",
        "It must have the render method returning JSX",
        "Also known as Stateful components because they implement logic and state ",
        "It requires different syntax inside a class component to implement hooks",
      ],
    },
    {
      title: "Memoization",
      definition:
        "Memoization is a technique for speeding up application by caching the results of expensive function calls and returning them when the same inputs are used again",
      types: [
        {
          name: "React.memo",
          description: "Preventing Unnecessary Re-Renders",
        },
        {
          name: "useMemo",
          description: "Optimizing Expensive Calculations",
        },
        {
          name: "useCallback",
          description: "Stabilizing Function References",
        },
      ],
    },

    {
      title: "Higher Order Component",
      definition: [
        " A Higher Order Component is a function that takes a component as input and returns a new component with extra powers",
        "Formula: const EnhancedComponent = higherOrderComponent(OriginalComponent)",
        "HOCs do not modify the original component",
      ],
    },
    {
      title: "Higher Order Function",
      definition:
        "A Higher Order Function (HOF) is just a function that takes another function as argument OR returns a function.",
    },
    {
      title: "JSX Rules",
      definition: [
        "It is combination html and JavaScript",
        "Single Parent Element",
        "className instead of class",
        "All tags must be closed",
      ],
    },

    {
      title: "State",
      definition:
        "State is a built-in React object that is used to contain data or information about the component. State can change over time (நிலை காலப்போக்கில் மாறக்கூடும்.), and when it does (அது நிகழும்போது), the component re-renders to reflect the new state.",
    },
    {
      title: "Props",
      definition: [
        "Props (short for properties) are a way of passing data from parent to child components in React.",
        " They are read-only and cannot be modified by the child component.",

        " They can be of any data type, including strings, numbers, arrays, and objects. ",
        " Props are accessed in the child component using the props object, which is passed as an argument to the component function.",
      ],
    },

    {
      title: "Props Drilling",
      definition: `Prop drilling is a situation where you have to pass data through multiple levels of components in order to reach the component that needs the data. 
      This can lead to code that is difficult to maintain and understand, as it can create a lot of unnecessary props being passed down through the component tree.`,
    },

    {
      title: "React JS List & Keys",
      definition: [
        "Lists are used to display a collection of data in React. They are created using the map() method to iterate over an array of data and return a new array of JSX elements.",
        "Keys are a special attribute that is used to identify each element in a list. They help React to efficiently update and render the list when the data changes.",
        "Keys should be unique and stable, meaning they should not change between renders. A common practice is to use a unique identifier from the data as the key, such as an ID.",
      ],
    },
    {
      title: "React Strict Mode",
      definition: [
        "Strict Mode is a tool for highlighting potential problems in an application. It activates additional checks and warnings for its descendants(சந்ததியினர்).",
        "Strict Mode does not render any visible UI. It only activates additional checks and warnings for its descendants.",
        "Strict Mode helps to identify unsafe lifecycle methods, legacy API usage, and other potential issues in the application.",
      ],
    },
    {
      title: "React Router",
      definition:
        "React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.",
    },
    {
      title: "React Context",
      definition:
        "React Context is a way to pass data through the component tree without having to pass props down manually at every level.",
    },
    {
      title: "React Testing Library",
      definition:
        "React Testing Library is a set of utilities for testing React components.",
    },
    {
      title: "React Hooks",
      definition:
        "React Hooks are functions that let you use state and other React features without writing a class.",
    },
    {
      title: "React Query",
      definition:
        "React Query is a library for fetching, caching, and updating data in React.",
    },
    {
      title: "React Query Devtools",
      definition: "React Query Devtools is a tool for debugging React Query.",
    },
  ],
  nextjs: [
    {
      title: "Next Theams Link",
      definition: [
        "https://github.com/machadop1407/event-planner-nextjs-course/tree/main",
        "https://event-planner-nextjs-course.vercel.app/events",
        "json-server --watch db.json --port 5000",
        "Example: fetch('http://localhost:5000/events')",
      ],
    },
    {
      title: "Next.js",
      definition: [
        "Next.js is a React framework that supports multiple rendering methods.",
        "Example: npx create-next-app@latest my-app",
      ],
    },

    // 🔥 RENDERING TYPES START

    {
      title: "CSR (Client Side Rendering)",
      definition: [
        "Rendering happens in the browser using JavaScript.",
        "Example: useEffect(() => { fetch('/api').then(res => res.json()).then(setData); }, [])",
      ],
    },
    {
      title: "SSR (Server Side Rendering)",
      definition: [
        "Page is rendered on server for every request.",
        "Example: export async function getServerSideProps() { return { props: {} }; }",
      ],
    },
    {
      title: "SSG (Static Site Generation)",
      definition: [
        "Pages are pre-rendered at build time.",
        "Example: export async function getStaticProps() { return { props: {} }; }",
      ],
    },
    {
      title: "ISR (Incremental Static Regeneration)",
      definition: [
        "Static pages are updated after deployment without rebuilding.",
        "Example: export async function getStaticProps() { return { props: {}, revalidate: 10 }; }",
      ],
    },
    {
      title: "Streaming",
      definition: [
        "Allows sending HTML in chunks while data is loading.",
        "Example: return <Suspense fallback='Loading...'><Data /></Suspense>",
      ],
    },
    {
      title: "Edge Rendering",
      definition: [
        "Rendering happens at edge locations closer to user.",
        "Example: export const runtime = 'edge';",
      ],
    },
    {
      title: "Hybrid Rendering",
      definition: [
        "Combination of SSR, SSG, and CSR in one app.",
        "Example: Home page SSG + Dashboard SSR",
      ],
    },

    // 🔥 OTHER CORE CONCEPTS

    {
      title: "File-based Routing",
      definition: [
        "Routes are created using file structure.",
        "Example: pages/about.js → /about",
      ],
    },
    {
      title: "App Router",
      definition: [
        "New routing system using app directory.",
        "Example: app/page.tsx",
      ],
    },
    {
      title: "Server Components",
      definition: [
        "Runs on server and reduces JS bundle.",
        "Example: async function Page() { const data = await fetch(...); }",
      ],
    },
    {
      title: "Client Components",
      definition: [
        "Runs in browser and supports hooks.",
        "Example: 'use client'; useState()",
      ],
    },
    {
      title: "API Routes",
      definition: [
        "Create backend APIs inside Next.js.",
        "Example: pages/api/user.js",
      ],
    },
    {
      title: "Dynamic Routes",
      definition: ["Create routes with params.", "Example: pages/blog/[id].js"],
    },
    {
      title: "Link Component",
      definition: [
        "Client-side navigation.",
        "Example: <Link href='/about'>Go</Link>",
      ],
    },
    {
      title: "Image Optimization",
      definition: [
        "Built-in optimized images.",
        "Example: <Image src='/img.png' width={200} height={200} />",
      ],
    },
  ],
  typescript: [
    {
      title: "TypeScript",
      definition: [
        "TypeScript is a strongly typed programming language that builds on JavaScript.",
        "Example: let name: string = 'Simbu';",
      ],
    },
    {
      title: "Static Typing",
      definition: [
        "Static typing allows you to define variable types at compile time.",
        "Example: let age: number = 25;",
      ],
    },
    {
      title: "Type Inference",
      definition: [
        "Type inference automatically detects the type based on value.",
        "Example: let count = 10; // inferred as number",
      ],
    },
    {
      title: "Interface",
      definition: [
        "Interface defines structure of an object.",
        "Example: interface User { name: string; age: number }",
      ],
    },
    {
      title: "Type Alias",
      definition: [
        "A Type Alias in TypeScript is used to create a new name for an existing type.",
        "It helps make complex or repeated types more readable and reusable.",
        "Example: type User = { name: string; age: number };",
      ],
    },
    {
      title: "Union Type",
      definition: [
        "A Union Type in TypeScript allows a variable to have multiple possible types or values.",
        "It is defined using the '|' (pipe) symbol.",

        "React Example (ID): type ID = string | number; const [id, setId] = useState<ID>(1);",

        "React Example (Status): type Status = 'loading' | 'success' | 'error'; const [status, setStatus] = useState<Status>('loading');",
      ],
    },
    {
      title: "Intersection Type",
      definition: [
        "Intersection combines multiple types using '&'.",
        "Example: type A = { name: string }; type B = { age: number }; type C = A & B;",
      ],
    },
    {
      title: "Generics",
      definition: [
        "Generics create reusable components.",
        "Example: function identity<T>(value: T): T { return value; }",
      ],
    },
    {
      title: "Enum",
      definition: [
        "An Enum in TypeScript is used to define a set of named constant values.",
        "It helps make code more readable and prevents invalid values.",

        "Example: enum Status { Loading = 'LOADING', Success = 'SUCCESS', Error = 'ERROR' };",

        "React Example: const [status, setStatus] = useState<Status>(Status.Loading);",
      ],
    },
    {
      title: "Tuple",
      definition: [
        "A Tuple in TypeScript is a fixed-length array where each element has a specific type.",
        "It ensures the order and type of values are maintained.",

        "Example: type User = [string, number]; const user: User = ['Simbu', 22];",

        "React Example: type User = [string, number]; const [user, setUser] = useState<User>(['Simbu', 22]);",
      ],
    },
    {
      title: "Any",
      definition: [
        "Any disables type checking.",
        "Example: let data: any = 10; data = 'hello';",
      ],
    },
    {
      title: "Unknown",
      definition: [
        "Unknown is safer than any and requires checking.",
        "Example: let value: unknown = 'test'; if(typeof value === 'string') console.log(value);",
      ],
    },
    {
      title: "Void",
      definition: [
        "Void represents no return value.",
        "Example: function log(): void { console.log('hi'); }",
      ],
    },
    {
      title: "Never",
      definition: [
        "Never represents values that never occur.",
        "Example: function error(): never { throw new Error('error'); }",
      ],
    },
    {
      title: "Type Assertion",
      definition: [
        "Type Assertion in TypeScript is used to tell the compiler the exact type of a value.",
        "It is useful when you know more about the type than TypeScript can infer.",
        "It does not change the value at runtime, only helps during type checking.",
        "Syntax: value as Type",
        "Example: let value: unknown = 'Hello'; let length = (value as string).length;",
        "React Example: const inputRef = useRef<HTMLInputElement | null>(null); const value = inputRef.current?.value as string;",
      ],
    },
  ],
  nodeexpress: [
    {
      title: "Node.js",
      definition: [
        "Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside a web browser.",
        "Example: const http = require('http'); http.createServer((req,res)=>res.end('Hello')).listen(3000);",
      ],
    },
    {
      title: "Express",
      definition: [
        "Express.js is a back end web application framework for Node.js, designed for building web applications and APIs.",
        "Example: const express = require('express'); const app = express(); app.get('/', (req,res)=>res.send('Hello'));",
      ],
    },
    {
      title: "NPM",
      definition: [
        "NPM (Node Package Manager) is a tool used to install, manage, and share JavaScript packages.",
        "Example: npm install express",
      ],
    },
    {
      title: "Package.json",
      definition: [
        "package.json is a configuration file that contains metadata about a Node.js project and its dependencies.",
        'Example: { "name": "app", "version": "1.0.0", "dependencies": { "express": "^4.0.0" } }',
      ],
    },
    {
      title: "Middleware",
      definition: [
        "Middleware functions execute during the request-response cycle and have access to req, res, and next.",
        "Example: app.use((req,res,next)=>{ console.log('Middleware'); next(); });",
      ],
    },
    {
      title: "Routing",
      definition: [
        "Routing defines endpoints (URLs) and how the app responds to client requests.",
        "Example: app.get('/user', (req,res)=>res.send('User Page'));",
      ],
    },
    {
      title: "REST API",
      definition: [
        "REST API uses HTTP methods like GET, POST, PUT, DELETE.",
        "Example: app.post('/users', (req,res)=>res.send('User Created'));",
      ],
    },
    {
      title: "Request Object (req)",
      definition: [
        "The request object contains information about the HTTP request.",
        "Example: app.get('/', (req,res)=>{ console.log(req.query); res.send('ok'); });",
      ],
    },
    {
      title: "Response Object (res)",
      definition: [
        "The response object is used to send data back to client.",
        "Example: res.status(200).json({ message: 'Success' });",
      ],
    },
    {
      title: "Environment Variables",
      definition: [
        "Environment variables store sensitive data outside code.",
        "Example: process.env.PORT",
      ],
    },
    {
      title: "CORS",
      definition: [
        "CORS allows or restricts resources from different domains.",
        "Example: const cors = require('cors'); app.use(cors());",
      ],
    },
    {
      title: "Body Parser",
      definition: [
        "Body parser parses incoming request bodies.",
        "Example: app.use(express.json());",
      ],
    },
    {
      title: "Async/Await",
      definition: [
        "Async/Await handles asynchronous operations.",
        "Example: const data = await fetchData();",
      ],
    },
    {
      title: "Error Handling",
      definition: [
        "Error handling uses middleware with (err, req, res, next).",
        "Example: app.use((err,req,res,next)=>{ res.status(500).send(err.message); });",
      ],
    },
    {
      title: "MVC Architecture",
      definition: [
        "MVC separates logic into Model, View, Controller.",
        "Example: Model -> User.js, Controller -> userController.js, Route -> userRoutes.js",
      ],
    },
  ],
  mongodb: [
    {
      title: "MongoDB Commands",
      definition: ["net stop MongoDB Server", "net start MongoDB"],
    },
    {
      title: "MongoDB",
      definition: [
        "MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program.",
      ],
    },
    {
      title: "NoSQL",
      definition: [
        "NoSQL databases store data in non-tabular formats like documents, key-value pairs, graphs, or wide-columns.",
      ],
    },
    {
      title: "Collection",
      definition: [
        "A collection is a group of MongoDB documents, similar to a table in relational databases.",
      ],
    },
    {
      title: "Document",
      definition: [
        "A document is a record in MongoDB stored in BSON format (Binary JSON), containing key-value pairs.",
      ],
    },
    {
      title: "BSON",
      definition: [
        "BSON is a binary representation of JSON-like documents used by MongoDB for data storage.",
      ],
    },
    {
      title: "Mongoose",
      definition: [
        "Mongoose is an ODM (Object Data Modeling) library for MongoDB and Node.js used to define schemas and interact with the database.",
      ],
    },
    {
      title: "Schema",
      definition: [
        "A schema defines the structure of documents in a collection, including fields and data types.",
      ],
    },
    {
      title: "Model",
      definition: [
        "A model is a wrapper for the schema that provides an interface to interact with the database.",
      ],
    },
    {
      title: "CRUD Operations",
      definition: [
        "CRUD stands for Create, Read, Update, and Delete operations used to manage data in MongoDB.",
      ],
    },
    {
      title: "Indexing",
      definition: [
        "Indexing improves the performance of search queries by creating efficient data retrieval paths.",
      ],
    },
    {
      title: "Aggregation",
      definition: [
        "Aggregation is used to process data and return computed results using pipelines.",
      ],
    },
    {
      title: "Atlas",
      definition: [
        "MongoDB Atlas is a cloud-based database service for hosting MongoDB databases.",
      ],
    },
    {
      title: "Replica Set",
      definition: [
        "A replica set is a group of MongoDB servers that maintain the same data for high availability.",
      ],
    },
    {
      title: "Sharding",
      definition: [
        "Sharding is a method for distributing data across multiple machines to handle large datasets.",
      ],
    },
    {
      title: "ObjectId",
      definition: [
        "ObjectId is a unique identifier automatically generated for each document in MongoDB.",
      ],
    },
  ],
  gitgithub: [
    {
      title: "Git",
      definition:
        "Git is a software for tracking changes in any set of files, usually used for coordinating work among programmers.",
    },
    {
      title: "GitHub",
      definition:
        "GitHub is a provider of Internet hosting for software development and version control using Git.",
    },
    {
      title: "GitHub Commends",
      definition: [
        "Remove-Item -Recurse -Force node_modules",

        "Remove-Item yarn.lock",
        "Remove-Item package-lock.json",
        " git pull origin main",
        "If git pull பண்ணும்போது error வந்தா (merge conflict) :👉 use this (safe for your case): git pull origin main --rebase",
        "git config user.name",
        "git config user.email",
        `git config --global user.name "silambarasanstr"`,
        `git config --global user.email "your-email@gmail.com"`,
        "Repo Check : git remote -v",
        " ✅ 1. New branch create : git branch feature-login     ",
        " ✅ 2. Branchக்கு switch ஆக : git checkout feature-login    ",
        " ⚡ Shortcut (create + switch ஒரே command) git checkout -b feature-login      ",
        " 🔍 Current branch check : git branch             ",
        "  🚀 Branch push பண்ணுவது: git push -u origin feature-login     ",
        "  🔀 Merge branch (important) : git merge feature-login  ",
        "  🗑️ Branch delete :   Local:git branch -d feature-login   ",
        " GitHub:  git push origin --delete feature-login",
      ],
    },
  ],
  cicd: [
    {
      title: "CI/CD",
      definition: [
        "What is CI/CD?",
        "CI/CD is a method to frequently deliver applications by automating stages like building, testing, and deployment.",
      ],
    },
    {
      title: "Continuous Integration (CI)",
      definition: [
        "What is Continuous Integration?",
        "Continuous Integration is the practice of automatically integrating code changes into a shared repository and running tests to detect issues early.",
      ],
    },
    {
      title: "Continuous Delivery (CD)",
      definition: [
        "What is Continuous Delivery?",
        "Continuous Delivery ensures that code changes are automatically prepared for release to production.",
      ],
    },
    {
      title: "Continuous Deployment",
      definition: [
        "What is Continuous Deployment?",
        "Continuous Deployment automatically deploys every change that passes testing directly to production without manual approval.",
      ],
    },
    {
      title: "CI/CD Pipeline",
      definition: [
        "What is a CI/CD pipeline?",
        "A CI/CD pipeline is a sequence of automated steps like build, test, and deploy that code goes through before reaching production.",
      ],
    },
    {
      title: "Benefits of CI/CD",
      definition: [
        "What are the benefits of CI/CD?",
        "CI/CD improves code quality, reduces bugs, speeds up delivery, enables faster feedback, and ensures reliable deployments.",
      ],
    },
    {
      title: "CI vs CD",
      definition: [
        "What is the difference between CI and CD?",
        "CI focuses on integrating and testing code changes, while CD focuses on delivering or deploying the code to production.",
      ],
    },
    {
      title: "CI/CD Tools",
      definition: [
        "Name some popular CI/CD tools.",
        "Popular tools include Jenkins, GitHub Actions, GitLab CI/CD, CircleCI, and Azure DevOps.",
      ],
    },
  ],
  docker: [
    {
      title: "Docker Fundamentals",
      definition: [
        "https://resources.criodo.com/courses/docker-fundamentals/",
        "Example: Learn basics and run your first container using 'docker run hello-world'",
      ],
    },
    {
      title: "Docker",
      definition: [
        "What is Docker?",
        "Docker is a platform that uses OS-level virtualization to deliver software in packages called containers.",
        "Example: docker run hello-world",
      ],
    },
    {
      title: "Docker Command",
      definition: [
        "Example: docker run -d -p 8080:80 --name docker-learn-container docker-learn-app",
        "Example : docker stop docker-learn-container && docker rm docker-learn-container",
        "Example: docker build -t docker-learn-app .",
        "Example : docker stop docker-learn-container; docker rm docker-learn-container",
      ],
    },
    {
      title: "Docker Container",
      definition: [
        "What is a Docker container?",
        "A Docker container is a lightweight, standalone package that includes everything needed to run an application.",
        "Example: docker run -d nginx",
      ],
    },
    {
      title: "Docker Image",
      definition: [
        "What is a Docker image?",
        "A Docker image is a read-only template used to create containers.",
        "Example: docker pull node",
      ],
    },
    {
      title: "Dockerfile",
      definition: [
        "What is a Dockerfile?",
        "A Dockerfile is a script with instructions to build Docker images.",
        "Example: FROM node:18\nWORKDIR /app\nCOPY . .\nRUN npm install\nCMD ['node','app.js']",
      ],
    },
    {
      title: "Docker Compose",
      definition: [
        "What is Docker Compose?",
        "Docker Compose is a tool to run multi-container applications.",
        "Example: docker-compose up",
      ],
    },
    {
      title: "docker-compose.yml",
      definition: [
        "What is docker-compose.yml?",
        "It is a config file to define services, networks, and volumes.",
        "Example: version: '3'\nservices:\n  app:\n    image: node\n    ports:\n      - '3000:3000'",
      ],
    },
    {
      title: "Docker vs Virtual Machine",
      definition: [
        "What is the difference?",
        "Docker containers share OS, VMs include full OS.",
        "Example: Docker starts in seconds, VM takes minutes",
      ],
    },
    {
      title: "Docker Commands - Basics",
      definition: [
        "What are basic Docker commands?",
        "docker --version, docker pull <image>, docker images, docker ps",
        "Example: docker pull nginx",
      ],
    },
    {
      title: "Docker Commands - Run & Stop",
      definition: [
        "How to run and stop containers?",
        "docker run <image>, docker stop <container_id>",
        "Example: docker run -d nginx && docker stop <id>",
      ],
    },
    {
      title: "Docker Commands - Build & Remove",
      definition: [
        "How to build and remove?",
        "docker build -t <name> ., docker rm <id>",
        "Example: docker build -t myapp .",
      ],
    },
    {
      title: "Docker Commands - Logs & Exec",
      definition: [
        "How to check logs and access container?",
        "docker logs <id>, docker exec -it <id> bash",
        "Example: docker exec -it mycontainer bash",
      ],
    },
    {
      title: "Docker Compose Commands",
      definition: [
        "Docker Compose commands?",
        "docker-compose up, down, build, ps",
        "Example: docker-compose up -d",
      ],
    },
  ],
  npm: [
    {
      title: "Docker  Commands",
      definition: ["npm run dev:all"],
    },
  ],
  Jenkins: [
    {
      title: "Jenkins",
      definition: [
        "What is Jenkins?",
        "Jenkins is an open source automation server. It helps automate the parts of software development related to building, testing, and deploying, facilitating continuous integration, and continuous delivery.",
        "Example: Jenkins is a continuous integration server.",
      ],
    },
    {
      title: "Jenkins Command",
      definition: [
        "Example: jenkins --version",
        "Example: jenkins --version",
        "Example: jenkins --version",
        "Example: jenkins --version",
      ],
    },
    {
      title: "Jenkins Job",
      definition: [
        "What is a Jenkins job?",
        "A Jenkins job is a set of instructions that Jenkins executes to build, test, and deploy software.",
        "Example: Jenkins job",
      ],
    },
    {
      title: "Jenkins Pipeline",
      definition: [
        "What is a Jenkins pipeline?",
        "A Jenkins pipeline is a series of steps that Jenkins executes to build, test, and deploy software.",
        "Example: Jenkins pipeline",
      ],
    },
    {
      title: "Jenkins Plugin",
      definition: [
        "What is a Jenkins plugin?",
        "A Jenkins plugin is a set of instructions that Jenkins executes to build, test, and deploy software.",
        "Example: Jenkins plugin",
      ],
    },
    {},
  ],
};
