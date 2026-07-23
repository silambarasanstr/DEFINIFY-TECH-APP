import { title } from "framer-motion/client";

export const courseData = {
  html: [
    {
      title: "What is HTML?",
      definition:
        "HTML (HyperText Markup Language) is the standard markup language used to create the structure of web pages.",
    },
    {
      title: "What is DOCTYPE?",
      definition:
        "DOCTYPE tells the browser that the document is written in HTML5",
    },
    {
      title: "What is HyperText?",
      definition:
        "HyperText is text containing links that allow users to navigate from one page to another.",
      example: `<div>
<p>
<h1>
<section>
<article>`,
    },
    {
      title: "What is the Head Tag?",
      definition:
        "The <head> tag is used to contain metadata about an HTML document. It is placed in the <html> element and contains information such as the page title, character set, and links to external resources.",
    },
    {
      title: "What is the Body Tag?",
      definition: "The <body> contains everything visible on the webpage.",
    },
    {
      title: "What is Metadata?",
      definition:
        "Metadata is data that provides information about other data. In HTML, metadata is used to provide information about the document, such as the title, description, and keywords.",
      example: `<meta charset="UTF-8">
<meta name="description" content="HTML Tutorial">`,
    },
    {
      title: "What is a Viewport?",
      definition:
        "The viewport controls how a webpage is displayed on different devices.",
      example: `<meta name="viewport" content="width=device-width, initial-scale=1">`,
    },
    {
      title: "What is a Tag?",
      definition:
        "A tag is a keyword enclosed in angle brackets (<>) that tells the browser how to display content.",
    },
    {
      title: "Element",
      definition: [
        "An HTML element consists of the opening tag, content, and closing tag.",
        "An HTML element is a building block of a web page. It tells the browser how to display content like text, images, links, buttons, and more.",
      ],
    },
    {
      title: "What is Nested Element?",
      definition: "An element placed inside another element.",
      example: `<div>
    <p>Hello</p>
</div>`,
    },
    {
      title: "What is an Empty Element?",
      definition: "An element that does not have a closing tag.",
      example: `<br>
<hr>
<img>
<input>
<meta>
<link>`,
    },
    {
      title: "Attribute",
      definition: [
        "It is provide additional information about the element.",
        'Attributes are always specified (குறிப்பிடப்பட்டது) in the start tag (or opening tag), and usually come in name/value pairs like: name="value".',
      ],
    },

    {
      title: "Block vs Inline Elements",
      definition: [
        "Block-level elements. Takes full width available. Start from a new line and  ",
        "Inline elements. Takes only required width. Stay on the same line.",
      ],
      example: `<span>
<a>
<strong>
<em>
<img>`,
    },
    {
      title: "HTML5",
      definition: [
        "HTML5 is a markup language used for structuring and presenting content on the World Wide Web.",
        "It is the fifth and current version of the HTML standard.",
        "It was published in October 2014 and includes new features such as support for multimedia, improved support for web applications, and enhanced semantic elements.",
      ],
    },

    {
      title: "Forms",
      definition: [
        "HTML forms are used to collect user input. They consist (அடங்கியிருத்தல்) of form elements such as text fields, checkboxes, radio buttons, and submit buttons.",
        "Forms can be submitted to a server for processing or handled client-side using JavaScript.",
      ],
    },

    {
      title: "Semantic Elements",
      definition: [
        "HTML5 semantic elements clearly describe their meaning to both the browser and the developer.",
      ],
      example: `<header>
<footer>
<article>
<section>
<nav>

Benefits:
Better SEO
Better Accessibility
Easier Maintenance

`,
    },

    {
      title: "Meta tags",
      definition: [
        "Meta tags are used to provide metadata about an HTML document. They are placed in the <head> section of the document and can include information such as the page description, keywords, author, and viewport settings.",
        "Meta tags can help improve SEO (Search Engine Optimization) and ensure that web pages are displayed correctly on different devices.",
      ],
    },
    {
      title: "What is SEO?",
      definition: [
        "SEO (Search Engine Optimization) is the practice of increasing the quantity and quality of traffic to your website through organic search engine results.",
        "SEO (Search Engine Optimization) is the practice of improving a website so search engines can understand and rank it better.",
      ],
    },

    {
      title: "Entities",
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
      title: "Classes and IDs",
      definition: [
        "Classes and IDs are used to identify and style HTML elements.",
        "An ID is a unique identifier for an element",
        "Used once",
        "IDs are defined using the id attribute",
        "IDs are typically used for JavaScript manipulation and styling specific elements",
        "Selected using #",

        "while a class can be shared among multiple elements",
        "Reusable",
        "classes are defined using the class attribute.",
        "Used multiple times",
        "classes are used for styling groups of elements with similar characteristics.",
        "Selected using the dot (.) selector in CSS",
      ],
    },
    {
      title: "What is the Difference Between href and src?",
      definition: [
        "href",
        "References a resource",
        "Used in links to reference external resources",
        "Used in <a>, <link>",

        "src",
        "Embeds a resource",
        "Used in <img>, <script>, <iframe>",
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
        "The <iframe>(Inline Frame) is an HTMl Element  used to embed another Webpage or external content in side your current page.",
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
        " Inheritance is a mechanism in JavaScript that allows one object to inherit properties and methods from another object.",
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
      title: "Variable",
      definition: [
        " A Variable are named storage location that can hold data.Variable are used to store the data that can be accessed and manipulate throughout a program",
        "you can declare a variable using the var,let and const keyword",
      ],
    },

    {
      title: "Hoisting",
      definition: [
        "Hoisting in JavaScript is the behaviour where variables and function declarations are moved to the top of their containing scope during the compilation phase, before the code is executed.",
        "This means you can use variables and functions before they are declared in the code (depending on type).",
      ],
      example: `Function Hoisting: function greet() { console.log('Hello'); } greet(); // Works,

Variable Hoisting (var): console.log(a); var a = 10; // undefined (not error),

let and const Hoisting: console.log(b); let b = 20; // ReferenceError (Temporal Dead Zone),
      `,
    },
    {
      title: "Scope in JavaScript",
      definition: [
        "Scope is the accessibility of variables, object and functions where you can use or reference them.",

        "1. Global Scope: Variables declared outside any function or block. Accessible everywhere.",
        "Example: let a = 10; function test() { console.log(a); }",

        "2. Function Scope: Variables declared inside a function are accessible only inside that function.",
        "Example: function test() { let b = 20; console.log(b); }",

        "3. Block Scope: Variables declared using let and const inside {} are accessible only within that block.",
        "Example: if(true) { let c = 30; }",

        "4. Lexical Scope: Inner functions can access variables of outer functions.",
      ],
    },
    {
      title: "Temporal Dead Zone ",
      definition: [
        "Temporal Dead Zone is the time period between entering a scope and initializing a let or const variable. During this period, accessing the variable throws a ReferenceError",

        "Temporal Dead Zone என்பது let மற்றும் const variables declare ஆன இடத்திற்கு முன் இருக்கும் time period. அந்த time-ல் variable memory-ல் இருக்கும், ஆனால் initialize ஆகாது. அதனால் access பண்ணினா ReferenceError வரும்.",
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
      title: "Callback Function",
      definition: [
        "A callback function is a function that is passed as an argument to another function and is executed later.",
        "Callbacks are used to handle asynchronous operations like API calls, timers, and events.",
        "It helps to run code only after a task is completed.",

        "Example (Basic): function greet(name, callback) { console.log('Hi ' + name); callback(); }",
        "greet('Simbu', () => console.log('Welcome!'));",

        "Example (setTimeout): setTimeout(() => { console.log('Runs after 2 seconds'); }, 2000);",

        "Example (Event): button.addEventListener('click', () => { console.log('Button clicked'); });",
      ],
    },

    {
      title: "Higher-Order Function",
      definition: [
        "A higher-order function is a function that takes another function as an argument or returns a function.",
        "It is used to make code more reusable, flexible, and clean.",

        "Example (Function as Argument): function greet(name, callback) { console.log('Hi ' + name); callback(); }",
        "greet('Simbu', () => console.log('Welcome!'));",

        "Example (Function Returning Function): function multiplyBy(x) { return function(y) { return x * y; }; }",
        "const double = multiplyBy(2); console.log(double(5)); // 10",

        "Example (Array HOF): const nums = [1,2,3,4]; const result = nums.map(n => n * 2);",
      ],
    },
    {
      title: "Closures Function",
      definition: [
        " A closure gives you access to an outer function's scope from an inner function. A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).",
        "A closure is a function that remembers variables from its outer scope even after the outer function has finished execution.",
        "Closures allow you to access and preserve data privately.",
        "It is commonly used in data encapsulation, counters, and function factories.",

        "Example (Basic): function outer() { let count = 0; return function inner() { count++; console.log(count); }; }",
        "const counter = outer(); counter(); // 1, counter(); // 2",

        "Example (Private Variable): function secret() { let msg = 'Hidden'; return () => console.log(msg); }",
        "const reveal = secret(); reveal(); // Hidden",
      ],
    },

    {
      title: "What are the disadvantages and drawbacks of using closures?",
      definition: [
        "Closures can increase memory usage because they keep outer variables in memory. Overusing them may lead to memory leaks and make debugging more difficult.",
      ],
    },

    {
      title: "Recursive Function",
      definition: [
        "A recursive function is a function that calls itself until a base condition is met.",
        "It is used to solve problems that can be broken down into smaller sub-problems.",
        "Every recursive function must have a base case to stop infinite calls.",

        "Example (Factorial): function factorial(n) { if (n === 0) return 1; return n * factorial(n - 1); }",
        "factorial(5); // 120",

        "Example (Countdown): function countDown(n) { if (n === 0) return; console.log(n); countDown(n - 1); }",
        "countDown(5); // 5,4,3,2,1",
      ],
    },
    {
      title: "Factory Function",

      definition: [
        "Used to create objects",

        "A Factory Function is a function that returns an object.",
        "It is used to create multiple objects without using class or constructor function.",
      ],
      example: `
      
      function createUser(name, age) {
  return {
    name,
    age,
    greet() {
      console.log("Hello " + name);
    }
  };
}

const user1 = createUser("Simbu", 18);

console.log(user1.name);

user1.greet();
      
      
      `,
    },
    {
      title: "Function Currying",
      definition: [
        "Returns function",
        "Used to split arguments",

        "Currying is a technique where a function with multiple arguments is transformed into a sequence of functions, each taking one argument at a time.",
        "It helps in creating reusable and specialized functions.",
        "Instead of passing all arguments at once, you pass them one by one.",
      ],
      example: `
      "Example (Normal): function add(a, b) { return a + b; }",
        "add(2, 3); // 5",

        "Example (Curried): function add(a) { return function(b) { return a + b; }; }",
        "add(2)(3); // 5",

        "Example (Reusable): const multiply = a => b => a * b;",
        "const double = multiply(2); console.log(double(5)); // 10",
      
      `,
    },

    {
      title: "Generator Function",
      definition: [
        "A generator function is a special function that can pause and resume its execution using the 'yield' keyword.",
        "It returns an iterator object that can be used to control execution step-by-step.",
        "Defined using function* syntax.",

        "Example (Basic): function* gen() { yield 1; yield 2; yield 3; }",
        "const g = gen(); g.next(); // { value: 1, done: false }",
        "g.next(); // { value: 2, done: false }",

        "Example (Loop): function* count(n) { for (let i = 1; i <= n; i++) { yield i; } }",
        "for (let num of count(3)) { console.log(num); } // 1,2,3",
      ],
    },

    {
      title: "Memoization",
      definition: [
        "Memoization is an optimization technique used to store the results of expensive function calls and return the cached result when the same inputs occur again.",

        `ஒரு function run ஆகும்போது அதற்கு அதிக time அல்லது processing செலவாகும் என்றால், அந்த function-ன் result-ஐ store (cache) செய்து வைக்கும்.

பிறகு அதே input மீண்டும் வந்தால், function-ஐ மறுபடியும் execute செய்யாமல், ஏற்கனவே store செய்த result-ஐ நேராக return செய்யும்.

இதனால்:

performance வேகமாகும்
unnecessary calculations குறையும்
application efficient ஆகும்`,

        "It avoids repeated calculations and improves performance.",
      ],
      example: `code`,
    },

    {
      title: "Debouncing",
      definition: [
        "Debouncing is a technique that delays the execution of a function until after a specified delay has passed since the last time it was invoked.",
        "It prevents unnecessary function calls when an event is triggered repeatedly.",
        "Commonly used in search inputs, resize events, and API calls to improve performance.",

        "Example (Basic): function debounce(fn, delay) { let timer; return function(...args) { clearTimeout(timer); timer = setTimeout(() => fn(...args), delay); }; }",

        "Usage: const handleSearch = debounce((text) => { console.log('API call:', text); }, 500);",

        "handleSearch('h'); handleSearch('he'); handleSearch('hel'); // Only last call runs after delay",
      ],
    },
    {
      title: "Throttling",
      definition: [
        "Throttling is a technique that ensures a function is executed at most once in a specified time interval.",
        "It limits how often a function can run, even if the event is triggered many times.",
        "Used in scroll events, resize events, and button clicks to improve performance.",

        "Example (Basic): function throttle(fn, limit) { let lastCall = 0; return function(...args) { const now = Date.now(); if (now - lastCall >= limit) { lastCall = now; fn(...args); } }; }",

        "Usage: const handleScroll = throttle(() => { console.log('Scroll event'); }, 1000);",

        "window.addEventListener('scroll', handleScroll);",
      ],
    },

    {
      title: "Event Loop",
      definition: [
        "The Event Loop is a mechanism in JavaScript that continuously checks if the Call Stack is empty and then moves tasks from queues to the stack.",
        "The Event Loop is a handle asynchronous operations while running in a single-threaded environment.",
        "Asynchronous operations (like setTimeout, Promises, API calls) are handled by Web APIs and moved to callback queues.",

        "The Callback Queue (also called the Macrotask Queue or Task Queue) → stores callbacks from setTimeout, setInterval, DOM events.",

        "Microtask Queue → stores Promise callbacks (.then, .catch, .finally) and runs before the callback queue.",
        "Promises (microtasks) Higher priority, Executes first.",
        "Execution order → Call Stack → Microtask Queue → Callback Queue",
      ],
    },
    {
      title: "Deep Copy vs Shallow Copy",
      definition: [
        "Shallow Copy creates a new object but copies only the first level. Nested objects are still referenced (shared).",
        "Deep Copy creates a completely independent copy, including all nested objects.",

        "Example (Shallow Copy): const obj1 = { name: 'Simbu', address: { city: 'Chennai' } };",
        "const obj2 = { ...obj1 }; obj2.address.city = 'Madurai'; console.log(obj1.address.city); // Madurai ❌",

        "Example (Deep Copy - JSON): const obj3 = JSON.parse(JSON.stringify(obj1));",
        "obj3.address.city = 'Trichy'; console.log(obj1.address.city); // Chennai ✅",

        "Example (Deep Copy - structuredClone): const obj4 = structuredClone(obj1);",
      ],
    },
    {
      title: "Session Storage vs Local Storage",
      definition: [
        "Both are Web Storage APIs used to store data in the browser as key-value pairs.",
        "Local Storage stores data with no expiration and persists even after the browser is closed.",
        "Session Storage stores data only for the session and is cleared when the tab/browser is closed.",

        "Example (Local Storage): localStorage.setItem('name', 'Simbu');",
        "localStorage.getItem('name'); // 'Simbu'",
        "localStorage.removeItem('name');",
        "localStorage.clear();",

        "Example (Session Storage): sessionStorage.setItem('user', 'Admin');",
        "sessionStorage.getItem('user');",
        "sessionStorage.removeItem('user');",
      ],
    },
    {
      title: "Synchronous and  Asynchronous JavaScript",
      definition: [
        "Synchronous JavaScript runs code line by line, blocking the execution of subsequent code until the current operation is completed.",
        "Asynchronous JavaScript allows code to run without blocking the execution of other code.",
        "It is used for tasks that take time like API calls, timers, and file operations.",
      ],
    },
    {
      title: "Promise",
      definition: [
        "A Promise is an object that represents the eventual(இறுதியில்) completion(நிறைவு பெறுவதை) (or failure) of an asynchronous operation and its resulting value.",
        "A Promise has three states → pending, fulfilled, and rejected.",
        "Promises are used to handle asynchronous operations like API calls, file reading, or timers.",
        "own-a Promise create pannalam",
        "Creating a Promise → new Promise((resolve, reject) => {})",
        "Resolving a Promise → resolve(value)",
        "Rejecting a Promise → reject(error)",
        "Handling success → .then()",
        "Handling errors → .catch()",
        "Finally block → .finally() runs regardless of success or failure",
        "Promise chaining → multiple .then() calls in sequence",

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
      title: "Iterator",
      definition: [
        "An iterator is an object that allows you to iterate over a collection of values.",
        "Iterators are used to iterate over collections, such as arrays, objects, or strings, and they provide a way to access each element of the collection one at a time.",
        "Iterators have a next() method that returns an object with two properties: value (the current element) and done (a boolean indicating whether the iteration is complete),",
      ],
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
      title: "ES6 Features",
      definition: [
        "ES6 (ECMAScript 2015) introduced major improvements to JavaScript to make it cleaner, faster, and easier to write.",

        "1. let and const → Block scoped variables",
        "Example: let a = 10; const b = 20;",

        "2. Arrow Functions → Short syntax for functions",
        "Example: const add = (a, b) => a + b;",

        "3. Template Literals → String interpolation using backticks",
        "Example: `Hello ${name}`",

        "4. Destructuring → Extract values from arrays/objects",
        "Example: const { name } = user;",

        "5. Spread Operator (...) → Expand arrays/objects",
        "Example: const newArr = [...arr];",

        "6. Rest Parameter → Collect multiple arguments",
        "Example: function sum(...nums) {}",

        "7. Modules → import/export system",
        "Example: import { add } from './math.js';",

        "8. Promises → Handle async operations",
        "Example: new Promise((resolve) => resolve('Done'));",
      ],
    },
    {
      title: "JavaScript Modules",
      definition: [
        "JavaScript Modules are a way to split code into separate files and reuse them where needed.",
        "Each module has its own scope, so variables/functions are not global by default.",
        "Modules help in organizing, maintaining, and scaling applications.",

        "Export: Used to share variables, functions, or classes from a file.",
        "Import: Used to bring exported code into another file.",

        "Example (Named Export): export const name = 'Simbu';",
        "Example (Named Import): import { name } from './file.js';",

        "Example (Default Export): export default function greet() { console.log('Hello'); }",
        "Example (Default Import): import greet from './file.js';",

        "Modules are supported using ES6 (import/export).",
      ],
    },

    {
      title: "JavaScript Frameworks and Libraries",
      definition: [
        "JavaScript Frameworks and Libraries are tools that help developers build web applications faster and more efficiently.",

        "Framework: A complete structure that controls how your application is built.",
        "It provides rules, patterns, and architecture (you follow its structure).",

        "Library: A collection of reusable functions you can call when needed.",
        "You control the flow of the application.",

        "Example Frameworks: Angular, Next.js, Vue.js, Svelte",

        "Example Libraries: React.js, Lodash, Axios, jQuery",

        "React example (Library): const element = <h1>Hello</h1>;",
        "Angular example (Framework): Full MVC structure with built-in routing and services",
      ],
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
        "A Set is a collection of unique (Set = தொகுப்பு (Collection)) values, meaning duplicate values are not allowed.",
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
    {
      title: "Regular Expression",
      definition: [
        "A Regular Expression (RegEx) is a sequence of characters that defines a search pattern.",
        "Regular expressions are used for matching strings, extracting information, and validating input.",
        "Creating a Regular Expression → const regex = /pattern/flags or const regex = new RegExp('pattern', 'flags')",
        "Testing a Regular Expression → regex.test(string)",
        "Matching a Regular Expression → regex.exec(string) or string.match(regex)",
        "Replacing with a Regular Expression → string.replace(regex, replacement)",
        "Splitting with a Regular Expression → string.split(regex)",
      ],
    },
    {
      title: "Garbage Collection",
      definition: [
        "Garbage Collection is an automatic memory management process in JavaScript. It removes objects from memory that are no longer reachable or used by the program.",
        "It helps in freeing up memory and preventing memory leaks.",
        "Garbage Collection-na JavaScript-ல memory cleanup process. நாம் use பண்ணாத variables அல்லது objects-ஐ automatically memory-ல இருந்து remove பண்ணும். இதனால் memory waste ஆகாமல் இருக்கும்.",
      ],
    },
  ],
  reactjs: [
    {
      title: "React Library",
      definition: [
        "clsx என்பது React / Next.js-ல் CSS class-களை condition-க்கு ஏற்ப clean-ஆ manage பண்ண use பண்ணுற ஒரு சிறிய library.(Dynamic class names)",
        "Class Variance Authority (CVA) என்பது React/Tailwind CSS-ல் reusable components-க்கு variants manage பண்ண பயன்படும் library.(Dynamic class names + Variants (size, color, type, state) manage)",
        "Sonner என்பது React-ல் Toast Notifications (popup messages) காட்ட பயன்படுத்தப்படும் library.",
      ],
    },
    {
      title: "React.js Version",
      definition: ["React 16.x", "React 17.x", "React 18.x", "React 19.x"],
    },
    {
      title: "Latest version React 19",
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
      title: "What is Rendering",
      definition:
        "Rendering is the process of converting data or code or components (such as HTML, CSS, and JavaScript) into a visual UI elements that is displayed on the screen.",
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
      title: "Cache என்றால் என்ன?",
      definition: [
        <>
          Cache is a temporary storage area that{" "}
          <strong>holds frequently accessed data</strong> for faster retrieval.
        </>,
        "It is commonly used to improve application performance and reduce the load on the server.",
        "Cache = அடிக்கடி பயன்படுத்தப்படும் data-வை temporary-ஆக சேமித்து வைத்து, அடுத்த முறை வேகமாக பயன்படுத்துவது.",
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
      title: "What is the difference between RealDOM and VirtualDOM?",
      definition: [
        "Real DOM means the actual webpage that the browser creates from an HTML page and displays on the screen. Any change in the Real DOM directly affects what you see on the webpage. It is slow because it can re-render the entire webpage.",
        "Virtual DOM is a lightweight object of the Real DOM that represents the UI in memory, not on the screen. React updates it first, instead of updating  directly webpage.",
      ],
    },
    {
      title: "Virtual DOM",
      definition: [
        "Virtual DOM is a lightweight copy of the Real DOM.",
        "React creates a virtual representation of the UI in memory.",
        "When state or props change, React updates the Virtual DOM first.",
        "React compares the old Virtual DOM with the new Virtual DOM using a process called Diffing.",
        "Only the changed elements are updated in the Real DOM for better performance.",
      ],
      example: `
const [count, setCount] = useState(0);

return (
  <div>
    <h1>{count}</h1>

    <button onClick={() => setCount(count + 1)}>
      Increment
    </button>
  </div>
);
`,
    },
    {
      title: "Real DOM",
      definition: [
        "Real DOM is the actual DOM shown in the browser.",
        "It directly represents the webpage structure.",
        "Updating the Real DOM is slower because the browser re-renders the UI.",
        "Every change in the Real DOM can affect performance.",
        "JavaScript can directly manipulate the Real DOM using methods like getElementById.",
      ],
      example: `
<h1 id="title">Hello</h1>

<button onclick="changeText()">
  Change Text
</button>

<script>
  function changeText() {
    document.getElementById("title").innerText = "Welcome";
  }
</script>
`,
    },

    {
      title: "React",
      definition:
        "React is an open-source JavaScript library used to build fast, interactive user interfaces, especially for single-page applications .React let you build a website with reusable UI components.",
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
        "Yes. React itself supports Server-Side Rendering (SSR), but SSR is not built into React alone. You typically use a framework like Next.js to implement SSR.",
        "It is a popular choice for building user interfaces for web applications.",
        "It is used by Facebook, Instagram, and many other companies.",
        "State Management",
        "Props",
        "Event Handling",
        "Lifecycle Methods",
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
      definition: [
        "State is a built-in React object that is used to contain data or information about the component. State can change over time (நிலை காலப்போக்கில் மாறக்கூடும்.), and when it does (அது நிகழும்போது), the component re-renders to reflect the new state.",
        " React state updates are asynchronous (or more precisely, scheduled), not synchronous.",
      ],
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
      definition: [
        "Prop drilling is a situation where you have to pass data through multiple levels of components in order to reach the component that needs the data.  This can lead to code that is difficult to maintain and understand, as it can create a lot of unnecessary props being passed down through the component tree.",
        "props Drilling refers to the process of passing data from a high-level component down to a deep-level component thought intermediate component that do need the data themselves",
      ],
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
      title: "Component",

      definition:
        "A component in React is a small, reusable piece of UI. It can be either a functional component or a class component.",
    },
    {
      title: "Functional Component",
      definition: [
        "Functional components are JavaScript functions that accept props as an argument and return JSX. It is the modern way of creating React components.",
        "Also known as Stateless Components ",
        "Hooks can be easily used in Functional component to make them stateful",
      ],
    },
    {
      title: "Class Component",
      definition: [
        "Class components are JavaScript classes that extend React.Component and implement the render() method, which returns JSX. It is the older way of creating React components.",
        "Also known as Stateful components because they implement logic and state ",
      ],
    },
    {
      title: "Controlled Component",
      definition: [
        "A controlled component is a form element controlled by React state.",
        "React handles the input value using useState.",
        "The value is updated using onChange event.",
      ],
      example: `
const [name, setName] = useState("");

<input
  type="text"
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
`,
    },

    {
      title: "Uncontrolled Component",
      definition: [
        "An uncontrolled component stores form data in the DOM itself.",
        "React does not control the input value using state.",
        "useRef is commonly used to access the input value.",
      ],
      example: `
const inputRef = useRef();

<input type="text" ref={inputRef} />

<button onClick={() => console.log(inputRef.current.value)}>
  Submit
</button>
`,
    },
    {
      title: "React Server Components",
      definition: [
        "React server comonenents is now the default in Next js",
        "Server Components are components that run on the server and reduce JavaScript sent to the browser",
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
      title: "React Context",
      definition:
        "React Context is a way to pass data through the component tree without having to pass props down manually at every level.",
    },

    {
      title: "Redux",
      definition: [
        "Redux is a predictable (கணிக்கக்கூடிய) state container for JavaScript applications.",
        "It helps manage the state of a React application in a centralized and predictable way.",
        "",
      ],
    },

    {
      title: "Lifecycle Method",
      definition: ["dddd", "dddd"],
    },

    {
      title: "What are React Hooks?",
      definition:
        "React Hooks are built-in functions that allow functional components to use React features like state, lifecycle methods, context, and performance optimizations without using class components. For example, I use useState for managing state, useEffect for API calls and other side effects, useRef for accessing DOM elements or storing mutable values, useContext to avoid prop drilling, useMemo and useCallback for performance optimization, and useReducer when the state logic becomes complex.",
    },

    {
      title: "7. useReducer",
      definition: [
        "useReducer is used to manage complex state logic. It works with a reducer function and dispatch actions to update state.",
      ],
    },

    {
      title: "6. useCallback",
      definition: [
        "useCallback is used to memoize a function so that the same function instance is reused unless its dependencies change. This helps prevent unnecessary child component re-renders.",
      ],
    },

    {
      title: "5. useMemo",
      definition: [
        "useMemo is used to memoize the result of an expensive calculation. It recalculates only when its dependencies change, improving performance.",
      ],
    },

    {
      title: "4. useContext",
      definition: [
        "useContext is used to share data between components without passing props through every intermediate component. This helps avoid prop drilling.",
      ],
    },

    {
      title: "3. useRef",
      definition: [
        "useRef is used to store a mutable value or access a DOM element without causing a component re-render.",
      ],
    },

    {
      title: "2. useEffect",
      definition: [
        "useEffect is used to perform side effects in React components. Common use cases include API calls, timers, event listeners, and updating the document title.",
      ],
    },

    {
      title: "1. useState",
      definition: [
        "useState is used to manage state in functional components. It returns an array with two elements: the current state value and a function to update it.",
      ],
    },

    {
      title: "React Query",
      definition: [
        "React Query is a library used to fetch, cache, and manage server data in React applications.",
        "React Query (இப்போது TanStack Query) என்பது API data-வை fetch, cache, update, sync செய்ய பயன்படும் ஒரு library.",
      ],
      example: `const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("/users");
      return res.json();
    },
  });`,
    },

    {
      title: "React Query (TanStack Query)",
      definition: [
        "React Query (TanStack Query) is a library used to manage server state in React. It helps fetch data from APIs, caches the data, handles loading and error states, and automatically refetches updated data. This reduces the need to write useEffect and manual state management for API calls.",
      ],
    },
    {
      title: "React Query Devtools",
      definition: "React Query Devtools is a tool for debugging React Query.",
    },

    {
      title: "Suspense",
      definition: [
        "React Suspense is a built-in feature that lets you display a fallback UI (such as a loading spinner or skeleton screen) while waiting for asynchronous content to become ready.",
        "It improves the user experience by preventing blank screens and allowing React to gracefully handle loading states.",
      ],
    },
    {
      title: "Memory Leaks",
      definition: [
        "Memory leaks occur when objects are not properly cleaned up or released from memory.",
        "Memory leaks can increase memory usage and cause the application to become slow, unstable, or crash.",
        "A memory leak occurs when memory that is no longer needed is not released.",
        "In React, memory leaks often happen when timers, event listeners, subscriptions, or API requests are not cleaned up when a component unmounts.",
        "Memory leaks can lead to increased memory consumption, poor performance, and application crashes.",
      ],
      example: `
useEffect(() => {
  const interval = setInterval(() => {
    console.log("Running...");
  }, 1000);

  return () => clearInterval(interval);
}, []);
`,
    },
    {
      title: "State Lifting ",
      definition: [
        "State Lifting  is a React pattern where state is moved from a child component to its closest common parent component.",
        "This allows multiple child components to access and share the same state through props.",
        "State Lifting என்பது React-ல் பயன்படுத்தப்படும் ஒரு pattern. இதில் Child Component-ல் இருக்கும் state-ஐ, அதைப் பயன்படுத்தும் அனைத்து Child Components-க்கும் பொதுவான (Closest Common) Parent Component-க்கு மாற்றுவது ஆகும்.",
      ],
      example: "",
    },

    {
      title: "Composition in React",
      definition: [
        "Building components by combining smaller components instead of inheriting from them.Composition allows components to be combined using props and children to share behavior and UI.",
      ],
      example: `Composition patterns
1️⃣ Children Pattern (Most Common)
2️⃣ Props-based Composition
3️⃣ Slot Pattern (Named Children)
4️⃣ Compound Components Pattern (Very Important 🔥)
5️⃣ Render Props Pattern
`,
    },

    {
      title: "Refactoring (மறுசீரமைப்பு) a React component",
      definition: [
        "Refactoring a React component means improving the code structure, readability, and maintainability without changing how it works.",
        "Refactoring is a process of modifying the existing code to make it more efficient, maintainable, and reusable.",
        "large component split panrathu",
        "repeated code remove panrathu",
        "reusable component create panrathu",
        "better naming use panrathu",
      ],
    },
    {
      title: "React Testing Library",
      definition: [
        "React Testing Library is a set of utilities (பல உதவிக்கருவிகளின் தொகுப்பு) for testing React components.",
      ],
    },
    {
      title: "What is the React Render Cycle? (Mental Visualizer)",
      definition: [
        "The React Render Cycle is the process by which React updates the DOM when the state or props of a component change.",
        "It involves several steps including the component's render method being called, the virtual DOM being updated, and the actual DOM being synchronized.",
      ],
    },
  ],
  nextjs: [
    {
      title: "Next js Version",
      definition: [
        "Next.js 12 → Introduced Middleware, improved performance, and better support for edge functions",
        "Next.js 13 → Introduced App Router, Server Components, and improved data fetching",
        "Next.js 14 → Improved stability of App Router, better caching, and performance optimizations",
        "Next.js 15 (latest) → Focus on performance, partial prerendering (PPR), and enhanced developer experience",
        "Next.js 16 → Introduced Middleware, improved performance, and better support for edge functions",
      ],
    },
    {
      title: "Next.js",
      definition: [
        "Next.js is a React framework used to build fast, scalable, and SEO-friendly web applications.",
        "It provides built-in features like routing, server-side rendering, and API handling.",
        "It supports multiple rendering methods such as CSR, SSR, SSG, and ISR.",
        "File-based Routing → Pages are created using files inside the 'pages' or 'app' folder.",
        "Server-Side Rendering (SSR) → Pages are rendered on the server before sending to browser.",
        "Static Site Generation (SSG) → Pages are pre-built at build time for faster performance.",
        "API Routes → Backend APIs can be created inside Next.js project.",
        "Image Optimization → Built-in Image component for faster loading.",
        "Full-stack support → Frontend + Backend in same project",
      ],
    },

    {
      title: "Server Components",
      definition: [
        "Components that run on the server and reduce JavaScript sent to the browser.",
        "Used for data fetching and better performance.",
        "Example: async function Page() { const data = await fetch(...); }",
      ],
    },
    {
      title: "Client Components",
      definition: [
        "Components that run in the browser and support React hooks like useState.",
        "Required for interactivity.",
        "Example: 'use client'; useState()",
      ],
    },

    {
      title: "Client Side Rendering (CSR) ",
      definition: [
        "Order பண்ணுங்க... cooking start ஆகும் 😂🔥",
        "Page first empty… then data entry… full build-up scene 😂🔥",
        "Client Side Rendering (CSR) is a rendering technique where the browser loads a minimal HTML page and uses JavaScript to render the content.",
        "All UI rendering happens in the browser (client side), not on the server.",

        "1. Initial load → Minimal or empty HTML is loaded",
        "2. JavaScript bundle is downloaded",
        "3. JavaScript executes in the browser",
        "4. Data is fetched from an API",
        "5. UI is rendered dynamically",

        "Example: React single-page applications (SPA) use CSR by default",
        "Flow: HTML → JS loads → API call → UI renders",
        "Example: useEffect(() => { fetch('/api').then(res => res.json()).then(setData); }, [])",
      ],

      example: `import React, { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.example.com/data")
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <div>
      <h1>CSR Example</h1>
      {data.map((item, index) => (
        <p key={index}>{item.name}</p>
      ))}
    </div>
  );
}`,
    },
    {
      title: "Server Side Rendering (SSR) ",
      definition: [
        "Customer வந்தவுடனே full meals ready 🍛😎",
        "Server Side Rendering (SSR) is a technique where the HTML page is generated on the server for every request and sent to the browser.",
        "The browser receives a fully rendered page, so content is visible immediately.",

        "1. User sends a request to the server",
        "2. Server fetches required data",
        "3. Server generates complete HTML",
        "4. HTML is sent to the browser",
        "5. Browser displays content instantly",
        "6. JavaScript hydrates the page to enable interactivity",

        "Example: Next.js uses SSR with getServerSideProps (Pages Router)",
        "In App Router, SSR is handled using Server Components and async data fetching",

        "SSR improves SEO and provides better initial load performance, but may be slower than CSR for repeated requests",
      ],

      example: `export async function getServerSideProps() {
  const res = await fetch("https://api.example.com/data");
  const data = await res.json();

  return {
    props: { data }
  };
}

export default function Page({ data }) {
  return (
    <div>
      <h1>SSR Example</h1>
      {data.map((item, index) => (
        <p key={index}>{item.name}</p>
      ))}
    </div>
  );
}`,
    },
    {
      title: "Static Site Generation (SSG) ",
      definition: [
        "Static Site Generation (SSG) is a rendering technique where HTML pages are generated at build time and reused for every request.",
        "The pages are pre-rendered and served as static files, making them extremely fast.",

        "1. During build time, data is fetched",
        "2. HTML pages are generated in advance",
        "3. Static files are deployed to a CDN/server",
        "4. When a user requests the page, the pre-built HTML is served instantly",

        "Example: Next.js uses SSG with getStaticProps (Pages Router)",
        "In App Router, SSG is achieved using fetch with cache: 'force-cache' or default static behavior",

        "SSG provides excellent performance and SEO because content is ready before the user request",
        "Best suited for pages where data does not change frequently (blogs, landing pages, documentation)",
      ],

      example: `export async function getStaticProps() {
  const res = await fetch("https://api.example.com/data");
  const data = await res.json();

  return {
    props: { data }
  };
}

export default function Page({ data }) {
  return (
    <div>
      <h1>SSG Example</h1>
      {data.map((item, index) => (
        <p key={index}>{item.name}</p>
      ))}
    </div>
  );
}`,
    },
    {
      title: "Incremental Static Regeneration (ISR) ",
      definition: [
        "Incremental Static Regeneration (ISR) is a technique that allows static pages to be updated after they are built, without rebuilding the entire site.",
        "It combines the benefits of SSG (fast performance) and SSR (fresh data).",

        "1. Page is generated at build time (like SSG)",
        "2. User requests the page → static HTML is served instantly",
        "3. After a specified time (revalidate), Next.js regenerates the page in the background",
        "4. New requests receive the updated page once regeneration is complete",

        "Example: Next.js uses ISR with getStaticProps and the 'revalidate' option",

        "ISR provides fast performance with the ability to keep content updated",
        "Best suited for pages where data changes occasionally (e-commerce, blogs, news sites)",
      ],

      example: `export async function getStaticProps() {
  const res = await fetch("https://api.example.com/data");
  const data = await res.json();

  return {
    props: { data },
    revalidate: 10 // Re-generate page every 10 seconds
  };
}

export default function Page({ data }) {
  return (
    <div>
      <h1>ISR Example</h1>
      {data.map((item, index) => (
        <p key={index}>{item.name}</p>
      ))}
    </div>
  );
}`,
    },
    {
      title: "Streaming",
      definition: [
        "Streaming is a rendering technique where parts of a webpage are sent to the browser progressively (படிப்படியாக) as they are ready, instead (அதற்குப் பதிலாக) of waiting for the entire page to be generated.",
        "Streaming என்றால், ஒரு webpage-ல உள்ள எல்லா data-வும் load ஆகும் வரை wait பண்ணாமல், ready ஆன பகுதிகளை browser-க்கு உடனே அனுப்புவது.",
        "It improves user experience by showing content faster.",
        "UI updates progressively in the browser",
        "Streaming is enabled using React Suspense and Server Components in Next.js App Router",
        "It improves perceived performance by reducing waiting time",
        "Best suited for pages with slow or multiple data sources",
      ],

      example: `import { Suspense } from "react";

async function SlowData() {
  const res = await fetch("https://api.example.com/data");
  const data = await res.json();

  return <div>{data[0].name}</div>;
}

export default function Page() {
  return (
    <div>
      <h1>Streaming Example</h1>

      <Suspense fallback={<p>Loading...</p>}>
        <SlowData />
      </Suspense>
      
    </div>
  );
}`,
    },

    {
      title: "Hybrid Rendering",
      definition: [
        "CSR + SSR + SSG + ISR எல்லாத்தையும் mix பண்ணி use பண்ணுறது",
        "Hybrid Rendering is a technique where multiple rendering methods (CSR, SSR, SSG, ISR) are used together in the same application.",
        "It allows developers to choose the best rendering strategy for each page or component.",

        "1. Some pages are pre-rendered (SSG)",
        "2. Some pages are rendered on request (SSR)",
        "3. Some parts load on client side (CSR)",
        "4. ISR can update static pages in the background",

        "Example: Next.js supports hybrid rendering by default, allowing different strategies per route",

        "It provides flexibility, performance, and scalability",
        "Best suited for real-world applications like e-commerce, dashboards, and large platforms",
        `🏠 Home Page → SSG (fast load)
📄 Product Page → ISR (updated data)
👤 User Dashboard → SSR (dynamic data)
🔍 Filters / Search → CSR (instant UI)`,
      ],

      example: `// SSG Page
export async function getStaticProps() {
  return { props: { type: "SSG Page" } };
}

// SSR Page
export async function getServerSideProps() {
  return { props: { type: "SSR Page" } };
}

// CSR Component
import { useEffect, useState } from "react";

function CSRComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api").then(res => res.json()).then(setData);
  }, []);

  return <div>CSR Data Loaded</div>;
}`,
    },

    // 🔥 OTHER CORE CONCEPTS
  ],
  typescript: [
    {
      title: "TypeScript",
      definition: [
        "TypeScript is a strongly typed programming language that builds on top of JavaScript.",
        "It adds static typing, interfaces, and modern features to improve code quality and maintainability.",
        "தமிழில்: TypeScript என்பது JavaScript-க்கு மேலாக type safety வழங்கும் programming language ஆகும்.",
      ],
      example: `let name: string = "John";
console.log(name);
`,
    },
    {
      title: "Static Typing",
      definition: [
        "Static typing allows developers to define variable types at compile time.",
        "It helps detect type-related errors before the code runs and improves code reliability.",
        "தமிழில்: Static Typing என்பது variable-களின் type-ஐ முன்கூட்டியே define செய்வது.",
      ],
      example: `let age: number = 25;
let username: string = "Simbu";
`,
    },
    {
      title: "Type Inference",
      definition: [
        "Type inference automatically detects a variable's type based on its assigned value.",
        "It reduces the need to explicitly define types in TypeScript.",
        "தமிழில்: Type Inference என்பது value அடிப்படையில் type-ஐ TypeScript தானாக கண்டறிவது.",
      ],
      example: `let username = "Simbu";
// TypeScript automatically infers this as string

let age = 25;
// TypeScript automatically infers this as number
`,
    },
    {
      title: "Interface",
      definition: [
        "An interface in TypeScript is used to define the structure and shape of an object.",
        "It helps enforce type safety and improves code readability and maintainability.",
        "தமிழில்: Interface என்பது object-ன் structure மற்றும் properties-ஐ define செய்ய பயன்படுத்தப்படுகிறது.",
      ],
      example: `
interface User {
    name: string;
    age: number;
}

const user: User = {
    name: "Simbu",
    age: 25,
};
`,
    },
    {
      title: "Type Alias",
      definition: [
        "A type alias in TypeScript is used to create a custom name for a type.",
        "It can be used for primitive types, objects, unions, tuples, and more.",
        "தமிழில்: Type Alias என்பது ஒரு type-க்கு custom பெயர் உருவாக்க பயன்படுத்தப்படுகிறது.",
      ],
      example: `
type User = {
    name: string;
    age: number;
};

const user: User = {
    name: "Simbu",
    age: 25,
};

`,
    },
    {
      title: "Union Type",
      definition: [
        "A union type allows a variable to hold multiple types of values.",
        "It is created using the | (pipe) operator in TypeScript.",
        "தமிழில்: Union Type என்பது ஒரு variable பல type values-ஐ வைத்திருக்க அனுமதிக்கும் type ஆகும்.",
      ],
      example: `
Basic Union Type
let value: string | number;
value = "Simbu";
value = 25;

String Literal Union
type Color = "red" | "green" | "blue";
let color: Color = "red";

Array Union
let numbers: (number | string)[] = [1, 2, 3, "4", "5"];

Object Union
type User = {
  name: string;
  age: number;
};

let user: User | null = {
  name: "Simbu",
  age: 25,
};


type SuccessResponse = { status: "success"; data: Order[] };
type ErrorResponse  = { status: "error"; message: string };

type ApiResponse = SuccessResponse | ErrorResponse;

const handle = (res: ApiResponse) => {
  if (res.status === "success") {
    console.log(res.data);    // ✅ data இருக்கும்
  } else {
    console.log(res.message); // ✅ message இருக்கும்
  }
};



function Union
function add(a: number | string, b: number | string) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    return a.toString() + b.toString();
  }
}

Nullable Union 

const [order, setOrder] = useState<Order | null>(null);

// check பண்ணாம access பண்ண வேண்டாம்
if (order) {
  console.log(order.orderNumber); // ✅ safe
}


`,
    },
    {
      title: "Intersection Type",
      definition: [
        "An intersection type combines multiple types into a single type.",
        "It is created using the & (ampersand) operator in TypeScript.",
        "All properties from the combined types must be included.",
        "தமிழில்: Intersection Type என்பது பல types-ஐ ஒன்றாக இணைத்து ஒரு single type உருவாக்க பயன்படுகிறது.",
      ],
      example: `type User = {
  name: string;
};

type Admin = {
  role: string;
};

type AdminUser = User & Admin;

const user: AdminUser = {
  name: "Simbu",
  role: "Admin",
};
`,
    },
    {
      title: "Generics",
      definition: [
        "Generics allow creating reusable components, functions, and types that work with different data types.",
        "They help provide type safety while keeping code flexible and reusable.",
        "தமிழில்: Generics என்பது பல data types-உடன் வேலை செய்யும் reusable code உருவாக்க பயன்படுகிறது.",
      ],
      example: `function getData<T>(value: T): T {
  return value;
}

const result1 = getData<string>("Hello");
const result2 = getData<number>(100);
`,
    },
    {
      title: "Enum",
      definition: [
        "An enum in TypeScript is used to define a set of named constant values.",
        "It helps improve code readability and maintainability.",
        "தமிழில்: Enum என்பது named constant values-ஐ define செய்ய பயன்படுத்தப்படும் TypeScript feature ஆகும்.",
      ],
      example: `
      enum Role {
  Admin = "admin",
  User = "user",
}

const userRole: Role = Role.Admin;
`,
    },
    {
      title: "Tuple",
      definition: [
        "A tuple is a special type of array in TypeScript where the number of elements and their types are fixed.",
        "It allows storing multiple values with different types in a specific order.",
        "தமிழில்: Tuple என்பது fixed length மற்றும் fixed types கொண்ட special array ஆகும்.",
      ],
      example: `let user: [string, number];

user = ["Simbu", 25];

console.log(user);
`,
    },
    {
      title: "Any",
      definition: [
        "The any type in TypeScript allows a variable to hold any type of value.",
        "It disables type checking for that variable.",
        "தமிழில்: Any என்பது எந்த type value-யையும் store செய்ய அனுமதிக்கும் TypeScript type ஆகும்.",
      ],
      example: `let data: any;

data = "Simbu";
data = 25;
data = true;

console.log(data);
`,
    },
    {
      title: "Unknown",
      definition: [
        "The unknown type in TypeScript represents a value whose type is not known.",
        "It is safer than the any type because type checking is required before using the value.",
        "தமிழில்: Unknown என்பது type தெரியாத value-ஐ represent செய்யும் TypeScript type ஆகும்.",
      ],
      example: `let value: unknown;

value = "Simbu";
value = 25;

if (typeof value === "string") {
  console.log(value.toUpperCase());
}
`,
    },
    {
      title: "Void",
      definition: [
        "The void type in TypeScript represents the absence of a return value.",
        "It is commonly used for functions that do not return anything.",
        "தமிழில்: Void என்பது எந்த value-யும் return செய்யாத function-களுக்கு பயன்படுத்தப்படும் TypeScript type ஆகும்.",
      ],
      example: `function greet(): void {
  console.log("Hello");
}
greet();
`,
    },
    {
      title: "Never",
      definition: [
        "The never type in TypeScript represents values that never occur.",
        "It is commonly used for functions that throw errors or never finish execution.",
        "தமிழில்: Never என்பது ஒருபோதும் value return செய்யாத நிலையை குறிக்கும் TypeScript type ஆகும்.",
      ],
      example: `function throwError(message: string): never {
  throw new Error(message);
}
throwError("Something went wrong");
`,
    },
    {
      title: "Type Assertion",
      definition: [
        "Type assertion is used to tell TypeScript the specific type of a value.",
        "It helps developers override TypeScript's inferred type when necessary.",
        "Type assertion can be done using the as keyword or angle bracket syntax.",
        "தமிழில்: Type Assertion என்பது value-ன் type-ஐ developer manually குறிப்பிட பயன்படுத்தப்படுகிறது.",
      ],
      example: `let value: unknown = "Hello";
let strLength: number = (value as string).length;
console.log(strLength);


const input = e.target as HTMLInputElement;
const data = response.data as Order;

`,
    },
    {
      title: "Non-null Assertion",
      example: `const user = localStorage.getItem("user")!;
      const role = user?.role ?? "user";
      `,
    },
  ],
  nodejs: [
    {
      title: "What is Node.js?",
      definition: [
        "Node.js is an open-source, cross-platform JavaScript runtime environment that allows developers to run JavaScript outside the browser.",
        "It is built on Chrome's V8 JavaScript engine and is widely used for building fast and scalable server-side applications.",
        "தமிழில்: Node.js என்பது browser-க்கு வெளியே JavaScript-ஐ இயக்க உதவும் runtime environment.",
      ],
    },
    {
      title: "What are the features of Node.js?",
      definition: [
        "Asynchronous and event-driven",
        "Non-blocking I/O ",
        "Single-threaded event loop",
        "Fast execution using V8 engine",
        "Cross-platform",
        "Scalable",
      ],
    },
    {
      title: "NPM",
      definition: [
        "NPM (Node Package Manager) is the default package manager used to install, manage, and share JavaScript packages.",
        "It helps developers manage project dependencies efficiently.",
        "தமிழில்: NPM என்பது JavaScript packages-ஐ install, manage, மற்றும் share செய்ய பயன்படும் package manager ஆகும்.",
      ],
    },
    {
      title: "package.json",
      definition: [
        "package.json is the configuration file that stores project information, dependencies, scripts, version, and other metadata required to manage the application.",
      ],
    },

    {
      title: "What is package-lock.json?",
      definition: [
        "package-lock.json is an automatically generated file by npm that records the exact versions of all installed dependencies and their sub-dependencies. It ensures (உறுதிசெய்கிறது) that every developer and deployment environment installs the same package versions.",
      ],
    },
    {
      title: "What is the difference between Promise and async/await?",
      definition: [
        "A Promise is an object that represents the eventual(இறுதியில்) completion(நிறைவு பெறுவதை) (or failure) of an asynchronous operation and its resulting value.",
        "Promises use .then() and .catch() for asynchronous operations.",
        "async/await provides cleaner and more readable asynchronous code.",
      ],
    },
    {
      title: "What is callback hell?",
      definition: [
        "Callback hell occurs (நிகழ்கிறது) when multiple callbacks are nested inside each other.",
        "It makes code difficult to read and maintain.",
        "Callback Hell-ஐ தவிர்க்க: Promises, async/await",
      ],
    },
    {
      title: "Error Handling (பிழை கையாளுதல்)",
      definition: [
        "Error Handling is the process of detecting, catching, and managing errors in a Node.js application to prevent crashes and ensure smooth execution. It helps provide meaningful error responses to users. In Node.js, errors are commonly handled using try...catch, Promise .catch(), async/await, and centralized Express error-handling middleware. The Express error-handling middleware uses four parameters: err, req, res, and next.",
      ],
    },

    {
      title:
        "What is the difference between setTimeout(), setImmediate(), and process.nextTick()?",
      definition: [
        "process.nextTick() executes before the next event loop iteration.",
        "setImmediate() executes after I/O events.",
        "setTimeout(fn, 0) executes in the Timers phase.",
      ],
    },
    {
      title:
        "What is the difference between synchronous and asynchronous programming?",
      definition: [
        "Synchronous code executes line by line.",
        "Asynchronous code allows other operations to continue while waiting for a task to complete.",
      ],
    },

    {
      title: "What is the difference between require() and import?",
      definition: [
        "require() is used in CommonJS modules.",
        "import is used in ES Modules.",
        "require() loads modules synchronously.",
        "import supports static analysis and modern JavaScript features.",
      ],
    },

    {
      title:
        "What is the difference between fs.readFile() and fs.readFileSync()?",
      definition: [
        "fs.readFile() is asynchronous and non-blocking.",
        "fs.readFileSync() is synchronous and blocks execution until the file is read.",
      ],
    },
    {
      title: "What are Streams in Node.js?",
      definition: [
        "Streams process data piece by piece instead of loading the entire file into memory.",
        "Types: Readable, Writable, Duplex, Transform.",
      ],
    },
    {
      title: "What is a Buffer?",
      definition: [
        "A Buffer is used to handle binary data in Node.js.",
        "It temporarily stores raw binary data.",
      ],
    },
    {
      title:
        "What is the difference between spawn(), exec(), fork(), and execFile()?",
      definition: [
        "spawn() Starts a new process and streams data while it runs. Best for large output.",
        "exec()  Executes a shell command and returns the complete output.",
        "fork() Creates a new Node.js process specifically to run another Node.js file.",
        "execFile()  Executes a file directly and returns the complete output.",
      ],
    },

    {
      title: "What is clustering in Node.js?",
      definition: [
        "Clustering in Node.js is a technique that allows you to create multiple Node.js processes (called worker processes) to take advantage of multi-core CPUs. All workers can share the same server port, enabling your application to handle more requests concurrently.",
        "Normally, a Node.js application runs in a single process and uses only one CPU core. With clustering, you can utilize all available CPU cores.",
        "Web Server-ஐ Scale செய்ய பயன்படும்",
        "பல Worker Process உருவாகும்",
        "அனைத்து Worker-களும் ஒரே Port-ஐ Share செய்யும்",
        "அதிக Traffic-ஐ Handle செய்ய பயன்படும்",
      ],
    },
    {
      title: "What are child processes in Node.js?",
      definition: [
        "A Child Process in Node.js is a separate process created from the main Node.js process. It allows you to execute system commands, run other programs, or perform CPU-intensive tasks without blocking the main event loop.",
        "வேறு Program அல்லது Task-ஐ இயக்க பயன்படும்",
        "தனி Process உருவாகும்",
        "Port Share செய்யாது",
        "Heavy Task-களுக்கு பயன்படும்",
      ],
    },

    {
      title:
        "What is the difference between process.exit() and process.kill()?",
      definition: [
        "process.exit() terminates (முடிவடைகிறது) the current Node.js process.",
        "process.kill() sends a signal to another process using its PID.",
      ],
    },
    {
      title: "What is Non-blocking?",
      definition: [
        "Non-blocking means the program does not wait for one operation to finish before executing the next one. Instead, it continues running other tasks while the operation completes in the background.",
        "Non-blocking-na oru operation complete ஆகுற வரைக்கும் wait பண்ணாது. அதுக்கு பதிலா next task-ஐ execute பண்ணிடும். Operation complete ஆன பிறகு callback, Promise, அல்லது async/await மூலம் result handle பண்ணலாம்.",
      ],
    },
    {
      title: "Blocking",
      definition: [
        "Blocking means the program waits for an operation to complete before executing the next statement. During this time, the execution is paused until the current task finishes.",
        "Blocking-na oru operation complete ஆகுற வரைக்கும் program wait பண்ணும். அந்த operation முடியும் வரை next statement execute ஆகாது. Operation complete ஆன பிறகுதான் next task execute ஆகும்.",
      ],
    },
  ],
  express: [
    {
      title: "What is Express.js?",
      definition: [
        "Express.js is a minimal and flexible web framework for Node.js used to build APIs and web applications.",
        "It simplifies routing, middleware handling, and server creation.",
        "தமிழில்: Express.js என்பது Node.js-க்கு பயன்படுத்தப்படும் ஒரு lightweight web framework ஆகும். இது APIs மற்றும் web applications உருவாக்க உதவுகிறது.",
      ],
    },
    {
      title: "Why use Express.js?",
      definition: [
        "Easy routing",
        "Middleware support",
        "REST API development",
        "Fast development",
        "Template engine support",
        "Error handling",
        "Static file serving",
      ],
    },
    {
      title: "What is Middleware?",
      definition: [
        "Middleware is a function that runs between the client request and the server response. It can process the request before it reaches the route handler or process the response before it is sent back to the client.",
        "They are commonly used for logging, authentication, validation, error handling, and parsing request data.",
        "Client request server-ku varumbodhu, route-ku direct-a pogama, first middleware execute aagum. Adhu request-a check pannum, modify pannum, validate pannum. Athukkapuram next() call pannina next middleware illa route handler-ku request pogum.",
        "next() is used to pass control to the next middleware or the route handler. If we don't call next(), the request will stop there and the client won't get a response.",
      ],
    },
    {
      title: "Types of Middleware",
      definition: [
        "Application Middleware app.use(express.json());",
        "Router Middleware router.use(authMiddleware);",
        "Built-in Middleware",
        "Error-handling Middleware",
        "Third-party Middleware cors(),helmet(),morgan()",
      ],
    },

    {
      title: "Routing",
      definition: [
        "Routing defines how an application responds to client requests at specific endpoints (URLs).",
        "Different HTTP methods can be handled for different routes.",
        "Example: app.get('/user', (req,res)=>res.send('User Page'));",
      ],
    },

    {
      title: "What is Express Router?",
      definition: [
        "Express Router is a mini Express application that helps organize routes into separate modules. Instead of writing all routes in one file, we can group related routes together and keep the code clean and maintainable.",
        "It improves project structure and maintainability.",
        "Express Router use pannrathu routes-a separate files-la organize panna. Example, employee routes oru file, attendance routes oru file, leave routes oru file. Ithu project maintain panna easy",
      ],
    },
    {
      title: "How do you use Router?",
      definition: [
        "Create routes using express.Router().",
        "Import the router into app.js or server.js.",
        "Register it using app.use().",
      ],
    },

    {
      title: "What are HTTP Methods?",
      definition: [
        "GET - Retrieve data.",
        "POST - Create new data.",
        "PUT - Replace existing data.",
        "PATCH - Update specific fields.",
        "DELETE - Remove data.",
      ],
    },
    {
      title: "What is a REST API?",
      definition: [
        "A REST API follows REST principles.",
        "It uses HTTP methods like GET, POST, PUT, PATCH, and DELETE for CRUD operations.",
      ],
    },
    {
      title: "Difference between PUT and PATCH",
      definition: [
        "PUT replaces the entire resource.",
        "PATCH updates only specific fields.",
      ],
    },
    {
      title: "Difference between req.params, req.query, and req.body",
      definition: [
        "req.params contains URL parameters.",
        "req.query contains query string parameters.",
        "req.body contains data sent in the request body.",
      ],
    },

    {
      title: "Difference between app.use() and app.get()",
      definition: [
        "app.use() works for all HTTP methods.",
        "app.use() is mainly used for middleware.",
        "app.get() handles only GET requests.",
        "app.get() is used for specific route handling.",
      ],
    },

    {
      title: "Difference between res.send() and res.json()",
      definition: [
        "res.send() can send strings, HTML, Buffers, or objects.",
        "res.json() specifically sends JSON responses.",
      ],
    },

    {
      title: "What is express.json()?",
      definition: [
        "express.json() is built-in middleware.",
        "It parses incoming JSON request bodies.",
      ],
    },
    {
      title: "What is express.urlencoded()?",
      definition: [
        "It parses URL-encoded form data.",
        "It is commonly used for HTML form submissions.",
      ],
    },
    {
      title: "What is CORS?",
      definition: [
        "CORS (Cross-Origin Resource Sharing) is a security mechanism implemented by browsers that controls whether a web application from one origin can access resources from another origin.",
      ],
    },
    {
      title: "What is Helmet?",
      definition: [
        "Helmet is Express middleware.",
        "It improves security by setting HTTP response headers.",
      ],
    },
    {
      title: "Security (பாதுகாப்பு)",
      definition: [
        "Security is the practice of protecting a server and application from unauthorized access, attacks, and vulnerabilities.",
        "It helps secure user data, improve application safety, and prevent common web attacks.",
        "தமிழில்: Security என்பது server மற்றும் application-ஐ attacks மற்றும் unauthorized access-இலிருந்து பாதுகாப்பது.",
      ],
      example: `const helmet = require("helmet");

app.use(helmet());
`,
    },
    {
      title: "What is Morgan?",
      definition: [
        "Morgan is HTTP request logging middleware.",
        "It logs incoming requests for debugging and monitoring.",
      ],
    },
    {
      title: "What is Rate Limiting?",
      definition: [
        "Rate limiting restricts the number of requests from a client.",
        "It helps prevent abuse and DDoS attacks.",
        "Status Code: 429 Too many requests. Please try again later.",
      ],
    },
    {
      title: "How do you handle file uploads?",
      definition: [
        "Use the Multer middleware.",
        "It supports uploading single or multiple files.",
      ],
    },

    {
      title: "How do you serve static files?",
      definition: [
        "Use express.static() middleware.",
        "It serves HTML, CSS, JavaScript, images, and other static files.",
      ],
    },
    {
      title: "What is the MVC Pattern?",
      definition: [
        "Model handles database logic.",
        "View handles the user interface.",
        "Controller contains business logic and handles requests.",
      ],
    },
    {
      title: "What are Environment Variables?",
      definition: [
        "Environment variables store configuration values.",
        "Examples include PORT, database URL, and secret keys.",
      ],
    },
    {
      title: "How do you access Environment Variables?",
      definition: [
        "Use the dotenv package.",
        "Access values using process.env.",
      ],
    },
    {
      title: "How do you secure an Express API?",
      definition: [
        "Use Helmet.",
        "Enable CORS properly.",
        "Validate user input.",
        "Use JWT authentication.",
        "Hash passwords with bcrypt.",
        "Apply rate limiting.",
        "Use HTTPS.",
        "Store secrets in environment variables.",
      ],
    },
    {
      title: "How do you organize a large Express project?",
      definition: [
        "Separate code into controllers, models, routes, middleware, services, config, and utils.",
        "Follow the MVC architecture.",
      ],
    },
    {
      title: "Explain the Express Request Lifecycle.",
      definition: [
        "Client sends an HTTP request.",
        "Middleware executes.",
        "Route is matched.",
        "Controller processes the request.",
        "Database operations are performed if needed.",
        "Response is sent to the client.",
        "Error middleware handles any exceptions.",
      ],
    },
  ],
  node_and_express: [
    {
      title: "Compression (சுருக்கம்)",
      definition: [
        "Compression is a technique used to reduce the size of response data sent from the server.",
        "It helps improve application performance and reduces bandwidth usage.",
      ],
      example: `const compression = require("compression");

app.use(compression());
`,
    },
    {
      title: "Logging (பதிவு செய்தல்)",
      definition: [
        "Logging is a technique used to record information about requests, responses, and application events.",
        "It helps developers monitor, debug, and track server activity more effectively.",
        "தமிழில்: Logging என்பது application அல்லது server-ல் நடக்கும் செயல்களை பதிவு செய்வது.",
      ],
      example: `const morgan = require("morgan");

app.use(morgan("combined"));
`,
    },
    {
      title: "Authentication / Authorization (அங்கீகரிப்பு / அனுமதி)",
      definition: [
        "Authentication is the process of verifying a user's identity.",
        "Authorization is the process of determining what a user is allowed to access.",
        "Both are commonly used to secure applications and protect resources.",
        "தமிழில்: Authentication என்பது user's identity-ஐ verify செய்வது.",
        "தமிழில்: Authorization என்பது user-க்கு எந்த resources-ஐ access செய்ய அனுமதி உள்ளது என்பதை நிர்ணயிப்பது.",
      ],
      example: `const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: "Access denied",
    });
  }

  next();
};

app.use(verifyToken);
`,
    },
    {
      title: "CORS (குறுக்கு-மூல கோரிக்கைகள்)",
      definition: [
        "CORS (Cross-Origin Resource Sharing) is a technique used to allow or restrict requests between different domains or origins.",
        "It is commonly used to enable secure communication between frontend and backend applications running on different origins.",
        "தமிழில்: CORS என்பது different domains அல்லது origins-களுக்கு இடையில் requests அனுமதிப்பதற்கான ஒரு பாதுகாப்பு முறை.",
      ],
      example: `const cors = require("cors");

app.use(cors());
`,
    },

    {
      title: "REST API",
      definition: [
        "REST API is an architectural style that uses HTTP methods like GET, POST, PUT, DELETE.",
        "It is used for communication between client and server.",
        "Example: app.post('/users', (req,res)=>res.send('User Created'));",
      ],
    },

    {
      title: "Environment Variables",
      definition: [
        "Environment variables are used to store sensitive data like API keys and ports outside the code.",
        "They improve security and flexibility.",
        "Example: process.env.PORT",
      ],
    },

    {
      title: "Body Parser",
      definition: [
        "Body parser middleware parses incoming request bodies into JSON or URL-encoded format.",
        "It allows developers to access request data using req.body in APIs.",
        "தமிழில்: Body Parser என்பது request body data-ஐ parse செய்து req.body மூலம் access செய்ய உதவும் middleware ஆகும்.",
      ],
      example: `app.use(express.json());

app.post("/user", (req, res) => {
  console.log(req.body);

  res.send("Data received");
});
`,
    },
  ],
  mongodb: [
    {
      title: "What is MongoDB?",
      definition: [
        "MongoDB is a NoSQL, document-oriented database.",
        "It stores data in flexible JSON-like documents called BSON.",
      ],
    },
    {
      title: "What are the features of MongoDB?",
      definition: [
        "NoSQL database",
        "Document-oriented storage",
        "Schema-less design",
        "High performance",
        "Horizontal scaling",
        "Replication",
        "Indexing",
        "Aggregation framework",
      ],
    },
    {
      title: "What is NoSQL?",
      definition: [
        "NoSQL databases store data in formats other than relational tables.",
        "Examples: MongoDB, Redis, Cassandra, Neo4j.",
      ],
    },
    {
      title: "Difference between SQL and MongoDB",
      definition: [
        "SQL uses Tables, MongoDB uses Collections.",
        "SQL uses Rows, MongoDB uses Documents.",
        "SQL uses Columns, MongoDB uses Fields.",
        "SQL has a fixed schema, MongoDB has a flexible schema.",
        "SQL uses SQL queries, MongoDB uses MQL (MongoDB Query Language).",
      ],
    },
    {
      title: "What is a Database?",
      definition: [
        "A Database is a container that holds multiple collections.",
      ],
    },
    {
      title: "What is a Collection?",
      definition: [
        "A Collection is a group of related documents.",
        "It is similar to a table in SQL.",
      ],
    },
    {
      title: "What is a Document?",
      definition: [
        "A Document is a single record in MongoDB.",
        "It stores data in key-value pairs using BSON format.",
      ],
    },
    {
      title: "What is BSON?",
      definition: [
        "BSON stands for Binary JSON.",
        "MongoDB stores documents internally in BSON format.",
      ],
    },
    {
      title: "What is _id?",
      definition: [
        "Every MongoDB document contains a unique _id field.",
        "It uniquely identifies each document.",
      ],
    },
    {
      title: "What is ObjectId?",
      definition: [
        "ObjectId is MongoDB's default unique identifier.",
        "It is a 12-byte hexadecimal value.",
      ],
    },
    {
      title: "How do you insert a document?",
      definition: [
        "Use insertOne() to insert a single document.",
        "Use insertMany() to insert multiple documents.",
      ],
    },
    {
      title: "How do you find documents?",
      definition: [
        "find() returns all matching documents.",
        "findOne() returns the first matching document.",
      ],
    },
    {
      title: "How do you update documents?",
      definition: [
        "Use updateOne() to update one document.",
        "Use updateMany() to update multiple documents.",
        "Use the $set operator to update specific fields.",
      ],
    },
    {
      title: "How do you delete documents?",
      definition: [
        "Use deleteOne() to delete one document.",
        "Use deleteMany() to delete multiple documents.",
      ],
    },
    {
      title: "Difference between deleteOne() and deleteMany()",
      definition: [
        "deleteOne() removes only one matching document.",
        "deleteMany() removes all matching documents.",
      ],
    },
    {
      title: "Difference between updateOne() and updateMany()",
      definition: [
        "updateOne() updates one document.",
        "updateMany() updates all matching documents.",
      ],
    },
    {
      title: "What are MongoDB Operators?",
      definition: [
        "$set",
        "$inc",
        "$gt",
        "$gte",
        "$lt",
        "$lte",
        "$eq",
        "$ne",
        "$in",
        "$nin",
        "$and",
        "$or",
      ],
    },
    {
      title: "What is Indexing?",
      definition: [
        "Indexes improve query performance.",
        "They reduce the time required to search documents.",
      ],
    },
    {
      title: "What is Aggregation?",
      definition: [
        "Aggregation processes documents through multiple stages.",
        "It is used for filtering, grouping, sorting, and calculations.",
      ],
    },
    {
      title: "Common Aggregation Stages",
      definition: [
        "$match",
        "$group",
        "$sort",
        "$project",
        "$limit",
        "$skip",
        "$lookup",
        "$unwind",
      ],
    },
    {
      title: "What is $lookup?",
      definition: [
        "$lookup performs a left outer join between collections.",
        "It combines related documents from different collections.",
      ],
    },
    {
      title: "What is Replication?",
      definition: [
        "Replication copies data from a primary server to one or more secondary servers.",
        "It provides high availability and failover support.",
      ],
    },
    {
      title: "What is Sharding?",
      definition: [
        "Sharding distributes data across multiple servers.",
        "It improves scalability and performance.",
      ],
    },
    {
      title: "What is Mongoose?",
      definition: [
        "Mongoose is an ODM (Object Data Modeling) library for MongoDB and Node.js.",
        "It provides schemas, models, validation, and middleware.",
      ],
    },
    {
      title: "What is a Schema in Mongoose?",
      definition: [
        "A Schema defines the structure of documents.",
        "It specifies field types, validation, and default values.",
      ],
    },
    {
      title: "What is a Model in Mongoose?",
      definition: [
        "A Model is created from a Schema.",
        "It is used to perform CRUD operations on a collection.",
      ],
    },
    {
      title: "Difference between Schema and Model",
      definition: [
        "Schema defines the structure of documents.",
        "Model interacts with the MongoDB collection.",
      ],
    },
    {
      title: "What is populate()?",
      definition: [
        "populate() replaces referenced ObjectIds with actual documents.",
        "It is used to fetch related data from another collection.",
      ],
    },
    {
      title: "Difference between Embedded Documents and References",
      definition: [
        "Embedded documents store related data inside one document.",
        "References store related data in separate collections using ObjectIds.",
      ],
    },
    {
      title: "What are MongoDB Validation Rules?",
      definition: [
        "Validation ensures documents follow defined rules.",
        "Examples include required fields, data types, min/max values, and custom validation.",
      ],
    },
    {
      title: "Explain the MongoDB Query Execution Flow.",
      definition: [
        "Client sends a query.",
        "MongoDB checks for an index.",
        "If an index exists, an index scan is performed.",
        "Otherwise, a collection scan is performed.",
        "Matching documents are returned to the client.",
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
        "https://youtu.be/rhD12yd5VyI",
        "https://github.com/theshubhamgour/docker-tutorial",
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
        "1. Image Build : docker build -t course-app .",
        "2. Container Run: docker run -d --name course-app-container -p 4001:4001 course-app",
        "3. Stop Container : docker stop course-app-container",
        "4. Remove Container : docker rm course-app-container",
        "5. Check Running Containers : docker ps",
        "6. Check All Containers : docker ps -a",
        "7. Logs: docker logs course-app-container",
        "8. Start Container : docker start course-app-container",
        "9. Remove Image : docker rmi course-app",
        "10. Check Images : docker images",
        "11. Remove All Images : docker rmi $(docker images -a -q)",
        "12. Remove All Containers : docker rm $(docker ps -a -q)",
        "13. Remove All Containers and Images : docker rm $(docker ps -a -q) && docker rmi $(docker images -a -q)",
      ],
    },
    {
      title: "Frontend Dockerfile",
      definition: [
        "Build Images : docker build -t course-app .",
        "Run Containers : docker run -d --name course-app-container -p 5173:5173 course-app",
      ],
      example: `
FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]
      `,
    },
    {
      title: "Backend Dockerfile",
      definition: [
        "Build Images : docker build -t course-app .",
        "Run Containers : docker run -d --name course-app-container -p 4001:4001 course-app",
      ],
      example: `
FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4000

CMD ["npm", "run", "dev"]`,
    },
    {
      title: "Docker Compose",
      definition: [
        "docker-compose.yml",
        "Build Images : docker-compose build",
        "Run Containers : docker-compose up -d",
        "Stop Containers : docker-compose stop",
        "Remove Containers : docker-compose rm",
      ],
      example: `
services:
frontend:
build: ./course-app
ports:
- "5173:5173"

backend:
build: ./server
ports:
- "4000:4000"
environment:
MONGODB_URI: your_mongodb_connection_string
      `,
    },
    {
      title: "What is a Docker Container ?",
      definition: [
        "A Docker container is a lightweight, standalone package that includes everything needed to run an application.",
        "Example: docker run -d nginx",
      ],
    },
    {
      title: "What is a Docker Image ?",
      definition: [
        "A Docker image is a read-only template used to create containers.",
        "Example: docker pull node",
      ],
    },
    {
      title: "What is a Dockerfile ?",
      definition: [
        "A Dockerfile is a script with instructions to build Docker images.",
        "Example: FROM node:18\nWORKDIR /app\nCOPY . .\nRUN npm install\nCMD ['node','app.js']",
      ],
    },
    {
      title: "What is a Docker Compose ?",
      definition: [
        "Docker Compose is a tool to run multi-container applications.",
        "Example: docker-compose up",
      ],
    },
    {
      title: "What is a docker-compose.yml ?",
      definition: [
        "It is a config file to define services, networks, and volumes.",
        "Example: version: '3'\nservices:\n  app:\n    image: node\n    ports:\n      - '3000:3000'",
      ],
    },
    {
      title: "Docker vs Virtual Machine",
      definition: [
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
      title: "Docker Compose Commands",
      definition: [
        "Docker Compose commands?",
        "docker-compose up, down, build, ps",
        "Example: docker-compose up -d",
      ],
    },
  ],
  jenkins: [
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
  ],
  kubernetes: [
    {
      title: "Kubernetes",
      definition: [
        "What is Kubernetes?",
        "Kubernetes is an open-source container orchestration platform for automating deployment, scaling, and management of containerized applications.",
        "Example: Kubernetes cluster",
      ],
    },
    {
      title: "Kubernetes Command",
      definition: [
        "Example: kubectl get pods",
        "Example: kubectl get pods",
        "Example: kubectl get pods",
        "Example: kubectl get pods",
      ],
    },
    {
      title: "Kubernetes Deployment",
      definition: [
        "What is a Kubernetes deployment?",
        "A Kubernetes deployment is a set of instructions that Kubernetes executes to build, test, and deploy software.",
        "Example: Kubernetes deployment",
      ],
    },
  ],
  dataStructure: [
    {
      title: "DSA Speedio Meter ",
      definition: [
        "Time Complexity",
        "Big O Notation",
        "O(n2)",
        "O(n log n)",
        "O(n)",
        "O(log n)",
        "O(1)",
      ],
    },
  ],
  ECommerce: [
    {
      title: "ECommerce - Online Buying & Selling Platform",
      definition: [
        "ECommerce is the buying and selling of goods and services over the internet.",
      ],
    },
    {
      title: "Payroll Management System",
      definition: [
        "A payroll management system is a software solution that helps businesses manage and process employee compensation and benefits.",
        "Payroll is a system used to calculate employee salaries, deductions, taxes, bonuses, and generate payslips.",
        "Payroll Features",
        "Employee Management",
        "Salary Calculation",
        "Attendance Integration",
        "Leave Management",
        "Overtime Calculation",
        "Bonus & Incentives",
        "PF (Provident Fund)",
        "ESI (Employees' State Insurance)",
        "Professional Tax (PT)",
        "Income Tax (TDS)",
        "Deductions",
        "Payslip Generation",
        "Salary Reports",
        "Bank Transfer Details",
      ],
      example: `QuickBooks, Xero, Gusto`,
    },
    {
      title: "POS - Point of Sale",
      definition: [
        "https://www.youtube.com/watch?v=nD0IyJLKio4",
        "Point of Sale system for managing sales transactions.",
        "Used in retail stores to process customer purchases.",
        "Bill podura system + payment collect pannura software/hardware",
        "Billing software",
        "Barcode scanner",
        "Receipt printer",
        "Payment machine",
        "Inventory management",
        "Example: Square, Shopify POS",
      ],
      example: `Supermarket, Restaurant, Medical shop, Clothing shop, Tea shop`,
    },
    {
      title: "B2B - Business to Business",
      definition: [
        "Business to Business Ecommerce Website nu meaning.",
        "Oru business, இன்னொரு business-க்கு online-ல products அல்லது services sell பண்ணுற website.",
        "Company ➝ Company ku sell pannum",
        "Wholesale website",
      ],
      example: `Alibaba, IndiaMART, Udaan`,
    },
    {
      title: "E-Commerce Software as a Service (SaaS)",
      definition: [
        "அதாவது, நீங்களே backend, server, payment, hosting எல்லாம் புதிதாக உருவாக்க வேண்டியதில்லை. ஏற்கனவே தயாராக இருக்கும் ஒரு platform-ஐ மாதாந்திர (Monthly) அல்லது வருடாந்திர (Yearly) subscription செலுத்தி பயன்படுத்தலாம்.",
      ],
      example: `Shopify, WooCommerce, Magento`,
    },
    {
      title: "CRM = Customer Relationship Management",
      definition: [
        "CRM is a technology for managing all your company's relationships and interactions with customers and potential customers.",
        "It helps businesses improve their relationships with customers, streamline processes, and increase profitability.",
        "CRM என்பது ஒரு software அல்லது system. இது ஒரு company-க்கு customers-ஐ manage செய்ய, sales track செய்ய, மற்றும் customer relationship improve செய்ய உதவும்.",
      ],
      example: `Popular CRM Software : Salesforce, HubSpot, Zoho CRM`,
    },
    {
      title: "Order Management System",
      definition: [
        "An order management system is a software solution that helps businesses manage and track customer orders from placement to fulfillment.",
        "It typically includes features for order entry, inventory management, shipping, and customer communication.",
      ],
      example: `WooCommerce, Shopify, Magento`,
    },
    {
      title: "LMS (Learning Management System)",
      definition: [
        "A Learning Management System (LMS) is software for the administration, documentation, tracking, reporting and delivery of educational courses, training programs or learning and development programs.",
      ],
      example: `Moodle, Canvas, Blackboard`,
    },
  ],
  VSshortcuts: [
    {
      title: "Ctrl + P",
      definition: ["Quick File Search"],
    },
    {
      title: "Ctrl + Shift + P",
      definition: ["Open Command Palette"],
    },
    {
      title: "Ctrl + /",
      definition: ["Toggle Comment"],
    },
    {
      title: "Alt + ↑ / ↓",
      definition: ["Move Line Up/Down"],
    },
    {
      title: "Shift + Alt + ↓",
      definition: ["Duplicate Line"],
    },
    {
      title: "Ctrl + D",
      definition: ["Select Next Occurrence"],
    },
    {
      title: "Ctrl + Shift + L",
      definition: ["Select All Occurrences"],
    },
    {
      title: "Alt + Click",
      definition: ["Add Multiple Cursors"],
    },
    {
      title: "Ctrl + L",
      definition: ["Select Current Line"],
    },
    {
      title: "Ctrl + X",
      definition: ["Cut Current Line"],
    },
    {
      title: "Ctrl + Shift + K",
      definition: ["Delete Current Line"],
    },
    {
      title: "Ctrl + Enter",
      definition: ["Insert Line Below"],
    },
    {
      title: "Ctrl + Shift + Enter",
      definition: ["Insert Line Above"],
    },
    {
      title: "Ctrl + Space",
      definition: ["Trigger IntelliSense"],
    },
    {
      title: "F2",
      definition: ["Rename Symbol"],
    },
    {
      title: "F12",
      definition: ["Go to Definition"],
    },
    {
      title: "Alt + ←",
      definition: ["Go Back"],
    },
    {
      title: "Ctrl + Shift + `",
      definition: ["Open New Terminal"],
    },
    {
      title: "Ctrl + B",
      definition: ["Toggle Sidebar"],
    },
    {
      title: "Ctrl + J",
      definition: ["Toggle Panel"],
    },
  ],
  English: [
    {
      title: "May I speak with Jiva?",
      definition: [
        "Yes, Speaking. and Yes you are speaking with Jiva.",
        "May I ask who is calling?",
        "I am Ravi from XYZ Company.",
        "How can I help you today?",
      ],
    },
    {
      title: "How are you?",
      definition: ["I'm doing well, thank you for asking."],
    },
    {
      title: "Are you available?",
      definition: ["Yes, I am available."],
    },
    {
      title: "Are you currently working with any company?",
      definition: [
        "Yes, I am currently working with XYZ Company.",
        "No, I am not currently working with any company. and I am looking for new opportunities.",
      ],
    },
    {
      title: "responsibility",
      definition: [
        "My role was Frontend Developer. I was responsible for developing responsive user interfaces using React and Tailwind CSS, creating reusable components, integrating REST APIs, managing application state, fixing frontend bugs, and ensuring a smooth user experience.",
        "I worked as a Frontend Developer. My responsibilities included developing UI components, integrating REST APIs, managing state, fixing frontend issues, and ensuring the application was responsive and user-friendly.",
        "My responsibility was to develop the frontend of the application using React, integrate APIs, create responsive UI components, fix frontend bugs, and ensure a smooth user experience.",
        "My responsibility was to develop the frontend for modules like Employees, Attendance, Leave, and Payroll. I integrated the backend APIs, managed the application state, and created responsive user interfaces using React and Tailwind CSS.",
        "Project-Based Answer",
        "In the Order Management System and Payroll Management System, my role was Frontend Developer. My responsibilities included developing the user interface, building reusable React components, integrating backend APIs, implementing forms and dashboards, managing state, fixing UI issues, and making the application responsive.",
      ],
    },
  ],
};
