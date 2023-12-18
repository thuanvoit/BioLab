// import { useState } from 'react';
import { TipModule, TipModuleWithInfo } from "../components/Modules";
import { Card } from "../templates/Card";
import { Container } from "../templates/Container";
import { Context } from "../services/Store";
import { useContext } from "react";

export const CleanUp = () => {
  const [tips, setTips] = useContext(Context);

  return (
    <div className="flex flex-col columns-1 h-max space-y-10">
      <div className="flex flex-row justify-center items-center space-x-10">
        <Container>
          <h1 className="mb-3 text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Tip Selector
          </h1>
          <Card>{TipModuleWithInfo()}</Card>

          <div className="mt-3">
            <p className="mb-2 text-lg font-normal tracking-tight text-gray-900 dark:text-white dark:bg-gray-800 w-fit rounded-full py-2 px-3">
              Number of selected tips:
              {tips.numberOfTips > 0 && (
                <span className="dark:bg-blue-100 bg-blue-950 relative ml-2 w-fit gap-5 items-center justify-between px-3 py-1 rounded-full">
                  <code className="dark:text-blue-900 text-blue-100 text-left whitespace-nowrap overflow-hidden overflow-ellipsis">
                    {tips.numberOfTips}
                  </code>
                </span>
              )}
            </p>

            <p className="mb-2 text-lg font-normal tracking-tight text-gray-900 dark:text-white dark:bg-gray-800 w-fit rounded-full py-2 px-3">
              Starting tip:
              {tips.startTip.map((tip) => (
                <span className="dark:bg-green-100 bg-blue-950 relative ml-2 w-fit gap-5 items-center justify-between px-3 py-1 rounded-full">
                  <code className="dark:text-blue-900 text-blue-100 text-left whitespace-nowrap overflow-hidden overflow-ellipsis">
                    {tip}
                  </code>
                </span>
              ))}
            </p>

            <p className="text-lg font-normal tracking-tight text-gray-900 dark:text-white dark:bg-gray-800 w-fit rounded-full py-2 px-3">
              Ending tip:
              {tips.endTip.map((tip) => (
                <span className="dark:bg-yellow-100 bg-blue-950 relative ml-2 w-fit gap-5 items-center justify-between px-3 py-1 rounded-full">
                  <code className="dark:text-blue-900 text-blue-100 text-left whitespace-nowrap overflow-hidden overflow-ellipsis">
                    {tip}
                  </code>
                </span>
              ))}
            </p>
          </div>
        </Container>

        <Container>
          <h1 className="mb-3 text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Text
          </h1>
          <Card>
            <form className="space-y-6" action="#">
              <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                Sign in to our platform
              </h5>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div>
              <div className="flex items-start">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Remember me
                  </label>
                </div>
                <a
                  href="#"
                  className="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
                >
                  Lost Password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Login to your account
              </button>
              <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                Not registered?{" "}
                <a
                  href="#"
                  className="text-blue-700 hover:underline dark:text-blue-500"
                >
                  Create account
                </a>
              </div>
            </form>
          </Card>
        </Container>
      </div>

      <div className="flex flex-row justify-center items-center space-x-10">
        <Container>
          <h1 className="mb-3 text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Text
          </h1>
          <Card>{TipModule()}</Card>
        </Container>

        <Container>
          <h1 className="mb-3 text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Text
          </h1>
          <Card>{TipModule()}</Card>
        </Container>
      </div>
    </div>
  );
};
