import React, { useState } from "react";

export const Context = React.createContext();

const tipInfo = {
    startTip: [],
    endTip: [],
    numberOfTips: 0,
};
const StoreTip = ({ children }) => {
    const [tips, setTips] = useState(tipInfo);
    return (
        <Context.Provider value={[tips, setTips]}>{children}</Context.Provider>
    );
};
export default StoreTip;
