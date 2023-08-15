import { Fragment, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { errorToast, isEmpty, successToast } from "../../helper/Validation";
import { Create } from "../../services/CRUDservice";

const CreateForm = () => {
  const productNameRef = useRef();
  const productCodeRef = useRef();
  const imgRef = useRef();
  const unitPriceRef = useRef();
  const qtyRef = useRef();
  const totalPriceRef = useRef();

  const navigate = useNavigate();

  //price calculation function
  const [totalPrice, setTotalPrice] = useState("");
  const handleTotalPriceChange = () => {
    const quantity = parseFloat(qtyRef.current.value);
    const unitPrice = parseFloat(unitPriceRef.current.value);
    if (!isNaN(quantity) && !isNaN(unitPrice)) {
      const total = (quantity * unitPrice).toFixed(2);
      setTotalPrice(total);
      totalPriceRef.current.value = total;
    } else {
      setTotalPrice("");
      totalPriceRef.current.value = "";
    }
  };

  //save date after input
  const saveData = () => {
    const Name = productNameRef.current.value;
    const Code = productCodeRef.current.value;
    const Img = imgRef.current.value;
    const Price = unitPriceRef.current.value;
    const Quantity = qtyRef.current.value;
    const Total = totalPriceRef.current.value;

    if (
      isEmpty(Name) ||
      isEmpty(Code) ||
      isEmpty(Img) ||
      isEmpty(Price) ||
      isEmpty(Quantity) ||
      isEmpty(Total)
    ) {
      errorToast("All fields are required");
    } else {
      Create(Name, Code, Img, Price, Quantity, Total).then((res) => {
        if (res === true) {
          successToast("Data saved successfully");
          // Clear input fields after successful submission
          productNameRef.current.value = "";
          productCodeRef.current.value = "";
          imgRef.current.value = "";
          unitPriceRef.current.value = "";
          qtyRef.current.value = "";
          totalPriceRef.current.value = "";

          navigate("/", { replace: true });
        } else {
          errorToast("Data failed, try again");
        }
      });
    }
  };

  return (
    <Fragment>
      <div className="container">
        <h1 className="text-center text-primary">Create Product</h1>
        <div className="row">
          <div className="col-md-6 p-2">
            <label>Product Name</label>
            <input ref={productNameRef} type="text" className="form-control" />
          </div>
          <div className="col-md-6 p-2">
            <label>Product Code</label>
            <input ref={productCodeRef} type="text" className="form-control" />
          </div>
          <div className="col-md-6 p-2">
            <label>Image</label>
            <input ref={imgRef} type="text" className="form-control" />
          </div>
          <div className="col-md-6 p-2">
            <label>Price</label>
            <input
              ref={unitPriceRef}
              type="number"
              className="form-control"
              onChange={handleTotalPriceChange} // Call the handler when unit price changes
            />
          </div>
          <div className="col-md-6 p-2">
            <label>Quantity</label>
            <input
              ref={qtyRef}
              type="number"
              className="form-control"
              onChange={handleTotalPriceChange} // Call the handler when quantity changes
            />
          </div>
          <div className="col-md-6 p-2">
            <label>Total Price</label>
            <input
              ref={totalPriceRef}
              type="text"
              className="form-control"
              value={totalPrice} // Display the calculated total price
              readOnly
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 p-2">
            <button onClick={saveData} className="btn btn-success w-50">
              Save
            </button>
          </div>
        </div>
      </div>
      {/* <div className="d-none" ref={LoaderRef}>
        <Loader />
      </div> */}
    </Fragment>
  );
};

export default CreateForm;
