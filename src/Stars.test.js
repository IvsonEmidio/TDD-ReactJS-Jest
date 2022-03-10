import ReactDOM from "react-dom";
import Stars from "./Stars";

test("Renders a number", () => {
  //Creates a div
  const container = document.createElement("div");

  //Inserts the div on the body of testing DOM
  document.body.appendChild(container);

  //Renders the component in the created container
  ReactDOM.render(<Stars />, container);

  //Now, let's test values on the DOM.
  expect(document.body.textContent).toBe("3000");
});
