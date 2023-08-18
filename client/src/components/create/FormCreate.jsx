import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { errorToast, successToast } from "../../helper/Validation";

const FormCreate = () => {
  const { id } = useParams();

  let [FormValue, setFormValue] = useState({
    productName: "",
    productCode: "",
    productImg: "",
    unitPrice: "",
    quantity: "",
    totalPrice: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      let res = await axios.post("http://localhost:4000/api/v1/getOne/" + id);
      setFormValue(res.data["data"]);
    })();
  }, []);

  const InputOnChange = (property, value) => {
    setFormValue({ ...FormValue, [property]: value });
  };

  const handleSaveData = async () => {
    const isEmptyField = Object.values(FormValue).some((value) => value === "");

    if (isEmptyField) {
      errorToast("Please fill in all fields.");
    } else {
      // const totalPrice = (parseFloat(FormValue.unitPrice) * parseInt(FormValue.quantity)).toFixed(2);

      //  // Update the FormValue with the calculated total price
      // const updatedFormValue = {
      //   ...FormValue,
      //   totalPrice: totalPrice,
      // };

      try {
        let URL = "http://localhost:4000/api/v1/create";
        if (id) {
          URL = `http://localhost:4000/api/v1/update/${id}`;
        }

        const res = await axios.post(URL, FormValue);
        if (res.status === 200) {
          successToast("Data saved successfully");
          navigate("/", { replace: true });
        } else {
          errorToast("Data failed to save. Please try again.");
        }
      } catch (error) {
        errorToast("An error occurred while saving the data.");
        console.error(error);
      }
    }
  };

  return (
    <div className="container">
      <h1 className="text-center text-primary">Create New Product</h1>
      <div className="row">
        <div className="col-md-6 p-2">
          <label>Product Name</label>
          <input
            onChange={(e) => {
              InputOnChange("productName", e.target.value);
            }}
            value={FormValue.productName}
            type="text"
            className="form-control"
          />
        </div>
        <div className="col-md-6 p-2">
          <label>Product Code</label>
          <input
            onChange={(e) => {
              InputOnChange("productCode", e.target.value);
            }}
            value={FormValue.productCode}
            type="text"
            className="form-control"
          />
        </div>
        <div className="col-md-6 p-2">
          <label>Image</label>
          <input
            onChange={(e) => {
              InputOnChange("productImg", e.target.value);
            }}
            value={FormValue.productImg}
            type="text"
            className="form-control"
          />
        </div>
        <div className="col-md-6 p-2">
          <label>Unit Price</label>
          <input
            onChange={(e) => {
              InputOnChange("unitPrice", e.target.value);
            }}
            value={FormValue.unitPrice}
            type="number"
            className="form-control"
          />
        </div>
        <div className="col-md-6 p-2">
          <label>Quantity</label>
          <input
            onChange={(e) => {
              InputOnChange("quantity", e.target.value);
            }}
            value={FormValue.quantity}
            type="number"
            className="form-control"
          />
        </div>
        <div className="col-md-6 p-2">
          <label>Total Price</label>
          <input
            onChange={(e) => {
              InputOnChange("totalPrice", e.target.value);
            }}
            value={FormValue.totalPrice}
            type="number"
            className="form-control"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 p-2">
          <button onClick={handleSaveData} className="btn btn-success w-50">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormCreate;
