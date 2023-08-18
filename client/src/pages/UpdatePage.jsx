// import { useParams } from "react-router-dom";
// import UpdateForm from "../components/update/UpdateForm";

import FormCreate from "../components/create/FormCreate";


const UpdatePage = () => {
  //const params = useParams();
    
  return (
      <div>
          <FormCreate />
          {/* <UpdateForm id={params['id']} /> */}
    </div>
  );
};

export default UpdatePage;
