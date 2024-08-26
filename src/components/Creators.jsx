import { useEffect, useState } from "react";
import { supabase } from "../services/client";
import { useNavigate } from "react-router-dom";

import Card from "./Card";

const Creators = () => {
  const [creators, setCreators] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("creators").select();
      setCreators(data);
    };
    fetchData();
  }, [creators]);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this creator?")) {
      const response = await supabase.from("creators").delete().eq("id", id);
      navigate("/");
    }
  };

  if(!creators) return <h1>No Data</h1>
  return (
    <section className="flex flex-col items-center md:items-start p-4 md:p-12 gap-4">
      <h1 className="text-white text-2xl">All Creators</h1>
      <div className="flex flex-wrap gap-8 justify-center w-full md:justify-start">
        {creators &&
          creators.map((creator) => (
            <Card
              key={creator.id}
              creator={creator}
              handleDelete={handleDelete}
            />
          ))}
      </div>
    </section>
  );
};

export default Creators;
