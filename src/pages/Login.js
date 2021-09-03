import { Form, Formik } from "formik";
import React from "react";
import Navbar from "../components/Navbar";

export default function Login() {
  return (
    <div>
      <Navbar />
      <div className="form">
        <Formik initialValues={{ email: "", password: "" }}>
          {() => (
            <Form>
              <h2>Login</h2>
              <input
                type="email"
                name="email"
                //  onChange={handleChange}
                //  onBlur={handleBlur}
                // value={values.email}
              />
              {/* // {errors.email && touched.email && errors.email} */}
              <input
                type="password"
                name="password"
                // onChange={handleChange}
                // onBlur={handleBlur}
                // value={values.password}
              />
              {/* {errors.password && touched.password && errors.password} */}
              <button
                type="submit"
                //  disabled={isSubmitting}
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
