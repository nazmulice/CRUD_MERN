/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { cancelToast, errorToast } from "../../helper/Validation";
import { Delete, Read } from "../../services/CRUDservice";
import Loader from "./../common/Loader";

const ListTable = () => {
  let [dataList, setDataList] = useState([]);
  const [id, setID] = useState("");

  useEffect(() => {
    Read().then((result) => {
      setDataList(result);
    });
  }, [id]);
  console.log(dataList);

  //delete data
  const deleteItem = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#239034",
      cancelButtonColor: "#F42929",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Delete(id).then((deleteResult) => {
          if (deleteResult === true) {
            errorToast("Deleted successfully!");
            setID(id);
          } else {
            errorToast("Something went wrong!");
          }
        });
      } else {
        cancelToast("Deletion canceled!");
      }
    });
  };

  if (dataList.length > 0) {
    return (
      <div className="container">
        <h1 className="text-center text-primary">List item</h1>
        <div className="table-responsive">
          <table className="table styled-table table-hover table-striped">
            <thead>
              <tr>
                <th scope="col">Serial</th>
                <th scope="col">Image </th>
                <th scope="col">Name </th>
                <th scope="col">Price </th>
                <th scope="col">Qty </th>
                <th scope="col">Total </th>
                <th scope="col">Action </th>
              </tr>
            </thead>
            <tbody>
              {dataList.map((item, i) => {
                const {
                  productName,
                  productImg,
                  unitPrice,
                  quantity,
                  totalPrice,
                } = item;
                return (
                  <tr key={i}>
                    {/* <th scope="row">{i}</th> */}
                    <td>{i + 1}</td>
                    <td>
                      <img
                        width={56}
                        height={56}
                        className="rounded-pill"
                        src={`${productImg}`}
                        alt="img"
                      />
                    </td>
                    <td>{productName}</td>
                    <td>{unitPrice}</td>
                    <td>{quantity}</td>
                    <td>{totalPrice}</td>
                    <td>
                      <Link
                        to={"/update/" + item["_id"]}
                        className="btn btn-success mx-2"
                      >
                        Update
                      </Link>
                      <button
                        onClick={deleteItem.bind(this, item._id)}
                        className="btn btn-danger mx-1"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Loader />
      </div>
    );
  }
};

export default ListTable;




