import React from "react";

function Contact() {
  return (
    <section className="contact text-gray-500 w-screen h-screen flex flex-col items-end justify-center">
      <form action="" className="flex flex-col w-2/4">
        <input
          className="bg-gray-600 mx-32 my-4"
          type="text"
          name="fist-name"
          id="first-name"
        />
        <input
          className="bg-gray-600 mx-32 my-4"
          type="text"
          name="last-name"
          id="last-name"
        />
        <input
          className="bg-gray-600 mx-32 my-4"
          type="email"
          name="email"
          id="email"
        />
        <input
          className="bg-gray-600 mx-32 my-4"
          type="textarea"
          name="message"
          id="message"
        />
      </form>
    </section>
  );
}

export default Contact;
