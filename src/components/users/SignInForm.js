import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signInUserAction } from "../../redux/actions/UserAction";

export default function SignInForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },

    onSubmit: (values) => {
      // console.log("values", values);
      dispatch(signInUserAction(values));
      navigate("/");
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="w-full flex flex-col py-4">
      <input
        className="p-3 my-2 bg-gray-700 rouded"
        placeholder="Username"
        name="taiKhoan"
        onChange={formik.handleChange}
      />
      <input
        className="p-3 my-2 bg-gray-700 rouded"
        type="password"
        placeholder="Password"
        name="matKhau"
        autoComplete="current-password"
        onChange={formik.handleChange}
      />
      <button type="submit" className="bg-red-600 py-3 my-6 rounded font-bold">
        Sign In
      </button>
      <div className="flex justify-between items-center text-sm text-gray-600">
        <p>
          <input className="mr-2" type="checkbox" />
          Remember me
        </p>
        <p>Need Help?</p>
      </div>
      <p className="py-8">
        <span className="text-gray-600">New to Netflix?</span>{" "}
        <Link to="/sign-up">Sign Up</Link>
      </p>
    </form>
  );
}
