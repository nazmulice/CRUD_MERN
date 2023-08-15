import loader from "../../assets/img/loader2.svg";
import "./loader.css";

const Loader = () => {
  return (
    <div className="ProcessingDiv">
      <div className="center-screen">
        <img className="loader-size" src={loader} alt="loader img" />{" "}
      </div>
    </div>
    // <div className="Procces">
    //   <div className="center-screen">
    //     <img
    //       className="loader"
    //       src="https://cdn.dribbble.com/users/563824/screenshots/3633228/media/d876c7712d969c0656302b16b16af2cc.gif"
    //       alt="loader"
    //     />
    //   </div>
    // </div>
  );
};

export default Loader;
