import { useState } from "react";


const useFlip = (initialState = true) => {
    const [state, setState] = useState(initialState);
    const flipped = () => {
      setState(upside => !upside)
    }
    return [state, flipped]
}


export default useFlip;