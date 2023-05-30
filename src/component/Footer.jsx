import React from "react";

const Footer = () => {
    return (
<footer className="bg-white dark:bg-gray-900 fixed inset-x-0 bottom-0">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-4 lg:py-4 border-gray-700 border-t-2">
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 Carson Barnes
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
              <a href="https://github.com/cbarnes0" target="_blank" className="text-gray-500 hover:text-gray-900 dark:hover:text-white text-3xl">
              <ion-icon name="logo-github"></ion-icon>
              </a>
              <a href="https://www.linkedin.com/in/cb019803/" target="_blank" className="text-gray-500 hover:text-gray-900 dark:hover:text-white text-3xl">
              <ion-icon name="logo-linkedin"></ion-icon>
              </a>
          </div>
      </div>
    </div>
</footer>
    )
}

export default Footer;