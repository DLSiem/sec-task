import { useState } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";
// import { toast } from "react-toastify";

export const Signup = () => {
  //   const navigate = useNavigate();
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValues;
  const handleOnChange = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  //   const handleSuccess = (message) => {
  //     toast.success(message, {
  //       position: "bottom-left",
  //     });
  //   };

  //   const handleError = (message) => {
  //     toast.error(message, {
  //       position: "bottom-right",
  //     });
  //   };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputValues);
  };

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     try {
  //       const { data } = await axios.post(
  //         "http://localhost:3000/auth/signup",
  //         {
  //           ...inputValues,
  //         },
  //         {
  //           withCredentials: true,
  //         }
  //       );
  //       const { success, message } = data;
  //       if (success) {
  //         handleSuccess(message);
  //         setTimeout(() => {
  //           navigate("/");
  //         }, 1000);
  //       } else {
  //         handleError(message);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //     setInputValues({
  //       ...inputValues,
  //       email: "",
  //       password: "",
  //     });
  //   };

  return (
    <div className="max-w-80 mx-auto mt-3 border p-2 rounded-md">
      <h1 className="text-2xl font-semibold text-center py-2">Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="border p-2 w-full rounded-md my-1"
          type="email"
          name="email"
          value={email}
          placeholder="Email"
          onChange={handleOnChange}
        />
        <input
          className="border p-2 w-full rounded-md my-1"
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={handleOnChange}
        />
        <button
          className="border p-2 w-full bg-blue-700 text-white hover:bg-blue-600 rounded-md my-1"
          type="submit"
        >
          Submit
        </button>
      </form>
      <p className="p-2">
        Already have an account?{" "}
        <Link className="text-sky-400" to="/login">
          Log In
        </Link>
      </p>
    </div>
  );
};

export default Signup;
