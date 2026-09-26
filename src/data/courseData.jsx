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
      definition: [
        "HyperText is text containing links that allow users to navigate from one page to another.",
        '<a href="https://google.com">Go to Google</a>',
        "HyperText → Pages/documents-ஐ links மூலம் connect செய்கிறது.",
        "Markup → Content-ஐ tags மூலம் structure செய்கிறது.",
        "Language → Browser புரிந்துகொள்ளும் syntax/rules.",
      ],
    },
    {
      title: "What is the Head Tag?",
      definition:
        "The <head> tag is used to contain metadata about an HTML document. It is placed in the <html> element and contains information such as the page title, character set, and links to external resources.",
    },

    {
      title: "What is Metadata?",
      definition: [
        "Metadata is data that provides information about other data.",
        "Meta tags can help improve SEO (Search Engine Optimization) and ensure that web pages are displayed correctly on different devices.",
      ],
    },

    {
      title: "What is a Viewport?",
      definition: [
        "The viewport controls how a webpage is displayed on different devices.",
        "Helps in responsive design.",
      ],
    },
    {
      title: "Link tag",
      definition:
        "The <link> tag is used to link external resources such as stylesheets, icons, and prefetching resources to an HTML document. It is placed in the <head> section of the document and can include attributes such as rel, href, and type.",
    },
    {
      title: "What is the Body Tag?",
      definition: "The <body> contains everything visible on the webpage.",
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
      example: `<div> <p> Hello </p> </div>`,
    },
    {
      title: "What is an Empty Element?",
      definition: "An element that does not have a closing tag.",
      example: `<br> <hr> <img> <input> <meta> <link>`,
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
        "Block-level elements. Takes full width available. Start from a new line. Example: div, p, header, footer ",
        "Inline elements. Takes only required width. Stay on the same line. Example: <span>, <a>, <strong>, <em>, <img>",
      ],
    },
    {
      title: "HTML5",
      definition: [
        "new features such as support for multimedia, improved support for web applications, and enhanced semantic elements.",
      ],
    },

    {
      title: "Semantic Elements",
      definition: [
        "HTML5 semantic elements [elements with meaningful names] clearly describe their meaning to both the browser and the developer.",
      ],
      example: `Benefits: Better SEO, Better Accessibility, Easier Maintenance`,
    },

    {
      title: "Entities",
      definition: [
        "HTML entities are used to represent reserved characters in HTML. For example, the less-than sign (<) is represented as &lt; and the greater-than sign (>) is represented as &gt;.",
        "Using HTML entities ensures that special characters are displayed correctly in the browser and do not interfere with the structure of the HTML document.",
      ],
    },

    {
      title: "Classes and IDs",
      definition: [
        "Classes and IDs are used to identify and style HTML elements.",
        "An ID is a unique identifier for an element",
        "Used once",
        "Selected using #",

        "while a class can be shared among multiple elements",
        "Reusable",
        "Used multiple times",
        "Selected using the dot (.) selector in CSS",
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
      title: "Alt attribute in image",
      definition: [
        "The alt attribute provides alternative text for an image.",
        "It is useful for accessibility (screen readers) and SEO.",
        "If the image fails to load, the alt text will be displayed.",
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
      title: "Canvas vs SVG",
      definition: [
        "Canvas is pixel-based and used for dynamic graphics.",
        "SVG is vector-based and scalable without losing quality.",
        "Canvas is better for games",
        "SVG for UI graphics",
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
      title: "What is the Difference Between href and src?",
      definition: [
        "href:References a resource",
        "Used in links to reference external resources",
        "Used in <a>, <link>",

        "src:Embeds a resource",
        "Used in <img>, <script>, <iframe>",
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
      title: "Data Attributes",
      definition: [
        "Custom attributes used to store extra information in HTML elements.",
        "They start with 'data-' (e.g., data-id, data-name).",
        "Accessible using JavaScript via dataset property.",
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
      title: "Lazy Loading",
      definition: [
        "Technique to load images only when they are visible on screen.",
        "Improves performance and page speed.",
        "Example: <img src='image.jpg' loading='lazy' />",
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
      title: "Padding vs Margin",
      definition: [
        "Padding is the space between the content of an element and its border, while margin is the space outside the border of an element.",
        "Padding adds space inside an element, while margin adds space outside an element.",
        "Padding can affect the size of an element, while margin does not affect the size of an element.",
      ],
    },
    {
      title: "Position",
      definition:
        "The position property specifies how an element is positioned (static, relative, absolute, fixed, sticky).",
    },
    {
      title: "Absolute Positioning",
      definition: [
        "English: position: absolute removes an element from the normal document flow and positions it relative to its nearest positioned ancestor.",
        "Tamil: position: absolute பயன்படுத்தும் போது element normal document flow-ல் இருந்து வெளியே வரும். அது அதன் nearest positioned parent-ஐ அடிப்படையாகக் கொண்டு position ஆகும்.",
      ],
    },

    {
      title: "Relative Positioning",
      definition: [
        "English: position: relative keeps an element in the normal document flow, but allows it to be moved from its original position using top, right, bottom, and left properties.",
        "Tamil: position: relative பயன்படுத்தும் போது element normal flow-ல் இருக்கும். ஆனால் top, right, bottom, left properties மூலம் அதன் original position-லிருந்து element-ஐ move செய்யலாம்.",
      ],
    },

    {
      title: "Relative vs Absolute Units",
      definition: [
        "Relative units (such as em, rem, and %) are based on the size of the parent element or the root element",
        "Relative units allow for more flexible and responsive designs, while ",
        "absolute units (such as px, cm, and in) are fixed and do not change based on the context.",
        "absolute units provide precise control over the size of elements.",
      ],
    },

    {
      title: "Z-Index",
      definition: [
        "Z-index controls the stacking order overlapping of elements.",
        "An Elements with a higher z-index generally appear in front of an elements with a lower z-index.",
      ],
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
  ],
  dom: [
    {
      title: "What is DOM?",
      definition: [
        "The Document Object Model (DOM) is a programming interface for web documents. It represents (குறிக்கிறது) the structure of a document and allows programs to manipulate its content and presentation.",
      ],
    },
    {
      title: "DOM Methods",
      definition: [
        "DOM methods are functions that allow you to manipulate the Document Object Model. They are used to select, create, modify, and delete HTML elements.",
      ],
    },
    {
      title: "DOM Properties",
      definition: [
        "DOM properties are attributes of the Document Object Model that allow you to access and modify the characteristics of HTML elements.",
      ],
    },
    {
      title: "DOM Events",
      definition: [
        "DOM events are actions that occur in the document (e.g., click, hover, keypress). They allow you to respond to user interactions and trigger specific functions.",
      ],
    },
    {
      title: "DOM Traversal",
      definition: [
        "DOM traversal refers to the process of navigating through the nodes of the Document Object Model.",
        "Common traversal methods include parentNode, childNodes, firstChild, lastChild, nextSibling, and previousSibling.",
      ],
    },
    {
      title: "DOM Manipulation",
      definition: [
        "DOM manipulation refers to the process of changing the structure, content, or presentation of HTML elements using JavaScript.",
        "Common methods for DOM manipulation include createElement, createTextNode, appendChild, removeChild, and replaceChild.",
      ],
    },
    {
      title: "What is the difference between RealDOM and VirtualDOM?",
      definition: [
        "Real DOM means the actual webpage that the browser creates from an HTML page and displays on the screen. Any change in the Real DOM directly affects what you see on the webpage. It is slow because it can re-render the entire webpage.",
        "Virtual DOM is a lightweight object of the Real DOM that represents (என்பது -ஐ குறிக்கிறது.) the UI in memory, not on the screen. React updates it first, instead of updating  directly webpage.",
      ],
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
    },
    {
      title: "What is addEventListener()?",
      definition: [
        "addEventListener() is a JavaScript DOM method used to attach an event handler to an HTML element.",
      ],
    },
    {
      title: "Reflow",
      definition: [
        "Reflow is the process of recalculating the layout and position of DOM elements when their size, position, or structure changes.",
        "Reflow can be expensive because the browser may need to recalculate the layout of multiple elements.",
        "Element-oda size, position, or layout change aagumbothu browser layout-ai meendum calculate pannuvathuthaan Reflow.",
        "Reflow = Layout change",
      ],
    },

    {
      title: "Repaint",
      definition: [
        "Repaint is the process of redrawing the visual appearance of an element when properties like color, background, or visibility change.",
        "Repaint is generally less expensive than reflow because it does not require recalculating the layout.",
        "Element-oda color, background, or appearance change aagumbothu browser athai meendum draw pannuvathuthaan Repaint.",
        "Repaint = Look change",
      ],
    },
    {
      title: "Event (Capturing Parent → Child)   மேலிருந்து கீழே",
      definition: [
        "Event capturing is a process where an event propagates from the parent element down to the target child element",
        "Event capturing is the process where an event triggered on a parent element propagates down to its child elements.",
        "This is the opposite of event bubbling and allows for handling events at different levels of the DOM hierarchy.",
      ],
    },
    {
      title: "Event bubbling (Child → Parent) கீழிருந்து மேலே",
      definition: [
        "Event bubbling is a process where an event propagates from the target child element up to its parent elements.",
        "Event bubbling is the process where an event triggered on a child element propagates up to its parent elements.",
        "This allows for event delegation, where a single event listener can handle events for multiple child elements.",
      ],
    },

    {
      title:
        "Event Delegation (Usually Bubbling) Parent listener வைத்து children handle செய்வது",
      definition: [
        "Event delegation is a technique where we attach one event listener to a parent element to handle events from its child elements",
        "Event delegation is a technique that allows you to handle events on a parent element instead of individual child elements.",
        "This is useful when you have a large number of child elements and want to handle events on a common parent element.",
        "This can help improve performance and reduce code complexity.",
        "Event delegation is also known as event bubbling or event capturing.",
      ],
    },
    {
      title: "What does preventDefault() do?",
      definition: [
        "preventDefault() என்பது browser normally செய்யும் default action-ஐ தடுக்க பயன்படும்.",
        "`preventDefault()` prevents the browser's default action for an event.",
        "Example: It can prevent a form from submitting or a link from navigating.",
        "It does NOT stop event bubbling.",
      ],
    },
    {
      title: "Event propagation",
      definition: [
        "Event propagation is the process by which an event travels through the DOM tree.",
        "There are three phases of event propagation: capturing, target, and bubbling.",
        "Tamil: Oru event DOM tree-la parent-lendhu child-kum, child-lendhu parent-kum travel aagurathuthaan Event Propagation.",
      ],
    },
    {
      title: "What does stopPropagation() do?",
      definition: [
        "stopPropagation() என்பது event parent elements-க்கு propagate/bubble ஆகி போவதைத் தடுக்க பயன்படும்.",
        "`stopPropagation()` stops the event from propagating to parent elements.",
        "It is commonly used to stop event bubbling or capturing.",
        "It does NOT prevent the browser's default action.",
      ],
    },
    {
      title: "What is DOMContentLoaded?",
      definition: [
        "DOMContentLoaded is an event that fires when the HTML document has been completely parsed(பகுப்பாய்வு) and the DOM is ready.",
        "Tamil: HTML document parse(பகுப்பாய்வு) aagi DOM ready aanavudan DOMContentLoaded event trigger aagum.",
      ],
    },

    {
      title: "Difference between DOMContentLoaded and load?",
      definition: [
        "DOMContentLoaded fires when the DOM is ready, while load fires after the entire page and its resources like images and stylesheets are loaded.",
        "Tamil: DOMContentLoaded DOM ready aanavudan trigger aagum; load page-oda resources ellam load aana piragu trigger aagum.",
      ],
    },

    {
      title: "What is MutationObserver?",
      definition: [
        "MutationObserver is a Web API used to detect changes made to the DOM, such as adding, removing, or modifying elements.",
        "Tamil: DOM-la element add, remove, or modify aagumbothu antha changes-ai detect panna MutationObserver use pannuvom.",
      ],
    },
    {
      title: "querySelector()",
      definition: [
        "querySelector() is a DOM method used to select the first element that matches a CSS selector.",
        "Tamil: கொடுக்கப்பட்ட CSS selector-க்கு match ஆகும் முதல் element-ஐ select செய்ய querySelector() பயன்படுத்துவோம்.",
      ],
    },

    {
      title: "querySelectorAll()",
      definition: [
        "querySelectorAll() is a DOM method used to select all elements that match a CSS selector.",
        "Tamil: கொடுக்கப்பட்ட CSS selector-க்கு match ஆகும் அனைத்து elements-ஐயும் select செய்ய querySelectorAll() பயன்படுத்துவோம்.",
      ],
    },
  ],
  javascript: [
    {
      title: "JavaScript",
      definition: [
        "JavaScript is a lightweight, high-level programming language primarily used to create interactive and dynamic web pages. It can run in web browsers and also on servers using Node.js.",
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
      types: [
        {
          name: "var is function-scoped. It can be re-declared and re-assigned.",
        },
        {
          name: "let is block-scoped. It can be re-assigned, but it cannot be re-declared in the same scope.",
        },
        {
          name: "const is block-scoped. It cannot be re-assigned or re-declared in the same scope.",
        },
      ],
    },

    {
      title: "Hoisting",
      definition: [
        "Hoisting in JavaScript is the behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase, before the code is executed.",
        "This means you can use variables and functions before they are declared in the code (depending on type).",
      ],
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
        "An object is a collection of properties, where each property consists of a key-value pair.",
        "Objects are used to store and organize data",
        "that can hold various data types such as strings, numbers, arrays, and even other objects.",
      ],
    },

    {
      title: "Array",
      definition: [
        "An array is a special type of object used to store multiple values in a single variable. These values can be of any data type, such as numbers, strings, objects, or even other arrays.",
        "Arrays help manage and manipulate groups of data efficiently",
        "Arrays are ordered and indexed collections",
        "Arrays in JavaScript are dynamic in size (they are not fixed).",

        "Array methods → built-in functions like push, pop, map, filter, reduce",
        "Array iteration → looping using for, forEach, map",

        "Encapsulation → data hiding",
        "Polymorphism → same method, different behavior",
        "Abstraction → hide complexity",
      ],
    },

    {
      title: "Function",
      definition: [
        "A function is a block of reusable code that performs a specific task. It helps in organizing code, improving readability, and avoiding repetition.",
        "Functions can take inputs (parameters) and return an output (return value).",
        "Function declaration: A function is declared using the function keyword.",
        "Function expression: A function is assigned to a variable.",

        "Return statement",
        "Default parameters",
        "Rest parameters",

        "Callback functions → passing a function as an argument",
        "Higher-order functions → functions that take or return a function.",
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
      title: "What is the difference between == and === in JavaScript?",
      definition: [
        "== is the loose equality operator. It compares two values and performs type conversion if necessary.",
        "=== is the strict equality operator. It compares both the value and the data type without type conversion.",
      ],
    },

    {
      title: "What is the difference between null and undefined in JavaScript?",
      definition: [
        "null means a value is intentionally absent or empty.",
        "undefined means a variable has been declared but a value has not been assigned, or a value is not available..",
      ],
    },

    {
      title:
        "What is the difference between null, undefined, and NaN in JavaScript?",
      definition: [
        "null represents an intentional absence of a value.",
        "undefined means a variable has been declared but a value has not been assigned.",
        "NaN stands for “Not-a-Number” and represents an invalid or undefined numeric result.",
      ],
    },

    {
      title: "Callback Function",
      definition: [
        "A callback function is a function that is passed as an argument to another function and is executed later.",
        "Callbacks are used to handle asynchronous operations like API calls, timers, and events.",
        "It helps to run code only after a task is completed.",
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
        " A closure is a function that remembers and can access variables from its outer scope, even after the outer function has finished executing.",
        " A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).",
        "Closures allow you to access and preserve data privately.",
        "It is commonly used in data encapsulation, counters, and function factories.",
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
      title: "Pure Function",
      definition: [
        "A pure function always returns the same output for the same input.",
        "It does not modify or depend on external variables or state.",
        "It has no side effects, making it predictable and easy to test.",
      ],
      example: `
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // 5
console.log(add(2, 3)); // 5
`,
    },

    {
      title: "Impure Function",
      definition: [
        "An impure function may return different outputs for the same input.",
        "It depends on or modifies external variables or state.",
        "It performs side effects such as changing variables, making API calls, or logging to the console.",
      ],
      example: `
let total = 0;

function addToTotal(value) {
  total += value;
  return total;
}

console.log(addToTotal(5)); // 5
console.log(addToTotal(5)); // 10
`,
    },

    {
      title: "Implicit",
      definition: [
        "Implicit means something is understood or happens automatically without being stated directly.",
        "It is not written or specified explicitly; the system or language infers it.",
        "JavaScript performs many implicit operations, such as type coercion.",
      ],
      example: `
// Implicit Type Conversion (Coercion)
console.log("5" + 2); // "52"
console.log("5" - 2); // 3

// JavaScript automatically converts the values.
`,
    },

    {
      title: "Explicit",
      definition: [
        "Explicit means something is clearly stated or done manually.",
        "The programmer intentionally specifies or performs the operation.",
        "Explicit code is easier to understand and avoids unexpected behavior.",
      ],
      example: `
// Explicit Type Conversion
console.log(Number("5") + 2); // 7
console.log(String(5) + 2);   // "52"

// The conversion is done manually.
`,
    },
    {
      title: "NaN (Not-a-Number)",
      definition: [
        "NaN stands for Not-a-Number.",
        "It is a special value that represents (குறிக்கிறது) an invalid or undefined numeric result.",
        "Although its name is Not-a-Number, its data type is 'number'. ",
        "அதன் பெயர் Not-a-Number என்றாலும், அதன் தரவு வகை 'number' ஆகும். ",
      ],
      example: `
console.log(Number("Hello")); // NaN
console.log(0 / 0);           // NaN
console.log(typeof NaN);      // "number"
console.log(Number.isNaN(NaN)); // true
console.log(NaN === NaN);       // false
if (Number.isNaN(quantity)) {
  alert("Please enter a valid quantity");
}
`,
    },

    {
      title: "Debouncing",
      definition: [
        "Debouncing is a technique that delays the execution of a function until after a specified delay has passed since the last time it was invoked.",
        "It prevents unnecessary function calls when an event is triggered repeatedly.",
        "Commonly used in search inputs, Filters, Live validation, resize events, and API calls to improve performance.",
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
        "The Event Loop is a mechanism in JavaScript that continuously checks if the Call Stack is empty, and if so, moves tasks from the queues (Microtask Queue first, then Callback Queue) onto the stack for execution.",

        "It allows JavaScript to handle asynchronous operations (like setTimeout, API calls, events) even though JavaScript itself is single-threaded.",

        "The Callback Queue (also called the Macrotask Queue or Task Queue) stores callbacks from setTimeout, setInterval, and DOM events, waiting for the Call Stack to be empty.",

        "The Microtask Queue stores Promise callbacks (.then, .catch, .finally) and queueMicrotask() callbacks. It runs before the Callback Queue.",

        "Microtasks have higher priority than macrotasks — all microtasks are executed first, before the next macrotask is picked up.",

        "Execution order: Call Stack → Microtask Queue (fully drained) → Callback Queue (one task at a time) → repeat.",
      ],
    },

    {
      title: "this keyword / Function Borrowing / Explicit Binding",
      definition: [
        "Call: Invokes(அழைக்கப்பட்டது) the function immediately, with 'this' set to the first argument, and remaining arguments passed one by one (comma separated).",

        "Apply: Invokes the function immediately, with 'this' set to the first argument, but remaining arguments passed as a single array.",

        "Bind: Does NOT invoke the function immediately. It returns a new function with 'this' permanently bound, which can be called later.",

        "Call and Apply are used for immediate invocation — the only difference is how arguments are passed (comma-separated vs array).",

        "Bind is used for deferred invocation — commonly used in event handlers, setTimeout, and callback functions where 'this' context gets lost.",
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
        "localStorage stores data in the browser and keeps it even after the browser is closed. The data remains until we manually remove it or clear the browser storage.",
        "sessionStorage stores data only for the current browser tab/session. The data is removed when that tab is closed.",
      ],
    },

    {
      title: "What is the difference between cookies and localStorage?",
      definition: [
        "Cookies store small pieces of data as key-value pairs and are automatically sent to the server with matching HTTP requests. They are commonly used for sessions and authentication.",
        "localStorage stores data in the browser and keeps it even after the browser is closed. It is mainly used for client-side data storage.",
      ],
    },
    {
      title: "JavaScript Destructuring",
      definition: [
        "English: Destructuring is a JavaScript feature that allows you to extract values from arrays or properties from objects and store them directly into separate variables.",
      ],
    },
    {
      title: "Synchronous and  Asynchronous JavaScript",
      definition: [
        "Synchronous JavaScript executes code line by line, and each operation wait for the previous one to complete. It is blocking",
        "Asynchronous code can start an operation and continue executing other code without waiting for that operation to finish. It is generally non-blocking.",
      ],
    },
    {
      title: "Promise",
      definition: [
        "A Promise is an object that represents the eventual(இறுதியில்) completion(நிறைவு பெறுவதை) (or failure) of an asynchronous operation and its resulting value.",
        "A Promise has three states → pending, fulfilled, and rejected.",
        "Promises are used to handle asynchronous operations like API calls, file reading, or timers.",

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
      title: "What is callback hell?",
      definition: [
        "Callback hell occurs (நிகழ்கிறது) when multiple callbacks are nested inside each other.",
        "It makes code difficult to read and maintain.",
        "Callback Hell-ஐ தவிர்க்க: Promises, async/await",
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
      title: "This Keyword",
      definition: [
        "The this keyword refers to the object or context that is calling the function.",
        "The this keyword refers to the object that is currently executing the code.",
      ],
    },
    {
      title: "What is the difference between call(), apply(), and bind()",
      definition: [
        "calls a function immediately and passes arguments individually.",
        "apply() works like call(), but passes arguments as an array.",
        "bind() returns a new function with this permanently set to the provided value.",
        "or",
        "call() calls a function with a specific this value and arguments provided individually.",
        "apply() calls a function with a specific this value and arguments provided as an array.",
        "bind() creates a new function with a specific this value and arguments pre-specified.",
      ],
    },

    {
      title: "What is the difference between call(), apply(), and bind()",
      definition: [
        "call() is used to call a function immediately with a specified this value, and arguments are passed individually.",
        "apply() is similar to call(), but arguments are passed as an array.",
        "bind() does not call the function immediately. It creates and returns a new function with a specified this value and optionally preset arguments.",
      ],
    },
    {
      title: "What is the difference between map(), filter(), and forEach()?",
      definition: [
        "map() transforms every element and returns a new array. It does not modify the original array by itself.",
        "filter() is a method used to filter elements based on a condition. It returns a new array containing the elements that satisfy the condition and does not modify the original array.",
        "forEach() executes a function for each element. It does not return a new array. It also does not automatically modify the original array",
      ],
    },

    {
      title: "ForEach",
      definition: [
        "forEach() is used to iterate over each element of an array. It does not return a new array; it returns undefined",
      ],
    },

    {
      title:
        "What is the difference between map(), filter(), and reduce() in JavaScript?",
      definition: [
        "map() transforms every element and returns a new array. It does not modify the original array by itself.",
        "filter() is a method used to filter elements based on a condition. It returns a new array containing the elements that satisfy the condition and does not modify the original array.",
        "reduce() is used to process all elements of an array and reduce them to a single value, such as a sum, total, or object.",
        "reduce() is a method used to reduce the array to a single value. It executes a reducer function for each element in the array and returns the accumulated result.",
      ],
    },
    {
      title: "What is the difference between find() and filter()?",
      definition: [
        "find() returns the first element that satisfies the condition. It returns undefined if no element is found.",
        "filter() returns a new array containing all elements that satisfy the condition. It returns an empty array if no element is found.",
      ],
    },

    {
      title:
        "What is the difference between shallow copy and deep copy in JavaScript?",
      definition: [
        "Shallow copy creates a copy of the object at the top level. If the object contains nested objects or arrays, those nested values are still referenced by the original object.",
        "Deep copy creates a completely independent copy, including nested objects and arrays. Changes to the copied object do not affect the original object.",
      ],
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
      title: "ES5 Features",
      definition: [
        "var",
        "Constructor Function",
        "this",
        "Prototype",
        "Prototype Chain",
        "Prototypal Inheritance",
        "call / apply / bind",
        "Strict Mode (use strict)",
      ],
    },

    {
      title: "ES6 Features",
      definition: [
        "ES6 (ECMAScript 2015) introduced major improvements to JavaScript to make it cleaner, faster, and easier to write.",

        "1. let and const → Block scoped variables",
        "2. Arrow Functions → Short syntax for functions",
        "3. Template Literals → String interpolation using backticks",
        "4. Destructuring → Extract values from arrays/objects",
        "5. Spread Operator (...) → Expand arrays/objects",
        "6. Rest Parameter → Collect multiple arguments",
        "Example: function sum(...nums) {}",
        "7. Modules → import/export system",
        "8. Promises → Handle async operations",
      ],
    },
    {
      title: "What is babel?",
      definition: [
        "Babel is a JavaScript compiler that converts modern JavaScript code into  older browsers.",
        "It allows developers to use the latest JavaScript features while maintaining compatibility with older environments.",
      ],
    },
    {
      title: "JavaScript Modules",
      definition: [
        "export → share code",
        "import → use code",
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
    {
      title: "Method Overloading",
      definition: [
        "English: Method overloading means having multiple methods with the same name but different parameters, such as different number or types of arguments.",
        "Tamil: Method overloading என்பது same method name-ஐ பயன்படுத்தி, different number அல்லது different type of parameters உடன் multiple methods உருவாக்குவது.",
      ],
    },

    {
      title: "Method Overriding",
      definition: [
        "English: Method overriding means a child class provides its own implementation of a method that is already defined in its parent class.",
        "Tamil: Method overriding என்பது parent class-ல் ஏற்கனவே இருக்கும் method-ஐ child class-ல் அதே name மற்றும் parameters-உடன் புதிய implementation கொடுப்பது.",
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
        "Lucide React - Modern icons",
        "date-fns - Date manipulation",
        "Day.js - Date/time handling",
        "React Select - Advanced dropdown/select",
        "React Hot Toast - Toast notifications",
        "Framer Motion - Animations and transitions",
      ],
    },
    {
      title: "React.js Version",
      definition: [
        "React 0.3",
        "React 0.14",
        "React 15",
        "React 16",
        "React 16.3",
        "React 16.8 → Hooks introduced",
        "React 17 → Gradual upgrade / new JSX transform",
        "React 18 → Concurrent rendering + automatic batching",
        "React 19 → Actions + use() + improved forms/server features",
        "React 19.2",
      ],
    },
    {
      title: "Latest version React 19",
      definition: [
        "useActionState for Forms Actions vs traditional form handling",
        "useOptimistic for instant UI",
        "ref as a prop (no more forwardRef needed)",
        "React Compiler (auto-optimization) Build-time-la automatic-a memoize pannum — useMemo, useCallback, React.memo manual-ah use panna thevai kammi aagum.",
        "Document Metadata support",
        "Performance:Code splitting,lazy loading,Virtualization",
        "Improved error handling & hydration errors",
        "Advanced Router : useParams,useNavigate,Protected routes",
        "Suspense & Error Boundaries",
      ],
    },

    {
      title: "Cache என்றால் என்ன? (தற்காலிக சேமிப்பு / இடைக்கால சேமிப்பு)",
      definition: [
        <>
          Cache is a temporary storage area that{" "}
          <strong>holds frequently accessed data</strong> for faster
          retrieval(மீட்டெடுத்தல்).
        </>,
        "It is commonly used to improve application performance and reduce the load on the server.",
        "Cache = அடிக்கடி பயன்படுத்தப்படும் data-வை temporary-ஆக சேமித்து வைத்து, அடுத்த முறை வேகமாக பயன்படுத்துவது.",
      ],
    },

    {
      title:
        "Memoization (கணக்கிட்ட முடிவை நினைவில் சேமித்து வைத்து மீண்டும் பயன்படுத்துதல்.)",
      definition:
        "Memoization is a technique for speeding up application by caching the results of expensive function calls and returning them when the same inputs are used again",
    },

    {
      title: "What is SyntheticEvent in React?",
      definition: [
        "SyntheticEvent is a React wrapper around the browser's native event. It provides a consistent (சீரான / தொடர்ந்து ஒரே மாதிரியாக இருப்பது) event interface across different browsers.",
      ],
    },

    {
      title:
        "What is the difference between onClick={handleClick} and onClick={handleClick()} in React?",
      definition: [
        "onClick={handleClick} passes the function reference to React. React calls the function when the button is clicked.",
        "handleClick → pass function",
        "onClick={handleClick()} calls the function immediately during rendering instead of waiting for the click. We generally should not use this unless the function call is intentionally wrapped or handled differently.",
        "handleClick() → call function",
      ],
    },

    {
      title: "What is React?",
      definition: [
        "React is an open-source JavaScript library used to build fast and interactive user interfaces. It helps us create scalable applications using reusable components. React provides features like the Virtual DOM and Hooks, and it is commonly used to build single-page applications (SPAs).",
        "React.js is an open-source JavaScript library used to create fast and interactive user interfaces. It allows developers to build reusable components and efficiently update the UI when the data changes.",
      ],
    },
    {
      title: "Key Features of React",
      definition: [
        "Component Based Architecture",
        "One Way Data Binding",
        "single-page application (SPA)",
        "It uses a virtual DOM to efficiently update and render the user interface.",
        "Rich Ecosystem of Libraries and Tools",
        "State Management",
        "Props",
        "Lifecycle Methods",
      ],
    },

    {
      title: "What is a Component?",

      definition: [
        " A component is a reusable and independent piece of code that represents a part of the user interface. Components help us split the UI into smaller and manageable pieces, making the application easier to develop and maintain.",
      ],
    },
    {
      title: "Types of Components",
      definition: [
        "Presentational Components",
        "Container Components",
        "Layout Components",
        "Page Components",
        "Feature Components",
        "Shared Components",
        "Provided Components",
        "Wrapper Components",
        "Component Components",
        "Domain Components",
      ],
    },
    {
      title: "Functional Component (modern, hooks-oda use pannuvom)",
      definition: [
        "Functional components are JavaScript functions that accept props as an argument and return JSX. It is the modern way of creating React components.",
        "Also known as Stateless Components ",
        "Hooks can be easily used in Functional component to make them stateful",
      ],
    },
    {
      title: "Class Component (old style, lifecycle methods use pannum)",
      definition: [
        "Class components are JavaScript classes that extend React.Component and implement the render() method, which returns JSX. It is the older way of creating React components.",
        "Also known as Stateful components because they implement logic and state ",
      ],
    },

    {
      title:
        "What is the difference between a Functional Component and a Class Component in React?",
      definition: [
        "A Functional Component is a JavaScript function that returns JSX to describe the UI. It can use React Hooks to manage state and side effects, and it is the modern and commonly used way to create React components.",
        "A Class Component is a JavaScript class that extends React.Component. It uses a render() method to return the UI and can manage state using this.state. Class components are the older approach in React.",
      ],
    },

    {
      title: "JSX Rules",
      definition: [
        "JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows us to write HTML-like code inside JavaScript. It makes React code easier to read and write and allows us to describe the UI structure clearly.",
      ],
    },
    {
      title: "Props",
      definition: [
        "Props stands for properties. They are used to pass data from a parent component to a child component. Props are read-only and immutable, so a child component cannot directly modify them.",
      ],
    },
    {
      title: "State",
      definition: [
        "State is a built-in React object used to store data or information about a component. State can change over time, and when the state changes, React re-renders the component. We update state using a setter function.",
      ],
    },

    {
      title: "What is children prop in React?",
      definition: [
        "The children prop is a special prop in React that allows a component to receive and render content placed between its opening and closing tags.",
        "It is commonly used to create reusable wrapper components.",
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
      title: "Conditional rendering",
      definition: [
        "Conditional rendering is the process of rendering a component or UI element based on a condition. If the condition is true, one UI is rendered; otherwise, another UI can be rendered.",
        "Conditional rendering in React means rendering different UI elements based on a condition. We can use the ternary operator, logical && operator, or if statements for conditional rendering.",
      ],
    },

    {
      title: "React JS List & Keys",
      definition: [
        "Lists are used to display a collection of data in React. They are created using the map() method to iterate over an array of data and return a new array of JSX elements.",
        "A key is a unique identifier used when rendering a list of elements in React. It helps React identify which items have been added, removed, or changed, so React can efficiently update the DOM.",
      ],
    },

    {
      title: "What is the difference between key and id in React?",
      definition: [
        "A key is a unique identifier used by React to identify elements in a list and efficiently update, add, or remove them during reconciliation",
        "id is an HTML attribute used to uniquely identify an element in the DOM and can also be used for CSS, labels, or JavaScript.",
        "key → React list rendering & reconciliation",
        "id → HTML DOM element identification",
      ],
    },

    {
      title: "Why should we not use the array index as a key in React lists?",
      definition: [
        "We should avoid using array index as a key when the list can change because the index can change when items are added, removed, or reordered. A stable and unique ID is preferred.",
      ],
    },

    {
      title: "createElement()",
      definition: [
        "React.createElement() is used to create a React element. It is an alternative way to create elements without using JSX.",
      ],
    },
    {
      title:
        "What is the difference between a React Element and a React Component?",
      definition: [
        "A React Element is a plain JavaScript object that describes what should be rendered, and it can be created using JSX or React.createElement(). A React Component is a reusable piece of code that returns React elements and can be created as a function or class.",
      ],
    },
    {
      title: "React Router (Allows changing the browser URL)",
      definition: [
        "React Router is a library used for handling navigation and routing in React applications. It allows users to navigate between different views or pages without a full browser page reload.",
        "React Router is a standard library for routing in React. It enables the navigation among(இடையே) views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.",
      ],
    },

    {
      title:
        "What is the difference between BrowserRouter, Routes, and Route in React Router?",
      definition: [
        "BrowserRouter provides routing context to the application and manages browser-based routing.",
        "Routes is a container that matches the current URL with the appropriate route.",
        "Route defines a specific URL path and the component or element to render for that path.",
      ],
    },

    {
      title:
        "What is the difference between Link and useNavigate() in React Router?",
      definition: [
        "Link is a React Router component used to navigate between routes through a user interface, such as clicking a link or button.",
        "Link → declarative navigation",
        "useNavigate() is a React Router Hook used to navigate programmatically based on some logic or an event.",
        "useNavigate() → programmatic navigation",
      ],
    },

    {
      title: "Virtual DOM",
      definition: [
        "The Virtual DOM is a lightweight JavaScript representation of the actual DOM. When the state or data changes, React creates a new Virtual DOM and compares it with the previous Virtual DOM. This process is called reconciliation. React then updates only the necessary parts of the actual DOM instead of re-rendering the entire page.",
      ],
    },

    {
      title: "What are React Hooks?",
      definition:
        "React Hooks are built-in functions that allow functional components to use React features like state, lifecycle methods, context, and performance optimizations without using class components. For example, I use useState for managing state, useEffect for API calls and other side effects, useRef for accessing DOM elements or storing mutable values, useContext to avoid prop drilling, useMemo and useCallback for performance optimization, and useReducer when the state logic becomes complex.",
    },

    {
      title: "useState()",
      definition: [
        "useState() is a React Hook used to create and manage state in a functional component. When the state changes, React re-renders the component. We update the state using the setter function returned by useState().",
        "useState → data changes → re-render",
        "It returns an array with two elements: the current state value and a function to update it.",
      ],
    },

    {
      title: "useEffect()",
      definition: [
        "useEffect is a React Hook used to perform side effects in a component. For example, we can use it for API calls, subscriptions, timers, and interacting with external systems. It can also be used to handle lifecycle-related behavior in functional components.",
        "useEffect is a Hook used to handle side effects and lifecycle-related behavior.",
        "The cleanup function in useEffect is used to clean up side effects when a component unmounts or before the effect runs again. It helps prevent memory leaks and unnecessary operations.",
        "For example, we can use it to remove event listeners, clear timers, or unsubscribe from subscriptions.",
        "The dependency array in useEffect controls when the effect should run.",
        "If we pass an empty dependency array [], the effect runs once after the component mounts.",
        "If we pass a value in the dependency array, the effect runs again whenever that value changes.",
      ],
    },

    {
      title: "What is useMemo()",
      definition: [
        "useMemo() is a React Hook used to memoize a calculated value. It helps avoid unnecessary recalculations when the dependencies have not changed.",
        "useMemo is a React Hook used for performance optimization. It memoizes the result of an expensive calculation and recalculates it only when its dependencies change. This helps avoid unnecessary recalculations during re-renders.",
        "useMemo is a React Hook used to memoize a calculated value. It helps avoid unnecessary recalculations and can improve performance.",
      ],
    },

    {
      title: " useCallback()",
      definition: [
        "useCallback() is a React Hook used to memoize a function reference. It helps prevent the function from being recreated on every render when the dependencies have not changed.",
        "useCallback is a React Hook used for performance optimization. It memoizes a function and returns the same function reference until its dependencies change. It is useful when we pass functions to child components, especially when those components are optimized with React.memo.",
        "useCallback is a React Hook used to memoize a function reference. It helps prevent creating a new function reference on every render, especially when passing functions to child components.",
        "useCallback is used to memoize a function so that the same function instance is reused unless its dependencies change.",
        "Helps prevent unnecessary re-renders of child components",
      ],
    },

    {
      title: "What is useRef()",
      definition: [
        "useRef() is a React Hook used to access and interact with DOM elements directly. It can also be used to store a mutable value that persists across renders without causing a re-render when the value changes.",
        "useRef() value change ஆகும்போது component re-render ஆகாது.",
      ],
    },

    {
      title:
        "What is the difference between useEffect() and useLayoutEffect() in React?",
      definition: [
        "useEffect() is used to perform side effects after the component is painted to the screen.",
        "useLayoutEffect() is used to perform side effects synchronously before the browser paints the updated UI.",
      ],
    },

    {
      title: "7. useReducer",
      definition: [
        "useReducer is used to manage complex state logic. It works with a reducer function and dispatch actions to update state.",
      ],
    },

    {
      title:
        "What is the difference between useEffect and useLayoutEffect in React?",
      definition: [
        "useEffect runs after the component has been rendered and the browser has painted the UI. It is commonly used for side effects such as API calls, subscriptions, and timers.",
        "useEffect → Render → Paint → useEffect",
        "useLayoutEffect runs synchronously after React updates the DOM but before the browser paints the screen. It is useful when we need to measure or modify the DOM before the user sees the result.",
        "useLayoutEffect runs after DOM updates but before the browser paints.",
        "useLayoutEffect → Render → DOM update → useLayoutEffect → Paint",
      ],
    },

    {
      title:
        "What is the difference between React.memo(), useMemo(), and useCallback()?",
      definition: [
        "React.memo() → Component is used to prevent unnecessary re-renders of a component when its props have not changed.",
        "React.memo() is a higher-order component used for performance optimization.",
        "React.memo() It is useful for avoiding unnecessary re-renders, especially when a component is expensive to render.",
        "useMemo() → Value is used to memoize a calculated value.",
        "useCallback() → Function is used to memoize a function.",
      ],
    },

    {
      title: "Props Drilling",
      definition: [
        "Prop drilling is the process of passing data from a higher-level component to a deeply nested child component through multiple intermediate components using props, even when those intermediate components do not need the data.",
      ],
    },

    {
      title: "Controlled Component",
      definition: [
        "A controlled component is a form element whose value is controlled by React state. The input value is stored in state, and we update the state when the user enters or changes the value.",
        "Controlled → value + onChange",
        "Controlled → React state manages the input value.",
      ],
    },

    {
      title: "Uncontrolled Component",
      definition: [
        "An uncontrolled component stores form data in the DOM itself.",
        "React does not control the input value using state.",
        "useRef is commonly used to access the input value.",
      ],
    },

    {
      title: "React Server Components",
      definition: [
        "React server comonenents is now the default in Next js",
        "Server Components are components that run on the server and reduce JavaScript sent to the browser",
      ],
    },

    {
      title: "What is a Higher-Order Component (HOC) in React?",
      definition: [
        "A Higher-Order Component (HOC) is a function that takes a React component as an argument and returns a new enhanced component. It is used to reuse component logic across multiple components.",
      ],
    },
    {
      title: "Higher Order Function",
      definition:
        "A Higher Order Function (HOF) is just a function that takes another function as argument OR returns a function.",
    },

    {
      title: "What is the purpose of using HOC in React?",
      definition: [
        "The main purpose of an HOC is to reuse common logic and functionality across multiple components by wrapping a component and returning an enhanced component.",
      ],
    },

    {
      title: "What is the difference between Context API and Redux?",
      definition: [
        "Context API is a built-in React feature used to share data between components without passing props through every level. It is useful for avoiding prop drilling and is suitable for simple global state such as theme, authentication, or language.",
        "Redux is a third-party state management library used to manage application state in a centralized and predictable way. It is useful when the application has complex state management requirements and many components need to access or update shared state.",
      ],
    },

    {
      title: "Redux (State Management)",
      definition: [
        "Redux is a predictable (கணிக்கக்கூடிய) state management library used to manage the global state of an application in a single centralized store, making state changes predictable and easy to debug.",

        "Redux follows 3 core principles",

        "Store: A single JavaScript object that holds the entire application state.",
        "Store: The store holds the application's Redux state and provides methods such as (such as = போன்ற / உதாரணமாக) dispatch() and getState() to interact with that state.",

        "State: State is a built-in React object that stores data that can change over time and causes the component to re-render when it is updated.",
        "Action: An action is a plain JavaScript object that describes what happened or what should happen in the application. It must contain a type property and can optionally contain a payload.",

        "Reducer: A reducer is a function that receives the current state and an action ",
        "Reducer determines how the state should change based on the action.",
        "Dispatch: Dispatch is used to send an action to the Redux store. The store passes the action to the reducer to update the state.",
        "A slice is a feature-based section of the Redux store that contains the initial state, reducers, and automatically generated action creators for that feature.",
        "React-Redux: React-Redux is the official library that connects Redux with React applications.",
        "useSelector() is a React-Redux hook used to read or select data from the Redux store inside a React component. When the selected state changes, the component re-renders.",
        "useSelector() → React component-ல் தேவையான state-ஐ select செய்யும்",
        "useDispatch() is a React-Redux hook used to get the dispatch function, which is used to send actions to the Redux store to update the state.",
        "Redux Toolkit (RTK): Redux Toolkit is the official recommended way to write Redux logic. It simplifies Redux development with APIs such as createSlice(), configureStore(), and createAsyncThunk().",
        "Payload: Payload is the data or value passed along with an action, which the reducer can use to update the state.",
        "getState() → current state-ஐ read பண்ணும்.",
        "getState() is a Redux store method used to retrieve the current state from the Redux store.",
        "dispatch() is a Redux store method used to send an action to the Redux store, which triggers the reducer to update the state.",
        "dispatch() → action-ஐ store-க்கு அனுப்பும்.",
      ],
    },

    {
      title: "Lifecycle Method",
      definition: [
        "React lifecycle methods are built-in methods that allow us to run code at different stages of a components lifecycle, such as when the component is created, updated, and removed from the DOM.",
        "React component-க்கு mainly 3 lifecycle phases irukku:",
        "Mounting - Component DOM-la create/add aagum.",
        "Updating - Component state or props change aagumbodhu update aagum.",
        "Unmounting - Component DOM-lendhu remove aagum.",
        "Class Component-la important lifecycle methods:",
        "componentDidMount() → component first time render aana piragu",
        "componentDidUpdate() → state/props update aana piragu",
        "componentWillUnmount() → component remove aagurathukku munnaadi",
        "React lifecycle methods are methods used to execute code at different stages of a component’s lifecycle — mounting, updating, and unmounting. In class components, common methods are componentDidMount, componentDidUpdate, and componentWillUnmount. In functional components, we commonly use useEffect for lifecycle-related side effects.",
      ],
    },

    // Good 👍 Props drilling avoid பண்ணுவது correct. ஆனால் useContext()-ஐ global state management / centralized store என்று சொல்வது technically correct இல்லை.
    {
      title: "Context",
      definition: [
        "useContext() is a React Hook used to access data from a Context without passing props through every level of the component tree. It helps avoid prop drilling and allows components to share data such as theme, language, or user information.",
      ],
    },

    {
      title: "React Query",
      definition: [
        "React Query is a library used to fetch, cache, and manage server data in React applications.",
        "React Query (இப்போது TanStack Query) என்பது API data-வை fetch, cache, update, sync செய்ய பயன்படும் ஒரு library.",
      ],
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
      title: "What is React.StrictMode?",
      definition: [
        "React.StrictMode is a development-only feature in React that helps us find common bugs and potential problems in our components. It provides additional checks and warnings during development and does not affect the production build.",
        "Strict Mode is a tool for highlighting potential problems in an application. It activates additional checks and warnings for its descendants(சந்ததியினர்).",
        "Strict Mode does not render any visible UI. It only activates additional checks and warnings for its descendants.",
      ],
    },

    {
      title: "What is lazy loading in React? Why do we use React.lazy()?",
      definition: [
        "Lazy loading is a technique where components or code are loaded only when they are needed instead of loading everything at the initial page load. In React, we can use React.lazy() to lazy-load components. This can improve the initial loading performance of the application.",
        "Lazy loading is the technique of loading a component or piece of code only when it is needed, instead of loading everything at the initial page load. In React, React.lazy() is commonly used for lazy loading components.",
      ],
    },

    {
      title: "Suspense",
      definition: [
        "React Suspense is a built-in feature that lets you display a fallback(மாற்று விருப்பம்) UI (such as a loading spinner or skeleton screen) while waiting for asynchronous content to become ready.",
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
    },
    {
      title: "State Lifting ",
      definition: [
        "Lifting state up means moving shared state from a child component to their closest common parent component. The parent manages the state and passes the data and event handlers to the child components through props. We use it when multiple child components need to share or synchronize the same data.",
        "State Lifting என்பது React-ல் பயன்படுத்தப்படும் ஒரு pattern. இதில் Child Component-ல் இருக்கும் state-ஐ, அதைப் பயன்படுத்தும் அனைத்து Child Components-க்கும் பொதுவான (Closest Common) Parent Component-க்கு மாற்றுவது ஆகும்.",
        "Child state → Move to common Parent → Pass through props",
      ],
    },

    {
      title: "React.Fragment",
      definition: [
        "React.Fragment is used to group multiple elements or child components without adding an extra DOM element to the page. It helps us return multiple elements from a component without using an unnecessary wrapper like a <div>.",
        "Fragment → Group elements → No extra DOM node",
      ],
    },

    {
      title: "Reconciliation",
      definition: [
        "Reconciliation is the process React uses to compare the previous Virtual DOM with the new Virtual DOM after a state or prop change. React identifies what has changed and updates only the necessary parts of the actual DOM.",
      ],
    },

    {
      title: "Code Splitting",
      definition: [
        "Code splitting is the process of splitting a large JavaScript bundle into smaller chunks that can be loaded when needed. It helps reduce the initial bundle size and improves the application's loading performance.",
        "Code splitting is a technique of splitting the application's JavaScript bundle into smaller chunks. These chunks can be loaded when they are needed instead of loading the entire application at once. It helps improve the initial loading performance of the application.",
      ],
    },

    {
      title: "Composition in React",
      definition: [
        "Building components by combining smaller components instead of inheriting from them.Composition allows components to be combined using props and children to share behavior and UI.",
        "Composition patterns",
        "Children Pattern (Most Common)",
        "Props-based Composition",
        "Slot Pattern (Named Children)",
        "Compound Components Pattern (Very Important 🔥)",
        "Render Props Pattern",
      ],
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
      title: "Error Boundary",
      definition: [
        "Error Boundary is a React component that catches JavaScript errors in its child component tree during rendering and displays a fallback UI instead of crashing the entire application.",
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
      ],
    },
    {
      title: "Client Components",
      definition: [
        "Components that run in the browser and support React hooks like useState.",
      ],
    },

    {
      title: "Client Side Rendering (CSR) ",
      definition: [
        "Client Side Rendering (CSR) is a rendering technique where the browser loads a minimal HTML page and uses JavaScript to render the content.",
        "All UI rendering happens in the browser (client side), not on the server.",
        "Order பண்ணுங்க... cooking start ஆகும் 😂🔥",
        "Page first empty… then data entry… full build-up scene 😂🔥",

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
    {
      title: "Hydration Error",
      definition: [
        "Happens when the page looks different on server vs client, so React gets confused while attaching to the HTML.",
        "Fix: Use useEffect for things like date/time or random values, so they load only in the browser, not on the server.",
      ],
    },
    {
      title: "HTTP Interceptor",
      definition: [
        "A place where you can catch every API request or response before it reaches your code, and do something automatically — like adding a token or handling errors.",
        "In React, we don't have this built-in like Angular, so we use Axios interceptors (or a custom fetch wrapper) to do the same thing.",
      ],
    },
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
        "Node.js is an open-source, cross-platform JavaScript runtime environment that allows developers to run JavaScript code outside the browser.",
        "It is built on Chrome's V8 JavaScript engine and is widely used for building fast and scalable server-side applications.",
        "தமிழில்: Node.js என்பது browser-க்கு வெளியே JavaScript-ஐ இயக்க உதவும் runtime environment.",
      ],
    },

    {
      title: "What is the difference between Node.js and JavaScript?",
      definition: [
        "Node.js is a JavaScript runtime environment.",
        "Node.js is a runtime environment that allows JavaScript to run outside the browser, such as on a server.",
        "JavaScript is a programming language that can run in browsers.",
        "JavaScript is a programming language, and browsers provide a JavaScript engine to run it. ",
      ],
    },

    {
      title: "What is the V8 engine in Node.js?",
      definition: [
        "V8 is a JavaScript engine developed by Google. It executes JavaScript code by compiling it into machine code. Node.js uses the V8 engine to execute JavaScript outside the browser.",
        "V8 → JavaScript engine",
        "Node.js → Runtime environment",
        "V8's job → Execute JavaScript",
        "Node.js's job → Provides runtime features like file system, HTTP, networking, etc.",
      ],
    },

    {
      title: "What is the difference between Node.js and a Node.js module?",
      definition: [
        "Node.js is a JavaScript runtime environment that allows developers to run JavaScript code outside the browser, mainly for server-side applications.",
        "A module is a reusable piece of JavaScript code that contains related functionality.",
        "Node.js = Runtime environment",
        "Module = Reusable piece of code",
      ],
    },

    {
      title: "NPX",
      definition: [
        "npx is used to execute packages/CLI commands, often without installing the package globally.",
      ],
    },
    {
      title: "NPM",
      definition: [
        "NPM stands for Node Package Manager. It is used to install, manage, and share packages (dependencies) in a Node.js project.",
      ],
    },

    {
      title: "What is package.json in a Node.js project?",
      definition: [
        "package.json is a configuration file in a Node.js project. It contains information about the project, including its dependencies, package versions, scripts, and project metadata.",
      ],
    },
    {
      title: "What is the difference between dependencies and devDependencies?",
      definition: [
        "dependencies are packages required for the application to run in production.",
        "devDependencies are packages required mainly during development, testing, linting, and building.",
      ],
    },
    {
      title: "Event Loop",
      definition: [
        "Event Loop is a mechanism in Node.js that allows it to handle asynchronous operations and execute their callbacks when the Call Stack is empty.",
        "The Event Loop is a mechanism in Node.js that continuously checks the Call Stack and callback queues, and moves callbacks to the Call Stack when it is empty.",
        "The Event Loop is a mechanism in Node.js that allows it to perform non-blocking I/O operations, despite the fact that JavaScript is single-threaded.",
      ],
    },

    {
      title: "What is require() in Node.js? How is it different from import?",
      definition: [
        "require() is used to import modules or packages in CommonJS",
        "import is used to import modules or packages using ES Modules (ESM).",
      ],
    },

    {
      title: "What is the difference between require() and import?",
      definition: [
        "require() is used in CommonJS modules.",
        "require() loads modules synchronously.",
        "import is used in ES Modules.",
        "import supports static analysis and modern JavaScript features.",
      ],
    },

    {
      title: "Vite",
      definition: [
        "Vite is a fast and modern build tool for web development.",
        "It is mainly used for development and building applications for production.",
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
      title: "What is Blocking?",
      definition: [
        "Blocking means the program waits for an operation to complete before executing the next statement. During this time, the execution is paused until the current task finishes.",
        "Blocking-na oru operation complete ஆகுற வரைக்கும் program wait பண்ணும். அந்த operation முடியும் வரை next statement execute ஆகாது. Operation complete ஆன பிறகுதான் next task execute ஆகும்.",
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
        "What is the difference between throw, try...catch, and next(error) in Express?",
      definition: [
        "throw → Manually creates and throws an error.",
        "try → Contains code that may throw an error.",
        "catch → Catches and handles the error thrown from the try block",
        "next(error) → Passes the error to Express's error-handling middleware.",
      ],
    },

    {
      title: "HTTP Status Codes",
      definition: [
        "200 → Success Request successful. Example: getting products successfully.",
        "201 → Created → New resource created successfully. Example: creating a product.",
        "400 → Bad Request → Client sent invalid data/request.",
        "401 → Unauthorized → Authentication is required or token is invalid/missing",
        "403 → Forbidden → User is authenticated but doesn't have permission",
        "404 → Not Found → Requested resource/route was not found.",
        "500 → Internal Server Error → Unexpected error occurred on the server",
      ],
    },

    {
      title: "Types of APIs",
      definition: [
        "REST APIs: Representational State Transfer APIs that use HTTP methods.",
        "GraphQL APIs: A query language for APIs that allows clients to request specific data.",
        "SOAP APIs: Simple Object Access Protocol APIs that use XML format.",
        "WebSocket APIs: Real-time communication protocols for bidirectional data exchange.",
      ],
    },

    {
      title: "Types of Cache ",
      definition: [
        "Browser Cache",
        "Server Cache",
        "Database Cache",
        "CDN Cache",
        "Application Cache",
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
        "What is the difference between fs.readFile() and fs.readFileSync()?",
      definition: [
        "fs.readFile() is asynchronous and non-blocking.",
        "fs.readFileSync() is synchronous and blocks execution until the file is read.",
      ],
    },
    {
      title: "What are Streams in Node.js?",
      definition: [
        "A Stream is a Node.js object that allows you to read or write data continuously in small chunks, instead of loading the entire file into memory at once.",
        "Streams are useful for handling large files, videos, audio, and network data efficiently.",
        "Stream என்பது பெரிய data-வை ஒரே நேரத்தில் memory-க்கு load செய்யாமல், சிறிய சிறிய பகுதிகளாக (chunks) படிக்க அல்லது எழுத உதவும் Node.js feature.",
        "Data-வை சிறிய chunks-ஆ process பண்ணும்.",
        "Memory usage குறைவு.",
        "பெரிய files-க்கு நல்லது.",
        "Data வரும்போதே process செய்ய ஆரம்பிக்கும்.",
        "Example: fs.createReadStream(), fs.createWriteStream()",
      ],
    },
    {
      title: "What is a Buffer?",
      definition: [
        "A Buffer is a built-in Node.js object used to store and manipulate raw binary data (bytes).",
        "Buffers are commonly used when working with files, streams, network communication, images, and videos.",
        "It represents (என்பதைக் குறிக்கிறது) a fixed-size sequence of bytes.",
        "Buffer என்பது Node.js-ல் binary data (bytes)-வை தற்காலிகமாக (temporarily) memory-ல் சேமிக்க பயன்படும் ஒரு object.",
        "முழு data-வையும் ஒரே தடவையில் memory-க்கு load பண்ணும்.",
        "Memory usage அதிகம்.",
        "சிறிய files-க்கு நல்லது.",
        "Data முழுவதும் வந்த பிறகுதான் process செய்யும்.",
        "Example: Buffer.from(), Buffer.alloc()",
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
        "Child processes are separate processes created by Node.js to execute tasks or system commands independently from the main process.",
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
      title:
        "What is a session in Node.js? How is it different from JWT authentication?",
      definition: [
        "Session is a server-side mechanism used to maintain a user's login state. The server stores session data, and the client usually stores a session ID in a cookie.",
        "JWT authentication uses a signed token that contains claims and is sent between the client and server to authenticate requests. The server can validate the token without necessarily storing session state for each user.",
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
        "Middleware is a function that runs between the incoming request and the final response. ",
        "A function with access to req, res, and next. It can execute code, modify request/response objects, end the cycle, or call next() to pass control to the next middleware.",
      ],
    },
    {
      title: "Types of Middleware",
      definition: [
        "Application-level (app.use)",
        "Router-level (router.use)",
        "Error-handling ((err, req, res, next) => {})",
        "Built-in (express.json(), express.static())",
        "Third-party (cors, morgan)",
      ],
    },

    {
      title: "What is express.Router() and why do we use it?",
      definition: [
        [
          "express.Router() is used to create modular and separate route handlers in an Express.js application. It helps us organize routes into different files.",
        ],
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
        "GET - Used to retrieve/fetch data from the server..",
        "POST - Used to send data to the server, commonly to create a new resource.",
        "PUT - Used to replace the entire resource with new data.",
        "PATCH - Used to update specific fields of an existing resource",
        "DELETE - Remove data.",
      ],
    },
    {
      title: "What is a REST API?",
      definition: [
        "REST (Representational State Transfer) is an architectural style for building web services.",
        "that allow clients and servers to communicate using HTTP methods.",
        "REST APIs commonly exchange data in JSON format.",
      ],
    },

    {
      title: "Environment Variables",
      definition: [
        "Environment variables are used to store sensitive data like API keys and ports outside the code.",
        "Environment variables store configuration values.",
        "Examples include PORT, database URL, and secret keys.",
        "They improve security and flexibility.",
        "Example: process.env.PORT",
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
      title: "REST API and HTTP API",
      definition: [
        "REST API is a type of API that follows the REST architectural style.",
        "HTTP API is an API that uses HTTP protocol for communication.",
      ],
    },
    {
      title:
        "What is error-handling middleware in Express, and how do you identify it?",
      definition: [
        "Error handling is the process of detecting, catching, and managing errors in an application. In Express.js, we use error-handling middleware to handle errors and send an appropriate response to the client.",
      ],
    },
    {
      title: "Difference between PUT and PATCH",
      definition: [
        "PUT Used to replace the entire resource with new data.",
        "PATCH Used to update specific fields of an existing resource.",
      ],
    },
    {
      title: "What is the difference between POST and PUT?",
      definition: [
        "POST is used to create a new resource.",
        "PUT is used to update an existing resource.",
      ],
    },
    {
      title: "Idempotency",
      definition: [
        "An operation is idempotent if making the same request multiple times has the same intended effect as making it once.",
      ],
    },
    {
      title: "Difference between req.params, req.query, and req.body",
      definition: [
        "req.params Gets route parameters from the URL.",
        "req.query Gets query string parameters from the URL.",
        "req.body Gets data sent in the request body, usually with POST/PUT/PATCH",
        "req.params → { id: `123` }",
        "req.query → { search: `nodejs` }",
        "req.body → { name: `John`, age: 30 }",
      ],
    },

    {
      title: "What is MVC architecture?",
      definition: [
        "MVC (Model-View-Controller) is a software architectural pattern that separates an application into three main components: Model, View, and Controller.",
        "Model → Data / Database logic",
        "View → UI / Presentation",
        "Controller → Handles request and response",
      ],
    },

    {
      title: "Difference between app.use() and app.get()",
      definition: [
        "app.use() → used to register middleware. It can run for multiple HTTP methods.",
        "app.get() → used to handle GET requests for a specific route",
      ],
    },

    {
      title: "Difference between res.send() and res.json()",
      definition: [
        "res.send() Sends a response to the client. It can send strings, HTML, objects, buffers, etc",
        "res.json() Sends a JSON response to the client.",
      ],
    },

    {
      title: "What is express.json()?",
      definition: [
        "express.json() is middleware used to parse incoming JSON request bodies, so we can access the data through req.body.",
      ],
    },
    {
      title: "What is express.urlencoded()?",
      definition: [
        "It parses URL-encoded form data.",
        "It is commonly used for HTML form submissions.",
        "express.urlencoded() is middleware used to parse data sent from HTML forms using application/x-www-form-urlencoded format.",
      ],
    },

    {
      title: "CORS (குறுக்கு-மூல கோரிக்கைகள்)",
      definition: [
        "CORS (Cross-Origin Resource Sharing) is a browser security mechanism that controls whether a web application from one origin can to access resources from another origin.",
        "CORS (Cross-Origin Resource Sharing) is a technique used to allow or restrict requests between different domains or origins.",
        "It is commonly used to enable secure communication between frontend and backend applications running on different origins.",
        "தமிழில்: CORS என்பது different domains அல்லது origins-களுக்கு இடையில் requests அனுமதிப்பதற்கான ஒரு பாதுகாப்பு முறை.",
      ],
    },
    {
      title: "What is express.Router()?",
      definition: [
        "express.Router() is used to create modular and mountable route handlers. It helps us organize related routes into separate files and keep the application clean and maintainable.",
        "Router instance/create a router",
        "It is used to create a new router instance.",
        "it is not a middleware",
        "Modular → தனித்தனி பகுதிகளாகப் பிரிக்கப்பட்ட",
        "Mountable → குறிப்பிட்ட path-க்கு இணைக்கக்கூடிய",
        "Related routes → தொடர்புடைய routes",
        "Maintainable → எளிதாக பராமரிக்கக்கூடிய",
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
        "Helmet = Express application-க்கு security headers automatically configure செய்யும் middleware.",
        "Security is the practice of protecting a server and application from unauthorized access, attacks, and vulnerabilities.",
        "It helps secure user data, improve application safety, and prevent common web attacks.",
        "தமிழில்: Security என்பது server மற்றும் application-ஐ attacks மற்றும் unauthorized access-இலிருந்து பாதுகாப்பது.",
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
      title: "JWT (JSON Web Token) ",
      definition: [
        "JWT (JSON Web Token) is a token-based, stateless authentication mechanism used to securely transmit information between the client and server. ",
        "The server can use the token to identify and authenticate the user without storing session state on the server.",
        "Three parts of a JWT",

        "1. Header Contains information about the token, such as the algorithm and token type (e.g., HS256, RS256).",
        "2. Payload contains the claims — user data like userId, email, role, and expiry time (exp). This is Base64 encoded, NOT encrypted, so sensitive data should not be stored here.",
        "3. Signature Used to verify that the token has not been modified and that it was created using the expected secret/key",

        "Header → Contains token type and signing algorithm.",
        "Payload → Contains claims/data such as user ID or role.",
        "Signature → Verifies that the token hasn't been changed.",
      ],
    },

    {
      title: "Authentication / Authorization (அங்கீகரிப்பு / அனுமதி)",
      definition: [
        "Identity 👤 Authentication is the process of verifying(who you are) a user's identity — for example, using email and password.",
        "Permission 🔐 Authorization is the process of checking what an authenticated user is allowed (What can you access?) to access or do, often based on roles and permissions.",
        "Both are commonly used to secure applications and protect resources.",
      ],
    },

    {
      title:
        "What is the difference between authentication middleware and authorization middleware in Express?",
      definition: [
        "Authentication middleware → Verifies who the user is, usually by checking a session, JWT, or other credentials.",
        "Authorization middleware → Checks what the authenticated user is allowed to do, usually based on roles or permissions.",
      ],
    },

    {
      title:
        "Where should a JWT be stored on the client, and what are the common options?",
      definition: [
        "JWTs can be stored in the browser's localStorage or sessionStorage.",
        "Alternatively, they can be stored in HTTP-only cookies for better security.",
      ],
    },
    {
      title: "Body Parser",
      definition: [
        "app.use(express.json())",
        "Body parser middleware parses incoming request bodies into JSON or URL-encoded format.",
        "It allows developers to access request data using req.body in APIs.",
        "தமிழில்: Body Parser என்பது request body data-ஐ parse செய்து req.body மூலம் access செய்ய உதவும் middleware ஆகும்.",
      ],
    },
    {
      title: "Compression (சுருக்கம்)",
      definition: [
        "app.use(compression())",
        "Compression is a technique used to reduce the size of response data sent from the server.",
        "It helps improve application performance and reduces bandwidth usage.",
      ],
    },

    {
      title: "Logging (பதிவு செய்தல்)",
      definition: [
        "app.use(morgan())",
        "logs incoming requests for debugging and monitoring.",
        "Logging is a technique used to record information about requests, responses, and application events.",
        "It helps developers monitor, debug, and track server activity more effectively.",
        "தமிழில்: Logging என்பது application அல்லது server-ல் நடக்கும் செயல்களை பதிவு செய்வது.",
      ],
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
      title: "GitHub Commands",
      definition: [
        "Git Cherry-pick , git checkout main, git cherry-pick <commit-hash-of-C>",
        " git pull origin main",
        "If git pull பண்ணும்போது error வந்தா (merge conflict) :👉 use this (safe for your case): git pull origin main --rebase",
        "git config user.name",
        "git config user.email",
        `git config --global user.name "silambarasanstr"`,
        `git config --global user.email "simbube2013@gmail.com"`,
        "git config --global init.defaultBranch main",
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
    {
      title: "Removing files from Git tracking  ",
      definition: [
        "Already git la commit pannirundha files (node_modules, .next) - ippo .gitignore add pannirukom, aana already tracked ah irundha files ku andha gitignore apply aagadhu. So andha files ah git tracking la irundhu remove pannanum (untrack pannanum), aana computer la irundhu delete pannakoodadhu.",
        "git rm -r --cached node_modules",
        "git rm -r --cached frontend/node_modules",
        "git rm -r --cached backend/node_modules",
        "git rm -r --cached frontend/.next",
      ],
    },
    {
      title: "Clean install / Fresh install prep",
      definition: [
        "Idhu Clean install / Fresh install prep nu solranga - dependencies um lock files um completely delete pannitu, fresh ah reinstall panna prepare panradhu.",
        "Remove-Item -Recurse -Force node_modules",
        "Remove-Item yarn.lock",
        "Remove-Item package-lock.json",
      ],
    },
  ],
  cicd: [
    {
      title: "CI/CD Pipeline",
      definition: [
        "CI/CD is a method to frequently deliver applications by automating stages like build, testing, and deployment.",
      ],
    },
    {
      title: "Continuous Integration (CI)",
      definition: [
        "Continuous Integration is the practice of automatically integrating code changes into a shared repository and running tests to detect issues early.",
      ],
    },

    {
      title: "Continuous Deployment (CD)",
      definition: [
        "Continuous Deployment automatically deploys every change that passes testing directly to production without manual approval.",
      ],
    },

    {
      title: "Benefits of CI/CD",
      definition: [
        "CI/CD improves code quality, reduces bugs, speeds up delivery, enables faster feedback, and ensures reliable deployments.",
      ],
    },
    {
      title: "CI vs CD",
      definition: [
        "CI focuses on integrating(ஒருங்கிணைத்தல்) and testing code changes,",
        "CD focuses on delivering or deploying the code to production.",
      ],
    },
    {
      title: "CI/CD Tools",
      definition: [
        "Popular tools include Jenkins, GitHub Actions, GitLab CI/CD, CircleCI, and Azure DevOps.",
      ],
    },
  ],
  docker: [
    {
      title: "Docker",
      definition: [
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
      title: "Docker Compose Commands",
      definition: [
        "Docker Compose commands?",
        "docker-compose up, down, build, ps",
        "Example: docker-compose up -d",
      ],
    },
    {
      title: "New Feature",
      definition: [
        "feat: Add a new feature or functionality",
        'git commit -m "feat: add member registration page"',
        'git commit -m "feat: implement auction bidding system"',
      ],
    },

    {
      title: "Bug Fix",
      definition: [
        "fix: Fix a bug or incorrect behavior",
        'git commit -m "fix: resolve login authentication issue"',
        'git commit -m "fix: correct installment payment calculation"',
      ],
    },

    {
      title: "UI Changes - Formatting, CSS, Spacing",
      definition: [
        "style: Changes that do not affect application logic",
        'git commit -m "style: improve dashboard layout and spacing"',
        'git commit -m "style: update table responsive design"',
      ],
    },

    {
      title: "Refactoring - Code Improvement",
      definition: [
        "refactor: Code changes that improve structure without changing behavior",
        'git commit -m "refactor: extract reusable form components"',
        'git commit -m "refactor: simplify API service functions"',
      ],
    },

    {
      title: "Documentation Changes",
      definition: [
        "docs: Documentation-only changes",
        'git commit -m "docs: update project README"',
        'git commit -m "docs: add API documentation"',
      ],
    },

    {
      title: "Testing - Test Cases Added/Updated",
      definition: [
        "test: Add or update test cases",
        'git commit -m "test: add Playwright login test"',
        'git commit -m "test: add member registration tests"',
      ],
    },

    {
      title: "Dependencies - Maintenance",
      definition: [
        "chore: Maintenance tasks that do not modify application functionality",
        'git commit -m "chore: update project dependencies"',
        'git commit -m "chore: remove unused dependencies"',
      ],
    },

    {
      title: "Performance",
      definition: [
        "perf: Improve application performance",
        'git commit -m "perf: optimize member list rendering"',
        'git commit -m "perf: reduce unnecessary API requests"',
      ],
    },

    {
      title: "Build",
      definition: [
        "build: Changes related to build system or build configuration",
        'git commit -m "build: update Vite build configuration"',
        'git commit -m "build: add production Docker configuration"',
      ],
    },

    {
      title: "CI/CD",
      definition: [
        "ci: Changes to CI/CD configuration and automation",
        'git commit -m "ci: add GitHub Actions workflow"',
        'git commit -m "ci: update deployment workflow"',
      ],
    },

    {
      title: "Revert",
      definition: [
        "revert: Revert a previous commit",
        'git commit -m "revert: revert member registration changes"',
      ],
    },

    {
      title: "Docker",
      definition: [
        "Docker commands for building and running containers",
        "docker compose up --build -d",
        "docker compose up -d",
        "docker compose down",
        "docker compose logs",
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
    {
      title: "Time Complexity",
      definition: [
        "Time complexity tells how fast or slow an algorithm runs as input size increases.",
        "A way to measure how the running time of an algorithm increases as the size of the input (n) increases, usually expressed using Big O notation",
        "Algorithm-oda input size (n) perusaagum bothu, execution time எப்படி increase aaguthுனு measure pannுறது — usually Big O notation vachi represent pannுவோம்",
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
    {
      title: "Chit Fund Management System",
      definition: [
        "A Chit Fund Management System is a software solution designed to manage chit fund operations, including member management, fund collection, and distribution processes.",
      ],
      example: `Chit Fund Software, Online Chit Fund Management`,
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
  UIUX: [
    {
      title: "Types of Developers in Software Development",
      definition: [
        "Frontend Developer: Builds the user interface of websites and web applications.",
        "Backend Developer: Builds APIs, manages databases, and handles server-side logic.",
        "Full-Stack Developer: Works on both the frontend and backend of web applications.",
        "Mobile App Developer: Builds Android and iOS applications.",
        "DevOps Engineer: Manages and automates the software deployment and infrastructure.",
        "QA Automation Engineer: Develops and executes automated tests to ensure software quality.",
        "Data Engineer: Designs and maintains the data architecture and pipelines for data processing and analysis.",
      ],
    },
    {
      title: "Git vs GitHub",
      definition: [
        "Git is a distributed version control system that tracks changes in files and coordinates work among multiple developers.",
        "GitHub is a web-based platform that provides hosting for Git repositories and offers additional features like issue tracking, pull requests, and collaboration tools.",
        "While Git is the tool for version control, GitHub is a service that uses Git and adds a user-friendly interface and social features.",
      ],
    },
    {
      title: "UI vs UX",
      definition: [
        "UI (User Interface) refers to the visual elements and layout of a product.",
        "UX (User Experience) refers to the overall experience of using a product.",
      ],
    },
    {
      title: "Types of UI",
      definition: [
        "Liquid Glass UI",
        "Bento Grid UI",
        "Spatial UI Design",
        "Claymorphism",
        "Neumorphism",
        "Glassmorphism",
        "Skeuomorphism",
        "Minimalism",
        "Maximalism",
      ],
    },
    {
      title: "Design Patterns",
      definition: [
        "F Pattern",
        "Z Pattern",
        "Gutenberg Pattern",
        "Layer Cake Pattern",
        "Split Screen Pattern",
        "Grid Pattern",
        "Spotted Pattern",
      ],
    },
  ],
  English: [
    {
      title: "May I speak with Jiva?",
      definition: ["Yes, Speaking. and Yes you are speaking with Jiva."],
    },
    {
      title: "Good morning/afternoon. May I ask who is calling, please?",
      definition: [
        "I am Ravi from XYZ Company.",
        "How can I help you today?",
        "Then you can continue with",
        "How may I help you?",
        "What is this regarding?",
        "How can I assist you today?",
        "May I know the purpose of your call?",
        "Who would you like to speak with?",
      ],
    },
    {
      title: "How are you?",
      definition: ["I'm doing well, thank you for asking."],
    },

    {
      title: "If you're available today",
      definition: [
        "Today : Yes, I am available today. Please let me know the time, and I'll be there.",
        "Tomorrow: I'm sorry, I'm not available today. Would it be possible to schedule the interview for tomorrow? I'm available at your convenience.",
        "Coming Friday: I'm sorry, I'm not available today. Would it be possible to schedule the interview for this coming Friday? I'm available throughout the day.",
      ],
    },

    {
      title: "What time would be convenient for you?",
      definition: [
        "I'm available anytime after 2:00 PM.",
        "Thank you. Could you please share the meeting link and any other details?",
        "Recruiter: Okay, we'll send you the details by email.",
        "Thank you. I'll check my email and be ready for the interview.",
      ],
    },

    {
      title: "Are you currently working with any company?",
      definition: [
        "Yes, I am currently working with XYZ Company.",
        "No, I am not currently working with any company. and I am looking for new opportunities.",
      ],
    },

    {
      title: "please introduce yourself",
      definition:
        "I am Silambarasan from Vellore I am a frontend developer with 7 years of experience. I specialize in HTML, CSS, JavaScript, and React.js.",
    },

    {
      title: "Tell me about your experience ",
      definition: [
        "I have 7 years of experience as a frontend developer. My primary skills are HTML, CSS, JavaScript, and Bootstrap. I also have 2 years of experience working with React.js.",
      ],
    },

    {
      title: "What are your main technical skills?",
      definition: [
        "My primary skills are HTML, CSS, JavaScript, and Bootstrap. I also have 2 years of experience with React.js and Tailwind CSS.",
      ],
    },

    {
      title: "Can you tell me about your current or most recent project?",
      definition: [
        "In my recent projects, I have worked on e-commerce websites and admin dashboards. I have created reusable components and integrated APIs. I have also worked on projects such as a Payroll Management System, Chit Fund Management System, and DineFlow Restaurant POS system.",
      ],
    },
    {
      title: "What was your role and responsibility in these projects?",
      definition: [
        "My role was as a Frontend and React Developer. My responsibilities included developing frontend applications using React.js and Tailwind CSS, creating reusable components, and integrating APIs. I also focused on building responsive and user-friendly interfaces.",
      ],
    },
    {
      title:
        "responsibility or What are your responsibilities as a frontend developer?",
      definition: [
        "My role was Frontend Developer.",
        "My responsibility was to develop the frontend of the application using React and Tailwind CSS, creating reusable components, integrating REST APIs managing application state, fixing frontend bugs and ensuring a smooth user experience.",
        "My responsibilities include developing frontend applications using React.js and Tailwind CSS, creating reusable components, and integrating APIs. I also focus on building responsive and user-friendly interfaces.",
      ],
    },
    {
      title: "Why did you choose React.js for your projects?",
      definition: [
        "I chose React.js because it is fast and helps us build interactive user interfaces. It provides reusable components, which makes application development easier and more maintainable. React.js is also widely used in the industry, so it is a good choice for building modern web applications.",
      ],
    },

    {
      title: "What are your strengths?",
      definition: [
        "I am a quick learner and adapt well to new technologies.",
        "I have strong problem-solving skills and attention to detail.",
        "I am a good team player and communicate effectively with others.",
      ],
    },
    {
      title: "What are your weaknesses?",
      definition: [
        "I tend to be a perfectionist, which can sometimes slow down my work.",
        "I can be overly critical of my own work, which may affect my confidence.",
      ],
    },
    {
      title: "Antha company enaku work pudikala....",
      definition: [
        "I am currently not working with any company.",
        "I am looking for new opportunities.",
        "I felt (உணர்ந்தேன் ) that the company and role were not the right fit for my long-term career goals, so I decided to look for new opportunities where I can grow and contribute more effectively.",
        "That company wasn't a good fit for me.",
        "I wasn't happy working at that company.",
        "I didn't like working at that company.",
        "The work environment wasn't aligned with my expectations.",
        "I felt the role wasn't the right fit for my career goals.",
        "I was looking for better growth opportunities and challenges",
        "The company culture wasn't the right match for me.",
      ],
    },
  ],
  EnglishToTamil: [
    {
      title: "",
      definition: [
        "As a = ஆக / என்ற நிலையில்",
        "Modular = தொகுதிகளாக அமைந்த / பகுதிகளாகப் பிரிக்கப்பட்ட",
        "Mountable = ஏற்றக்கூடிய / பொருத்தக்கூடிய / நிறுவக்கூடிய",
        "Opinion = கருத்து",
        "Unopinionated = தனிப்பட்ட கருத்தைச் சாராத",
        "Making = உருவாக்குதல் / செய்வது",
        "such as = போன்ற / உதாரணமாக",
        "Enumerable = கணக்கிடக்கூடிய / ஒன்றன்பின் ஒன்றாக பார்க்கக்கூடிய",
        "Persists : நிலைத்திருக்கிறது / தொடர்ந்து இருக்கிறது / நீடிக்கிறது",
        "precise- துல்லியமான,சீரான, தெளிவான",
        "Manipulate - கையாளுதல்,தன் விருப்பப்படி மாற்றுதல்,  மாற்றுவது, திருத்துவது",
        "Virtualization-மெய்நிகராக்கம் - Simple-ஆ சொன்னா: ஒரு physical resource-ஐ software மூலம் virtual-ஆ உருவாக்குவது.",
        "integrating(ஒருங்கிணைத்தல்)",
        "Sufficient- போதுமானது",
        "(mutable - மாற்றக்கூடியது)",
        "predictable (கணிக்கக்கூடிய)",
        "fallback(மாற்று விருப்பம்) ",
        "ensures (உறுதிசெய்கிறது)",
        "Parse - பகுப்பாய்வ செய்",
        "parsed - பகுப்பாய்வு செய்யப்பட்டது",
        "Represents - குறிக்கிறது",
        "Defined - வரையறுக்கப்பட்ட",
        "descendants(சந்ததியினர்).",
        "among(இடையே)",
        "intentionally - வேண்டுமென்றே",
        "Eventual - இறுதியில்",
        "Refactoring - மறுசீரமைப்பு",
        "Intercept - இடைமறி,  தடுத்து பிடி,  நடுவில் தலையிட்டு நிறுத்து",
        "Instead - அதற்குப் பதிலாக",
        "Instances -  சம்பவங்கள் (or) நிகழ்வுகள்",
        "Identify - அடையாளம் காணவும்",
        "Intentionally - வேண்டுமென்றே",
        "Refers - சுட்டிக்காட்டுகிறது",
        "References - குறிப்புகள்,குறிப்பு, மேற்கோள்,சான்று,பரிந்துரை",
        "Progressively - படிப்படியாக",
        "Specified - குறிப்பிடப்பட்டது",
        "Define - வரையறுக்கவும்",
        "Efficiently - திறம்பட",
      ],
    },
  ],
};
