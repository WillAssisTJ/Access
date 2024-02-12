import banner from "./assets/banner.svg";
import "./index.css";
import Form from "./Components/Form";


export default function App() {
    return (
      <div className="container">
      <div className="half-container1">
        <img src={banner} alt="banner" />
      </div>
      <div className="half-container2">
        <Form />
      </div>
    </div>
  );
    }