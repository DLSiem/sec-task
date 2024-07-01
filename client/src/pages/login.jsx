import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="max-w-80 mx-auto mt-3 border p-2 rounded-md">
      <h1 className="text-2xl font-semibold text-center py-2">Log In</h1>
      <form action="">
        <input
          className="border p-2 w-full rounded-md my-1"
          type="email"
          name="email"
          placeholder="Email"
        />
        <input
          className="border p-2 w-full rounded-md my-1"
          type="password"
          name="password"
          placeholder="Password"
        />
        <button
          className="border p-2 w-full bg-blue-700 text-white hover:bg-blue-600 rounded-md my-1"
          type="submit"
        >
          Submit
        </button>
      </form>
      <p className="p-2">
        Don{"'"}t have an account?{" "}
        <Link className="text-sky-400" to="/signup">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default Login;
