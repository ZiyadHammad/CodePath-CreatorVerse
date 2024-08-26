import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import CreatorDetail from "../components/CreatorDetail";
import { supabase } from "../services/client";

const ViewCreator = () => {
  const { id } = useParams();
  const navigate = useNavigate()
  const [creator, setCreator] = useState({});

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this creator?")) {
      const response = await supabase.from("creators").delete().eq("id", id);
      navigate('/')
    }
  };

  useEffect(() => {
    const fetchCreator = async () => {
      const { data, error } = await supabase
        .from("creators")
        .select("*")
        .eq("id", id)
        .single();
      setCreator(data);
    };
    fetchCreator();
  }, [id]);

  if (!creator) return <h1>Loading...</h1>;

  return (
    <>
      <CreatorDetail
        handleDelete={handleDelete}
        creator={creator}
      />
    </>
  );
};

export default ViewCreator;
