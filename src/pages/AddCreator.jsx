import { useNavigate } from "react-router-dom";
import { supabase } from "../services/client";
import Form from '../components/Form';

const AddCreator = () => {
  const navigate = useNavigate();

  const handleSubmit = async (newCreator) => {
    const { data, error } = await supabase.from('creators').insert([newCreator]);
    
    if (error) {
      console.error('Error adding creator:', error);
    } else {
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <Form handleSubmit={handleSubmit} />
    </div>
  );
};

export default AddCreator;