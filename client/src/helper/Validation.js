import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

class Validation {
  isEmpty(value) {
    if (value.length == 0) {
      return true;
    } else {
      return false;
    }
  }
  successToast(msg) {
    Toastify({
      text: msg,
      className: "info",
      offset: {
        x: 100,
        y: 50,
      },
      style: {
        background: "green",
      },
    }).showToast();
  }
  errorToast(msg) {
    Toastify({
      text: msg,
      className: "info",
      offset: {
        x: 100,
        y: 45,
      },
      style: {
        background: "red",
      },
    }).showToast();
  }

  cancelToast(msg) {
    Toastify({
      text: msg,
      className: "info",
      offset: {
        x: 100,
        y: 45,
      },
      style: {
        background: "yellow",
        color: "black",
      },
    }).showToast();
  }
}

export const { isEmpty, successToast, errorToast,cancelToast } = new Validation();
