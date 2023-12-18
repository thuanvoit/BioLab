// import { useState } from 'react';
import { TipModule, TipModuleWithInfo } from "../components/Modules";
import { Card } from "../templates/Card";
import { Container } from "../templates/Container";
import { Context } from "../services/Store";
import { useContext } from "react";

export const CleanUp = () => {
    const [tips, setTips] = useContext(Context);

    return (
        <div className="flex h-max columns-1 flex-col space-y-10">
            <div className="flex flex-row items-center justify-center space-x-10">
                <Container>
                    <h1 className="mb-3 text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        Tip Selector
                    </h1>
                    <Card>{TipModuleWithInfo()}</Card>

                    <div className="mt-3">
                        <p className="mb-2 w-fit rounded-full px-3 py-2 text-lg font-normal tracking-tight text-gray-900 dark:bg-gray-800 dark:text-white">
                            Number of selected tips:
                            {tips.numberOfTips > 0 && (
                                <span className="relative ml-2 w-fit items-center justify-between gap-5 rounded-full bg-blue-950 px-3 py-1 dark:bg-blue-100">
                                    <code className="overflow-hidden overflow-ellipsis whitespace-nowrap text-left text-blue-100 dark:text-blue-900">
                                        {tips.numberOfTips}
                                    </code>
                                </span>
                            )}
                        </p>

                        <p className="mb-2 w-fit rounded-full px-3 py-2 text-lg font-normal tracking-tight text-gray-900 dark:bg-gray-800 dark:text-white">
                            Starting tip:
                            {tips.startTip.map((tip) => (
                                <span className="relative ml-2 w-fit items-center justify-between gap-5 rounded-full bg-blue-950 px-3 py-1 dark:bg-green-100">
                                    <code className="overflow-hidden overflow-ellipsis whitespace-nowrap text-left text-blue-100 dark:text-blue-900">
                                        {tip}
                                    </code>
                                </span>
                            ))}
                        </p>

                        <p className="w-fit rounded-full px-3 py-2 text-lg font-normal tracking-tight text-gray-900 dark:bg-gray-800 dark:text-white">
                            Ending tip:
                            {tips.endTip.map((tip) => (
                                <span className="relative ml-2 w-fit items-center justify-between gap-5 rounded-full bg-blue-950 px-3 py-1 dark:bg-yellow-100">
                                    <code className="overflow-hidden overflow-ellipsis whitespace-nowrap text-left text-blue-100 dark:text-blue-900">
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
                                <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                                    Your email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                                    placeholder="name@company.com"
                                    required
                                />
                            </div>
                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                                    Your password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                                    required
                                />
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-start">
                                    <div className="flex h-5 items-center">
                                        <input
                                            id="remember"
                                            type="checkbox"
                                            value=""
                                            className="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
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
                                className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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

            <div className="flex flex-row items-center justify-center space-x-10">
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
