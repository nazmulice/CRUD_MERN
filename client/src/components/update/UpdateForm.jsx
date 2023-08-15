import { Fragment, useEffect, useRef } from "react";
import { errorToast, isEmpty, successToast } from "../../helper/Validation";
import { ReadByID, Update } from "../../services/CRUDservice";
import { useNavigate } from "react-router-dom";

const UpdateForm = ({ id }) => {
  const productNameRef = useRef();
  const productCodeRef = useRef();
  const imgRef = useRef();
  const unitPriceRef = useRef();
  const qtyRef = useRef();
  const totalPriceRef = useRef();

const navigate = useNavigate();

  const updateData = () => {
    const productName = productNameRef.current.value;
    const productCode = productCodeRef.current.value;
    const img = imgRef.current.value;
    const unitPrice = unitPriceRef.current.value;
    const qty = qtyRef.current.value;
    const totalPrice = totalPriceRef.current.value;

    if (
      isEmpty(productName) ||
      isEmpty(productCode) ||
      isEmpty(img) ||
      isEmpty(unitPrice) ||
      isEmpty(qty) ||
      isEmpty(totalPrice)
    ) {
      errorToast("All fields are required");
    } else {
      Update(
        id,
        productName,
        productCode,
        img,
        unitPrice,
        qty,
        totalPrice
      ).then((res) => {
        if (res === true) {
            successToast("Data Update successfully");
            navigate("/", { replace: true });
        } else {
          errorToast("Data update failed, try again");
        }
      });
    }
  };

  useEffect(() => {
    ReadByID(id)
      .then((res) => {
    
        productNameRef.current.value = res['productName']
        productCodeRef.current.value = res["productCode"];
        imgRef.current.value = res["productImg"];
        unitPriceRef.current.value = res["unitPrice"];
        qtyRef.current.value = res["quantity"];
        totalPriceRef.current.value = res["totalPrice"];
      })
      .catch((error) => {
        console.log("Error fetching data:", error.message);
        errorToast("An error occurred while fetching data");
      });
  }, [id]);

  return (
    <Fragment>
      <div className="container">
        <h1 className="text-center">Update Product</h1>
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
            <input ref={unitPriceRef} type="text" className="form-control" />
          </div>
          <div className="col-md-6 p-2">
            <label>Quantity</label>
            <input ref={qtyRef} type="text" className="form-control" />
          </div>
          <div className="col-md-6 p-2">
            <label>Total Price</label>
            <input ref={totalPriceRef} type="text" className="form-control" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 p-2">
            <button onClick={updateData} className="btn btn-success w-50">
              Update
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

export default UpdateForm;
