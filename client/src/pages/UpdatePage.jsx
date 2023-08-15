import { useParams } from "react-router-dom";
import UpdateForm from "../components/update/UpdateForm";


const UpdatePage = () => {
  const params = useParams();
    
  return (
      <div>
          
          <UpdateForm id={params['id']} />
    </div>
  );
};

export default UpdatePage;
