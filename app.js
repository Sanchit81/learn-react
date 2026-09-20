import React from "react";
import ReactDOM from "react-dom/client";

//JSX --> HTML LIKE SYNTAX(!HTML)
const heading1 = <h1 id="heading1">hello world through JSX </h1>;

const heading2 = (
  <h1 className="Head2" tabIndex="5">
    Hello everyone👀!!
  </h1>
);

// React components (same as normal js function) --> return react elements.
// Component composition -> one component can be used inside another component.
// Always name components in capital.
// There are many ways/syntax to write a component as shown below.

const Component1 = () => <h2>Hey there!!</h2>;

const heading3 = (
  <div>
    <Component1/>
    <h1>
    Hello everyone to this new world of trying and learning
  </h1>
  </div>
);

const Component2 = () => (
  <>
    {heading1}
    <Component1 />
    <h1 id="Component2">Hello from component2</h1>
  </>
);

const Component3 = () => {
  return <Component2 />; // or const Component3 = () => <Component2 />;
};

const Component4 = function () {
  return (
    <>
      <Component3 />
      <h1>Hello from component 4</h1>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {heading1}
    {heading2}
    <Component1 />
    <Component2 />
    <Component3 />
    <Component4 />
    {heading3}
  </>,
);
