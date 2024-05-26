import React from 'react'

const Modal = () => {

    const [modal, setModal] = React.useState(false);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const openModal = () => {
        setModal(true);
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    };

    const closeModal = () => {
        setModal(false);
        document.body.style.overflow = 'auto'; // Re-enable background scrolling
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // Implement your login logic here
        const hardcodedEmail = 'manasbaroi6699@gmail.com';
        const hardcodedPassword = '123';

        if (email === hardcodedEmail && password === hardcodedPassword) {         
            closeModal();
            // Redirect to the admin page or perform other actions
            window.location.href = '/admin';
        } else {
            alert('Invalid credentials, please try again.');
        }
    };
  return (
      <>
          <button
              onClick={openModal}
              className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
              Admin Login
          </button>

          {modal && (
              <div
                  id="authentication-modal"
                  aria-hidden="true"
                  className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50"
              >
                  <div className="relative p-4 w-full max-w-md">
                      <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                  Sign in to our platform
                              </h3>
                              <button
                                  type="button"
                                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                  onClick={closeModal}
                              >
                                  <svg
                                      className="w-3 h-3"
                                      aria-hidden="true"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 14 14"
                                  >
                                      <path
                                          stroke="currentColor"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7L1 13"
                                      />
                                  </svg>
                                  <span className="sr-only">Close modal</span>
                              </button>
                          </div>

                          <div className="p-4 md:p-5">
                              <form className="space-y-4" onSubmit={handleSubmit}>
                                  <div>
                                      <label
                                          htmlFor="email"
                                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                      >
                                          Your email
                                      </label>
                                      <input
                                          type="email"
                                          name="email"
                                          id="email"
                                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                          placeholder="name@company.com"
                                          required
                                          value={email}
                                          onChange={(e) => setEmail(e.target.value)}
                                      />
                                  </div>
                                  <div>
                                      <label
                                          htmlFor="password"
                                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                      >
                                          Your password
                                      </label>
                                      <input
                                          type="password"
                                          name="password"
                                          id="password"
                                          placeholder="••••••••"
                                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                          required
                                          value={password}
                                          onChange={(e) => setPassword(e.target.value)}
                                      />
                                  </div>
                                  <div className="flex justify-between">
                                      <div className="flex items-start">
                                          <div className="flex items-center h-5">
                                              <input
                                                  id="remember"
                                                  type="checkbox"
                                                  value=""
                                                  className="w-4 h-4 border
                                                  border-gray-300 rounded bg-gray-50 focus:ring-3
                                                   focus:ring-blue-300"
                                              />
                                          </div>
                                          <label
                                              htmlFor="remember"
                                              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                          >
                                              Remember me
                                          </label>
                                      </div>
                                      <a
                                          href="#"
                                          className="text-sm text-blue-700 hover:underline dark:text-blue-500"
                                      >
                                          Lost Password?
                                      </a>
                                  </div>
                                  <button
                                      type="submit"
                                      onSubmit={handleSubmit}
                                      className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                  >
                                      Login to your account
                                  </button>
                                  <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                                      Not registered?{' '}
                                      <a
                                          href="#"
                                          className="text-blue-700 hover:underline dark:text-blue-500"
                                      >
                                          Create account
                                      </a>
                                  </div>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
          )}
      </>
  )
}

export default Modal