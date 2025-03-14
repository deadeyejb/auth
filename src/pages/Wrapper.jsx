import React, { useState } from "react";
import { supabase } from "../client/client";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Wrapper = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (!session) {
        navigate("/login"); // Redirect to login if not authenticated
      }
      setLoading(false);
    };
    checkSession();
  }, [navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default Wrapper;
