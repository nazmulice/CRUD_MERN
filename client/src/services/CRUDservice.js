import axios from 'axios';
export const Create = (
  productName,
  productCode,
  productImg,
  unitPrice,
  quantity,
  totalPrice
) => {
  let URL = "http://localhost:4000/api/v1/create";
  let postBody = {
    productName: productName,
    productCode: productCode,
    productImg: productImg,
    unitPrice: unitPrice,
    quantity: quantity,
    totalPrice: totalPrice,
  };
    return axios.post(URL, postBody)
        .then(res => {
            if (res.status == 200) {
                return true;
            } else {
                return false;
            }
        })
        .catch((err) => {
            console.log(err);
            return false;
        });
};


export const Read = () => {
    let URL = "http://localhost:4000/api/v1/getAll";
    return axios.post(URL)
      .then((res) => {
        
        if (res.status == 200) {
          return res.data["data"];
        } else {
          return false;
        }
      })
      .catch((err) => {
        console.log(err);
        return false;
      });
}


export const Update = (
  id,
  productName,
  productCode,
  productImg,
  unitPrice,
  quantity,
  totalPrice
) => {
  let URL = "http://localhost:4000/api/v1/update/" + id;
  let postBody = {
    productName: productName,
    productCode: productCode,
    productImg: productImg,
    unitPrice: unitPrice,
    quantity: quantity,
    totalPrice: totalPrice,
  };
  return axios
    .patch(URL, postBody)
    .then((res) => {
      if (res.status == 200) {
        return true;
      } else {
        return false;
      }
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
};


export const Delete = (id) => {
    let URL = "http://localhost:4000/api/v1/delete/" + id;
    
    return axios
      .delete(URL)
      .then((res) => {
        if (res.status == 200) {
          return true;
        } else {
          return false;
        }
      })
      .catch((err) => {
        console.log(err);
        return false;
      });

};


export const  ReadByID = (id)=> {
  let URL = "http://localhost:4000/api/v1/getOne/" + id;
  return axios
    .post(URL)
    .then((res) => {
      if (res.status === 200) {
        return res.data["data"];
      } else {
        return false;
      }
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
}