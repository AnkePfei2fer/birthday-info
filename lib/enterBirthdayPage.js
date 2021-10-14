import { createElement } from "./elements.js";

// 📝 The onSubmit argument is not used. It should tell the parent component when the form is submitted and bypass the birthday.
// 📝 A submit input/button is missing

// Creates the page to enter the birthday
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
  const formElement = createElement("form", { className: "submission" }, [
    birthdayInput,
    submitButton,
  ]);

  return formElement;
}
