import { useState, useEffect } from "react";
import axios from "axios";


function useAxios(keyInLS, baseUrl) {
    const [responses, setResponses] = useState(keyInLS);
  
    const addResponseData = async (formatter = data => data, restOfUrl = "") => {
      const response = await axios.get(`${baseUrl}${restOfUrl}`);
      setResponses(data => [...data, formatter(response.data)]);
    };

    return [responses, addResponseData];
}


export default useAxios;
