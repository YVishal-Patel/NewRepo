// import React, {useRef, useState} from "react";
// import { Formik } from "formik";
// import * as Emailvalidator from "email-validator";
// import { isDisabled } from "@testing-library/user-event/dist/utils";
// import { boolean } from "yup";


// type errorType = {
//   email: string;
//   password: string | number;
// };
// const About = () => (
//   <>
//     <Formik
//       initialValues={{ email: "", password: "" }}
//       onSubmit={(values, { setSubmitting } ) => {
//         console.log(values);
//       }}
//       validate={(values) => {
//         let errors: errorType = {
//           email: "",
//           password: "", 
//         };


//         if (!values.email) {
//           errors.email = "Required";
//         } else if (!Emailvalidator.validate(values.email)) {
//           errors.email = "Invalid Email Address";
//         }
//         const passwordRegex = /(?=.*[0-9])/;
//         if (!values.password) {
//           errors.password = "Required";
//         } else if (values.password.length < 8) {
//           errors.password = "Password must be 8 characters long";
//         } else if (!passwordRegex.test(values.password)) {
//           errors.password = "Invalid Password must contain one number";
//         }
//         return errors;
//       }}
//     >
//       {({
//         values,
//         touched,
//         errors,
//         isSubmitting,
//         handleChange,
//         handleBlur,
//         handleSubmit,
//       }) => (
//         <>
//           <form
//             onSubmit={(e: any) => {
//               e.preventDefault();
//               console.log("data");
//               handleSubmit();
//             }}
//           >
//             <label htmlFor="email">Email</label>
//             <input
//               name="email"
//               type="text"
//               placeholder="Enter your email"
//               value={values.email}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               // className={errors.email && touched.email && "error"}
//             />
//             {errors.email && touched.email && (
//               <div className="input feedback">{errors.email}</div>
//             )}
//             <label htmlFor="email">Password</label>
//             <input
//               name="password"
//               type="password"
//               placeholder="Enter your password"
//               value={values.password}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               // className={errors.password && touched.password && "error"}
//             />
//             {errors.password && touched.password && (
//               <div className="input feedback">{errors.password}</div>
//             )}
//             <button type="submit"  >Login</button>
//           </form>
//         </>
//       )}
//     </Formik>
//   </>
// );

// export default About;

import React from 'react'

const About = () => {
  return (
    <div>
      <p>About page</p>
    </div>
  )
}

export default About

