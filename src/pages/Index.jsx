import { useEffect, useState } from "react";
import React from "react";
import { LoadingPage } from "../components/loadingPage/LoadingPage";
import { Events } from '../components/events/Events';

const apiUrl = process.env.REACT_APP_API_URL;

export function Index() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);

      let json;

      try {
        const result = await fetch(`${apiUrl}/events`);
        if (!result.ok) {
          throw new Error('Error getting events');
        }

        json = await result.json();
      }
      catch (e) {
        console.warn('unable to fetch events', e);
        setError("Villa við að sækja viðburði");
        return;
      }
      finally {
        setLoading(false);
      }
      setEvents(json.items);
    }
    fetchData();
  }, []);
  if (loading) {
    return (
      <LoadingPage></LoadingPage>
    );
  }
  if (error) {
    return (
      <p>{error}</p>
    );
  }
  return <Events events={events}></Events>;
}






