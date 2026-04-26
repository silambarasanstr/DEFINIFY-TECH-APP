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
      title: "Padding vs Margin",
      definition: [
        "Padding is the space between the content of an element and its border, while margin is the space outside the border of an element.",
        "Padding adds space inside an element, while margin adds space outside an element.",
        "Padding can affect the size of an element, while margin does not affect the size of an element.",
      ],
    },
    {
      title: "Box Model",
      definition: [
        "The box model is a model used to style HTML elements. It includes the content, padding, border, and margin of an element.",
        "The box model is used to determine the final size and position of an element on a web page.",
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
      title: "Z-index",
      definition: [
        "Z-index is a property used to determine the stacking order of positioned elements. Elements with a higher z-index are displayed on top of elements with a lower z-index.",
        "Z-index can be used to create overlapping or layered content.",
      ],
    },
    {
      title: "Flexbox",
      definition: [
        "Flexbox is a CSS layout module that provides a more efficient way to lay out, align and distribute space among items in a container, even when their size is unknown and/or dynamic.",
        "Flexbox allows for responsive design and can be used to create complex layouts with ease.",
      ],
    },
    {
      title: "Grid",
      definition: [
        "CSS Grid Layout is a two-dimensional layout system for the web. It allows developers to create complex and responsive grid-based layouts with ease.",
        "CSS Grid provides a powerful way to control the placement and alignment of elements within a grid container.",
      ],
    },
    {
      title: "Media Queries",
      definition: [
        "Media queries are a CSS technique used to apply different styles to a web page based on the characteristics of the device or screen size. They allow for responsive design and can be used to create layouts that adapt to different screen sizes.",
        "Media queries use the @media rule and can include conditions such as min-width, max-width, and orientation.",
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
      title: "Overflow",
      definition: [
        "Overflow is a CSS property that controls what happens to content that exceeds the dimensions of its container. It can be set to values such as visible, hidden, scroll, and auto.",
        "The overflow property is useful for managing content that may not fit within a container and can help prevent layout issues.",
      ],
    },
    {
      title: "Opacity",
      definition: [
        "Opacity is a CSS property that controls the transparency of an element. It can be set to a value between 0 (completely transparent) and 1 (completely opaque).",
        "The opacity property is useful for creating visual effects such as fading and layering elements on top of each other.",
      ],
    },
    {
      title: "Display Property",
      definition: [
        "The display property in CSS is used to determine how an element is displayed on the web page. It can take various values such as block, inline, inline-block, none, flex, grid, and more.",
        "The display property is essential for controlling the layout and visibility of elements on a web page.",
      ],
    },
    {
      title: "Flexbox",
      definition: [
        "Flexbox is a CSS layout module that provides a more efficient way to lay out, align and distribute space among items in a container, even when their size is unknown and/or dynamic.",
        "Flexbox allows for responsive design and can be used to create complex layouts with ease.",
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
      title: "Z-index",
      definition: [
        "Z-index is a CSS property that controls the stacking order of positioned elements. Elements with a higher z-index are displayed on top of elements with a lower z-index.",
      ],
    },
    {
      title: "Box Shadow",
      definition: [
        "Box-shadow is a CSS property that creates a shadow around an element. It can be used to add depth and elevation to elements on a web page.",
      ],
    },
  ],
  css: [
    {
      id: 1,
      title: "CSS",
      definition:
        "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language.",
    },
    {
      id: 2,
      title: "Selector",
      definition:
        "A CSS selector is a part of a CSS rule-set that chooses the content you want to style.",
    },
  ],
  javascript: [
    {
      id: 1,
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
      id: 2,
      title: "Object",
      definition:
        "An object is a collection of key-value pairs used to store data.",
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
      id: 1,
      title: "CI/CD",
      definition:
        "CI/CD is a method to frequently deliver apps to customers by introducing automation into the stages of app development.",
    },
  ],
  docker: [
    {
      id: 1,
      title: "Docker",
      definition:
        "Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers.",
    },
  ],
};
