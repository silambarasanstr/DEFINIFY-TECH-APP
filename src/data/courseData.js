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

      // definition: `
      //               JavaScript is a lightweight, high-level, interpreted programming language primarily used to create interactive effects within web browsers.
      //               •	JavaScript is a dynamic programming language.
      //               •	JavaScript is a single-threaded language.
      //               •	JavaScript has three core components: ECMAScript (the language specification), DOM (Document Object Model), and BOM (Browser Object Model).
      //               `,
    },
    {
      title: "Object",
      definition:
        "An object is a collection of properties, where each property consists of a key-value pair. Objects are used to store and organize data, and they can hold various data types such as strings, numbers, arrays, and even other objects.",
    },

    {
      title: "Array",
      definition: [
        "In JavaScript, an array is a special type of object used to store multiple values in a single variable. Arrays help manage and manipulate groups of data efficiently.",
        "Arrays can hold any data type, including numbers, strings, objects, and even other arrays.",
        "Arrays have built-in methods for adding, removing, and iterating over elements, making them a powerful tool for handling collections of data in JavaScript.",
        "Arrays in JavaScript are dynamic in size (they are not fixed).",
        "Elements in an array are accessed using index numbers (starting from 0)",
      ],
    },

    {
      title: "Function",
      definition:
        "JavaScript functions are blocks of reusable code designed to perform a particular task or calculate a value. They can take inputs (parameters), perform actions, and return a result.",
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
        "A Promise is an object that represents the eventual completion or failure of an asynchronous operation.",
        "It is used to handle asynchronous operations in a more readable and maintainable way.",
        "A Promise can be in one of three states: pending, fulfilled, or rejected.",
        "A Promise can be used to handle the success or failure of an asynchronous operation.",
        "Promises can be chained together to handle multiple asynchronous operations in a sequence.",
        "The Promise API provides methods such as then(), catch(), and finally() to handle the resolution or rejection of a Promise.",
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
  ],
  reactjs: [
    {
      title: "React Links",
      definition: [
        "https://github.com/muazimmaqbool/Reactjs-with-Me/tree/master",
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
      ],
    },
    {
      title: "Next.js",
      definition:
        "Next.js is a React framework that enables several extra features, including server-side rendering and generating static websites.",
    },
  ],
  typescript: [
    {
      id: 1,
      title: "TypeScript",
      definition:
        "TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.",
    },
  ],
  nodeexpress: [
    {
      id: 1,
      title: "Node.js",
      definition:
        "Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside a web browser.",
    },
    {
      id: 2,
      title: "Express",
      definition:
        "Express.js is a back end web application framework for Node.js, designed for building web applications and APIs.",
    },
  ],
  mongodb: [
    {
      id: 1,
      title: "MongoDB",
      definition:
        "MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program.",
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
      definition: ["https://resources.criodo.com/courses/docker-fundamentals/"],
    },
    {
      title: "Docker",
      definition: [
        "What is Docker?",
        "Docker is a platform that uses OS-level virtualization to deliver software in packages called containers.",
      ],
    },
    {
      title: "Docker Container",
      definition: [
        "What is a Docker container?",
        "A Docker container is a lightweight, standalone, executable package that includes everything needed to run an application.",
      ],
    },
    {
      title: "Docker Image",
      definition: [
        "What is a Docker image?",
        "A Docker image is a read-only template used to create containers, containing code, libraries, and dependencies.",
      ],
    },
    {
      title: "Dockerfile",
      definition: [
        "What is a Dockerfile?",
        "A Dockerfile is a script with instructions used to build Docker images automatically.",
      ],
    },
    {
      title: "Docker Compose",
      definition: [
        "What is Docker Compose?",
        "Docker Compose is a tool used to define and run multi-container Docker applications using a docker-compose.yml file.",
      ],
    },
    {
      title: "docker-compose.yml",
      definition: [
        "What is docker-compose.yml?",
        "docker-compose.yml is a configuration file where services, networks, and volumes for multi-container apps are defined.",
      ],
    },
    {
      title: "Docker vs Virtual Machine",
      definition: [
        "What is the difference between Docker and Virtual Machine?",
        "Docker containers are lightweight and share the host OS, while Virtual Machines are heavier and include a full OS.",
      ],
    },
    {
      title: "Docker Commands - Basics",
      definition: [
        "What are basic Docker commands?",
        "docker --version, docker pull <image>, docker images, docker ps, docker ps -a",
      ],
    },
    {
      title: "Docker Commands - Run & Stop",
      definition: [
        "How to run and stop containers?",
        "docker run <image>, docker run -d <image>, docker stop <container_id>, docker start <container_id>",
      ],
    },
    {
      title: "Docker Commands - Build & Remove",
      definition: [
        "How to build and remove resources?",
        "docker build -t <name> ., docker rmi <image_id>, docker rm <container_id>",
      ],
    },
    {
      title: "Docker Commands - Logs & Exec",
      definition: [
        "How to check logs and access container?",
        "docker logs <container_id>, docker exec -it <container_id> bash",
      ],
    },
    {
      title: "Docker Compose Commands",
      definition: [
        "What are Docker Compose commands?",
        "docker-compose up (start services), docker-compose up -d (run in background), docker-compose down (stop and remove), docker-compose build (build services), docker-compose ps (list services)",
      ],
    },
  ],
};
