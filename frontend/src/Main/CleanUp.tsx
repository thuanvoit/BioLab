// import { useState } from 'react';
import { TipModule, TipModuleWithInfo } from "../components/Modules";
import { Card } from "../templates/Card";
import { Container } from "../templates/Container";
import { Context } from "../services/Store";
import { useEffect, useContext, useRef, useState } from "react";
import axios from "axios";

export const CleanUp = () => {
  const [tips, setTips] = useContext(Context);
  const [protocol, setProtocol] = useState();

  const [protocols, setProtocols] = useState({});
  const [ready, setReady] = useState(false);

  const [isProtocol, setIsProtocol] = useState(false);

  const [refreshKey, setRefreshKey] = useState(0);

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

  const checkProtocol = useEffect(() => {
    if (
      tips.startTip.length > 0 &&
      tips.endTip.length > 0 &&
      protocol !== "#" &&
      protocol !== "" &&
      protocol !== null &&
      protocol !== undefined
    ) {
      setIsProtocol(true);
    } else {
      setIsProtocol(false);
    }
  }, [protocol, tips]);

  const processProtocol = () => {
    setReady(true);
  };

  const selectProtocol = (e) => {
    const protocol = e.target.value;
    checkProtocol;
    setProtocol(protocol);
    setReady(false);
  };

  const downloadProtocol = () => {
    console.log("download");
    console.log(tips.startTip);
    console.log(tips.endTip);
    console.log(protocol);
  };

  const resetModule = () => {
    setTips({
      startTip: [],
      endTip: [],
    });
    refreshTipModule();
    selectProtocol({ target: { value: "#" } });
  };

  // refresh the module on the right
  const refreshTipModule = () => {
    setRefreshKey((prevKey) => prevKey + 1);
  };

  return (
    <div className="flex h-max columns-1 flex-col space-y-10">
      <div className="flex flex-row items-center justify-center space-x-10">
        <Container>
          <div className="mb-3 flex justify-between">
            <h1 className="text-3xl font-semibold tracking-tight text-white">
              Tip Selector
            </h1>

            {tips.startTip.length > 0 && (
              <>
                <button
                  type="button"
                  className="rounded-full bg-red-500 px-3 py-1 text-center text-sm text-white hover:bg-red-700"
                  onClick={resetModule}
                >
                  Reset
                </button>
              </>
            )}
          </div>

          <Card>{TipModuleWithInfo()}</Card>
        </Container>

        <Container key={refreshKey}>
          <h1 className="mb-3 text-3xl font-semibold tracking-tight text-white">
            Protocol Info
          </h1>
          <div className="mt-3">
            <p className="text-md mb-2 w-full rounded-full bg-gray-800 px-3 py-2 font-normal tracking-tight text-white shadow">
              Number of selected tips:
              {tips.numberOfTips > 0 && (
                <span className="relative ml-2 w-fit items-center justify-between gap-5 rounded-full bg-blue-100 px-3 py-1">
                  <code className="overflow-hidden overflow-ellipsis whitespace-nowrap text-left text-blue-900">
                    {tips.numberOfTips}
                  </code>
                </span>
              )}
            </p>

            <p className="text-md mb-2 w-full rounded-full bg-gray-800 px-3 py-2 font-normal tracking-tight text-white shadow">
              Starting tip:
              {tips.startTip.map((tip) => (
                <span className="relative ml-2 w-fit items-center justify-between gap-5 rounded-full bg-green-100 px-3 py-1">
                  <code className="overflow-hidden overflow-ellipsis whitespace-nowrap text-left text-blue-900">
                    {tip}
                  </code>
                </span>
              ))}
            </p>

            <p className="text-md mb-2 w-full rounded-full bg-gray-800 px-3 py-2 font-normal tracking-tight text-white shadow">
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
            id="protocols"
            className="text-md mb-3 block w-full rounded-full bg-gray-800 p-2.5 py-2 text-lg font-normal text-white shadow"
            onClick={selectProtocol}
            onChange={selectProtocol}
          >
            <option value="#">Choose a protocol</option>

            {Object.keys(protocols).map((protocol) => (
              <option value={protocol}>{protocols[protocol].name}</option>
            ))}
          </select>

          {isProtocol && (
            <>
              <button
                type="button"
                className="text-md mb-2 me-2 w-full rounded-full bg-blue-600 py-2.5 text-center font-medium text-white hover:bg-blue-700"
                onClick={processProtocol}
              >
                <div className="flex justify-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    data-slot="icon"
                    className="h-6 w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                    />
                  </svg>
                  Process Protocol Info
                </div>
              </button>

              <button
                type="button"
                className="text-md mb-2 me-2 w-full rounded-full bg-gray-500 py-2.5 text-center font-medium text-white hover:bg-gray-600"
              >
                <div className="flex justify-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    data-slot="icon"
                    className="h-6 w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                    />
                  </svg>
                  View Protocol Details
                </div>
              </button>
            </>
          )}

          {ready && (
            <>
              <label className="mb-2 mt-2 block text-sm font-medium text-white ">
                Ready to use, press <code>Download</code>
              </label>
              <button
                type="button"
                className="text-md mb-2 w-full rounded-full bg-green-700 py-2.5 text-center font-medium text-white hover:bg-green-800"
                onClick={downloadProtocol}
              >
                <div className="flex justify-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                  Download Protocol (.py)
                </div>
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
