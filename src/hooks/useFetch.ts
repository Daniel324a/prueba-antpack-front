import { useState, useEffect, useRef } from 'react';

interface FetchState<T> {
  loading: boolean;
  response?: T;
  err?: any;
}

export const useFetch = <T>(
  url: string,
  data: RequestInit = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  }
) => {
  // Hooks
  const [state, setState] = useState<FetchState<T>>({
    loading: true,
  });

  const [update, setUpdate] = useState(true);
  const isMounted = useRef(true);
  const requestData = useRef(data);

  // Update handler
  const doUpdate = () => setUpdate(old => !old);

  // Fetch
  useEffect(() => {
    if (!url) return;
    isMounted.current = true;

    const fetchData = async () => {
      // Set loading
      setState({ loading: true });
      try {
        // Get response
        const response = await fetch(url, { ...requestData.current });
        const result: T = await response.json();

        // Only update if rendered
        if (isMounted.current) setState({ loading: false, response: result });
      } catch (err) {
        if (isMounted.current) setState({ loading: false, err });
      }
    };

    // Do fetch
    fetchData();

    // Advise component disposed
    return () => {
      isMounted.current = false;
    };
  }, [url, update]);

  return { ...state, doUpdate };
};
