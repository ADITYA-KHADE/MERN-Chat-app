import React from "react";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const useGetConversations = () => {
  const [conversations, setConversations] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getconversation = async () => {
      try {<picture>
        <source media="(min-width: )" srcset="" />
        <img src="" alt="" />
      </picture>
        setLoading(true);
        const res = await fetch("/api/users");
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setConversations(data);
      } catch (error) {
        toast.error(error.message);
      }

      setLoading(false);
    };

    getconversation();
  }, []);

//   console.log(conversations);

  return { conversations, loading };
};

export default useGetConversations;
