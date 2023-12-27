# Web Forms

## Table of Content

- [What Is Web Forms?](#what-is-web-forms)
- [Designing Our Form](#designing-our-form)

## What Is Web Forms?

Web forms are a very powerful tool for interacting with users most commonly they are used for collecting data from users, or allowing them to control a user interface.

Web forms are one of the main points of interaction between a user and a website or application. Forms allow users to enter data, which is generally sent to a web server for processing and storage (see Sending form data later in the module), or used on the client-side to immediately update the interface in some way (for example, add another item to a list, or show or hide a UI feature).

In the part, we'll cover all the essential aspects of Web forms including marking up their HTML structure, styling form controls, validating form data, and submitting data to the server.

## Designing Our Form

In this article, we'll build a simple contact form. Let's make a rough sketch.

Our form will contain four text fields and one button. We are asking the user for their name, surname, their email and the message they want to send. Hitting the button will send their data to a web server.

**Example:**

```html
<form id="myForm">
  <label for="firstName">First Name:</label>
  <input type="text" id="firstName" name="firstName" /><br /><br />

  <label for="lastName">Last Name:</label>
  <input type="text" id="lastName" name="lastName" /><br /><br />

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" /><br /><br />

  <label for="message">Message:</label><br />
  <textarea id="message" name="message" rows="4" cols="50"></textarea
  ><br /><br />

  <input type="submit" value="Submit" />
</form>
```

```js
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Create a JavaScript object from form data
    const formData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      message: message,
    };

    // Sending data to the server using Fetch API
    fetch("https://exampleapiurl.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Response is not OK.");
        } else {
          response.json();
        }
      })
      .then((json) => console.log(json))
      .catch((err) => {
        console.error("Write here descriptions of error", error);
      });
  });
```

[Go Top](#web-forms)
