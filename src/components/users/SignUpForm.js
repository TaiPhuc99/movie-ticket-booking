import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { UserService } from "../../services/userService/UserService";
import { toast } from "react-toastify";

export default function SignUpForm() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      hoTen: "",
    },
    validationSchema: yup.object().shape({
      taiKhoan: yup
        .string()
        .min(6, "At least 6 characters")
        .max(15, "Maximum 15 characters")
        .required("*Field is required!"),
      matKhau: yup
        .string()
        .min(6, "At least 6 characters")
        .max(20, "Maximum 20 characters")
        .required("*Field is required!"),
      email: yup
        .string()
        .matches(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          "Invalid Email"
        )
        .required("*Field is required!"),
      soDt: yup
        .string()
        .matches(/^[0-9]+$/, "Invalid Number")
        .required("*Field is required!"),
      hoTen: yup
        .string()
        .matches(
          "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
            "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
            "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$",
          "Invalid Name"
        )
        .required("*Field is required!"),
    }),
    onSubmit: (values) => {
      // console.log("values", values);
      UserService.newUserSignUp(values)
        .then((res) => {
          // console.log(res);
          toast.success("Successfully Sign-Up");
          setTimeout(() => {
            navigate("/sign-in");
          }, 1000);
        })
        .catch((err) => {
          // console.log(err);
          toast.error("Something went wrong with Sign-Up");
          throw err;
        });
    },
  });

  return (
    <form className="w-full flex flex-col py-4" onSubmit={formik.handleSubmit}>
      <input
        className="p-2 my-2 bg-gray-700 rouded"
        placeholder="Username"
        name="taiKhoan"
        onChange={formik.handleChange}
        value={formik.values.taiKhoan}
      />
      {formik.errors.taiKhoan && formik.touched.taiKhoan && (
        <p>{formik.errors.taiKhoan}</p>
      )}
      <input
        className="p-2 my-2 bg-gray-700 rouded"
        type="password"
        placeholder="Password"
        name="matKhau"
        onChange={formik.handleChange}
        value={formik.values.matKhau}
      />
      {formik.errors.matKhau && formik.touched.matKhau && (
        <p>{formik.errors.matKhau}</p>
      )}
      <input
        className="p-2 my-2 bg-gray-700 rouded"
        placeholder="Email"
        name="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.errors.email && formik.touched.email && (
        <p>{formik.errors.email}</p>
      )}
      <input
        className="p-2 my-2 bg-gray-700 rouded"
        placeholder="Phone"
        name="soDt"
        onChange={formik.handleChange}
        value={formik.values.soDt}
      />
      {formik.errors.soDt && formik.touched.soDt && <p>{formik.errors.soDt}</p>}
      <input
        className="p-2 my-2 bg-gray-700 rouded"
        placeholder="Full Name"
        name="hoTen"
        onChange={formik.handleChange}
        value={formik.values.hoTen}
      />
      {formik.errors.hoTen && formik.touched.hoTen && (
        <p>{formik.errors.hoTen}</p>
      )}
      <button className="bg-red-600 py-3 my-4 rounded font-bold">
        Sign Up
      </button>

      <p className="text-center">
        <span className="text">
          Already subscribed to{" "}
          <span className="text-3 uppercase">Cinemax</span> ?
        </span>{" "}
        <Link to="/sign-in">
          <span className="text-green-600 hover:text-white">Sign-In</span>
        </Link>
      </p>
    </form>
  );
}
