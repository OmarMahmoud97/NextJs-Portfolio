import Button from "@/components/liquidButton/liquidButton";

function Contact() {
  return (
    <section className="contact overflow-hidden flex-nowrap	 text-gray-500 w-screen h-screen flex items-end justify-center">
      <div className=" w-2/5 h-screen"></div>
      <div className="lg:w-full h-screen flex flex-col items-center justify-evenly">
        <h1 className=" text-white text-3xl textshadow my-3">Contact</h1>
        <form
          action="https://getform.io/f/e254fb14-ba47-4572-be84-be3a137b3bf4"
          className="max-w-3xl flex flex-col w-10/12"
          method="POST"
        >
          <input type="hidden" name="_gotcha" className="gotcha"></input>
          <div className="flex items-center justify-between">
            <div className="mx-1 w-6/12 my-2">
              <label
                for="small-input"
                className=" textshadow block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                First name:
              </label>
              <input
                type="text"
                placeholder="First name..."
                name="name"
                required
                id="small-input"
                className=" block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="mx-1 w-6/12 my-2">
              <label
                for="small-input"
                className=" textshadow block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Last name:
              </label>
              <input
                type="text"
                placeholder="Last name..."
                required
                name="Last name"
                id="small-input"
                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
          <div className="my-2">
            <label
              for="small-input"
              className=" textshadow block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email:
            </label>
            <input
              type="text"
              id="small-input"
              name="email"
              required
              placeholder="Email..."
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="my-2">
            <label
              for="message"
              className=" textshadow block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Message:
            </label>
            <textarea
              id="message"
              rows="4"
              name="message"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Leave a comment..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            value="Submit"
            className="bg-gray-200 bg-opacity-30 text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
          >
            Submit
          </button>
        </form>
        <div>
          <Button />
        </div>
      </div>
    </section>
  );
}

export default Contact;
