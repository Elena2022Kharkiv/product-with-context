import { useState } from "react";

export const useToggleActive = (initialValue) => {
    const [ isAddActive, setIsAddActive ] = useState(initialValue);

    const toggleActive = () => {
        setIsAddActive(prev => !prev);
    }

    return { isAddActive, toggleActive };
}
