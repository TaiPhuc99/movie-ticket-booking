import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signInUserAction } from "../../redux/actions/UserAction";
import * as yup from "yup";

export default function SignInForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    validationSchema: yup.object().shape({
      taiKhoan: yup.string().required("*Field is required!"),
      matKhau: yup.string().required("*Field is required!"),
    }),
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
        value={formik.values.taiKhoan}
      />
      {formik.errors.taiKhoan && formik.touched.taiKhoan && (
        <p>{formik.errors.taiKhoan}</p>
      )}
      <input
        className="p-3 my-2 bg-gray-700 rouded"
        type="password"
        placeholder="Password"
        name="matKhau"
        onChange={formik.handleChange}
        value={formik.values.matKhau}
      />
      {formik.errors.matKhau && formik.touched.matKhau && (
        <p>{formik.errors.matKhau}</p>
      )}
      <button type="submit" className="bg-red-600 py-3 my-6 rounded font-bold">
        Sign In
      </button>
      <div className="flex flex-col justify-center items-center text-sm text-gray-600">
        <p className="text">
          <input className="mr-2" type="checkbox" />
          Remember me
        </p>
        <p className="py-4">
          <span className="text">
            New to <span className="text-3 uppercase">Cinemax</span> ?
          </span>{" "}
          <Link to="/sign-up">
            <span className="text-green-600 hover:text-white">Sign-Up</span>
          </Link>
        </p>
      </div>
    </form>
  );
}
