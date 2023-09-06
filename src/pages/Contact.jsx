import useTitle from "../hooks/useTitle";
import Navbar from "./shared/Navbar";
const Contact = () => {
  useTitle("Contact");
  return (
    <>
      <Navbar></Navbar>
      <div className="bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full border rounded py-2 px-3"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border rounded py-2 px-3"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                className="w-full border rounded py-2 px-3"
                rows="4"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
