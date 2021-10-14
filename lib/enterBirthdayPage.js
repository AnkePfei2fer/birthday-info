import { createElement } from "./elements.js";

// 📝 The onSubmit argument is not used. It should tell the parent component when the form is submitted and bypass the birthday.
// 📝 A submit input/button is missing

// Declares a function to creates the page to enter the birthday (higher order function: nimmt Funktion als Parameter entgegen)
export function createEnterBirthdayPage(onSubmit) {
  // Creates <input type="date" />
  const birthdayInput = createElement("input", {
    type: "date",
  });

  // Creates Submit Button
  const submitButton = createElement("button", {
    type: "submit",
    className: "submitButton",
    textContent: "Submit",
  });

  // Create a form element
  const formElement = createElement(
    "form",
    {
      className: "form",
      onsubmit: function (event) {
        event.preventDefault(); // verhindert, dass die Seite neu geladen wird
        onSubmit(birthdayInput.value); // Funktion onSubmit wird aufgerufen (siehe main.js)
      },
    },
    [birthdayInput, submitButton]
  );

  return formElement;
}
