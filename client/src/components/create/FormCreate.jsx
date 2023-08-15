import { useState } from "react";
import { Create } from "../../services/CRUDservice";
import { errorToast, successToast } from "../../helper/Validation";
import { Navigate } from "react-router-dom";

const FormCreate = () => {
  let [FormValue, setFormValue] = useState({
    productName: "",
    productCode: "",
    productImg: "",
    unitPrice: "",
    quantity: "",
    totalPrice: "",
  });
    
    const InputOnChange = (property, value) => {
      setFormValue({ ...FormValue, [property]: value });
    };
    console.log(FormValue);
    const handleSaveData = () => {
        Create(FormValue).then((res) => {
          if (res === true) {
            successToast("Data saved successfully");
            // Clear input fields after successful submission

            Navigate("/", { replace: true });
          } else {
            errorToast("Data failed, try again");
          }
        });
    }
    return (
      <div className="container">
        <h1 className="text-center text-primary">Create Product</h1>
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
            <label>UnitPrice</label>
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
