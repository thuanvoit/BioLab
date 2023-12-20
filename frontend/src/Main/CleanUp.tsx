// import { useState } from 'react';
import { TipModule, TipModuleWithInfo } from "../components/Modules";
import { Card } from "../templates/Card";
import { Container } from "../templates/Container";
import { Context } from "../services/Store";
import { useEffect, useContext, useRef, useState } from "react";
import axios from "axios";

export const CleanUp = () => {
  const [tips, setTips] = useContext(Context);

  const [protocols, setProtocols] = useState({});
  const [ready, setReady] = useState(false);

  const effectRan = useRef(false);

  useEffect(() => {
    if (!effectRan.current) {
      axios
        .get(`${import.meta.env.VITE_SERVER_API_URL}/protocols`)
        .then((response) => {
          //   console.log(response.data[0]);
          setProtocols(response.data[0]);
        })
        .catch((err) => console.log(err));
    }

    effectRan.current = true;
  }, []);

  const processProtocol = () => {
    setReady(true);
  };

  return (
    <div className="flex h-max columns-1 flex-col space-y-10">
      <div className="flex flex-row items-center justify-center space-x-10">
        <Container>
          <div className="mb-3 flex justify-between">
            <h1 className="text-3xl font-semibold tracking-tight text-white">
              Tip Selector
            </h1>
            <button
              type="button"
              className="rounded-full bg-red-500 px-3 py-1 text-center text-sm text-white hover:bg-red-700"
              onClick={processProtocol}
            >
              Reset
            </button>
          </div>

          <Card>{TipModuleWithInfo()}</Card>
        </Container>

        <Container>
          <h1 className="mb-3 text-3xl font-semibold tracking-tight text-white">
            Protocol Info
          </h1>
          <div className="mt-3">
            <p className="text-md mb-2 w-fit rounded-full bg-gray-800 px-3 py-2 font-normal tracking-tight text-white">
              Number of selected tips:
              {tips.numberOfTips > 0 && (
                <span className="relative ml-2 w-fit items-center justify-between gap-5 rounded-full bg-blue-100 px-3 py-1">
                  <code className="overflow-hidden overflow-ellipsis whitespace-nowrap text-left text-blue-900">
                    {tips.numberOfTips}
                  </code>
                </span>
              )}
            </p>

            <p className="text-md mb-2 w-fit rounded-full bg-gray-800 px-3 py-2 font-normal tracking-tight text-white">
              Starting tip:
              {tips.startTip.map((tip) => (
                <span className="relative ml-2 w-fit items-center justify-between gap-5 rounded-full bg-green-100 px-3 py-1">
                  <code className="overflow-hidden overflow-ellipsis whitespace-nowrap text-left text-blue-900">
                    {tip}
                  </code>
                </span>
              ))}
            </p>

            <p className="text-md mb-2 w-fit rounded-full bg-gray-800 px-3 py-2 font-normal tracking-tight text-white">
              Ending tip:
              {tips.endTip.map((tip) => (
                <span className="relative ml-2 w-fit items-center justify-between gap-5 rounded-full bg-yellow-100 px-3 py-1">
                  <code className="overflow-hidden overflow-ellipsis whitespace-nowrap text-left text-blue-900">
                    {tip}
                  </code>
                </span>
              ))}
            </p>
          </div>
          <label className="mb-2 mt-3 block text-sm font-medium text-white ">
            Select a protocol and press <code>Process</code> button
          </label>
          <select
            id="countries"
            className="py-1text-lg text-md mb-3 block w-fit min-w-[15rem] rounded-full border border-gray-700 bg-gray-800 p-2.5 px-3  font-normal text-white placeholder-gray-400 shadow focus:border-blue-500 focus:ring-blue-500"
          >
            <option>Choose a protocol</option>

            {Object.keys(protocols).map((protocol) => (
              <option value={protocol}>{protocols[protocol].name}</option>
            ))}
          </select>

          <button
            type="button"
            className="text-md mb-2 me-2 rounded-full bg-blue-600 px-5 py-2.5 text-center font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
            onClick={processProtocol}
          >
            Process
          </button>

          <button
            type="button"
            className="text-md mb-2 me-2 rounded-full bg-gray-500 px-5 py-2.5 text-center font-medium text-white hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Details
          </button>

          {ready && (
            <>
              <label className="mb-2 mt-2 block text-sm font-medium text-white ">
                Ready to use, press <code>Download</code>
              </label>
              <button
                type="button"
                className="text-md mb-2 me-2 rounded-full bg-green-700 px-5 py-2.5 text-center font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300"
              >
                Download
              </button>
            </>
          )}
        </Container>
      </div>

      {/* <div className="flex flex-row items-center justify-center space-x-10">
              <div className="min-h-[30rem] w-full min-w-[25rem] rounded-lg border border-gray-200 bg-white p-4 py-5 shadow drop-shadow dark:border-gray-600 dark:bg-slate-700">
                  Hi
              </div>
            </div> */}
    </div>
  );
};
