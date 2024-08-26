import { useEffect, useState } from "react";
import { supabase } from "../services/client";

import Card from "./Card";

const Creators = () => {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("creators").select()
      setCreators(data)
    };
    fetchData()
  }, []);

  console.log(creators)

  return (
    <section className="flex flex-col items-center md:items-start p-4 md:p-12 gap-4">
      <h1 className="text-white text-2xl">All Creators</h1>
      <div className="flex flex-wrap gap-8 justify-center w-full md:justify-start">
        {creators && creators.map((creator) => (
          <Card
            key={creator.id}
            creator={creator}
          />
        ))}
      </div>
    </section>
  );
};

export default Creators;
