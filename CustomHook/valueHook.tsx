import { useState } from "react";
const useValue = () => {
    const [value, setValue] = useState(0);
    return {
        value,
        setValue,
    };
};
export { useValue };