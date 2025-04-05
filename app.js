import React from "react";
import ReactDOM from "react-dom/client";

const header = React.createElement("div", { id: "header" }, "This is div");
// React.createElement takes 3 arguments
// 1. type of element
// 2. attributes of the element
// 3. children of the element
// React.createElement returns a React element which is an object
// React.createElement => Reactelement - JS Object => HTMLElement(render)

// React elemet is object, JSX is syntax
// JSX is html like or XML like syntax
// JSX is not javascript
// JSX code is "transpiled" before it reached js engine by PARCEL, which internally uses package called BABEL
// JSX => (BABEL) React.createElement => ReactElement - JS Object => HTMLElement(render)s

// React element, we can put component inside element as well
const jsxHeading = (
  <div id="heading" className="head">
    H1 tag using JSX
    <div id="header">This is div nested</div>
  </div>
);

// React Component
// Class based components - old way
// Functional components - new way
// Functional components are just JS function returning JSX

// React Component
// component composition is writing one component inside another
const Title = () => <h1> React title component</h1>
const HeadingComponent = () => (
    <div>
        {/* component composition */}
        <Title />
        {/* JSX elemnt */}
        {jsxHeading}
        <div id="head">React 18 fun compnent</div>
    </div>
)

//! JSX sanitise the code, remove malicious code. Prevents cross site scripting
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(header);
// root.render(jsxHeading);
root.render(<HeadingComponent />);
