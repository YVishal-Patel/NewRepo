import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import { userDataType } from "../Models/SignInUserType";
import { useAppDispatch, useAppSelector } from "../Models/SliceModel";
import { userInput } from "../Redux/SliceReducer";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

type submitType = {
  email: string;
  password: string;
  name: string;
};

const schema = Yup.object().shape({
  name: Yup.string()
    .required()
    .min(6, "name must contain atleast 6 characters")
    .max(20, "name must contain atmost 20 characters"),
  email: Yup.string().required(),
  password: Yup.string()
    .required()
    .min(6, "password must contain atleast 6 characters")
    .max(20, "password must contain atmost 20 characters"),
});

const SignIn = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch();
  const {authenticateUser} = useAppSelector(state => state.user) 
  const [userData, setUserData] = useState<userDataType>({
    name: "",
    email: "",
    password: "",
  });

  const [user, setUser] = useState<userDataType[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    setUser([...user, userData]);
    e.preventDefault();
    dispatch({ type: userInput, payload: [...user, userData] });
    setUserData({ name: "", email: "", password: "" });
  };

  // const handleSubmit = ({ email, password, name }:submitType, { setFieldError }:any) => {
  //   console.log(email, password, "data");
  //   setTimeout(() => {
  //     setFieldError("password", "Invalid Password");
  //   }, 1000);
  // };

  return (
    <>
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      validationSchema={schema}
      onSubmit={(data: any) => {
        // console.log(data);
        dispatch({ type: userInput, payload: data });
       navigate('/login')
      }}
    >
      {({
        values,
        errors,
        handleSubmit,
        handleChange,
        touched,
        handleBlur,
      }) => {
        return (
          <div className="container   d-flex justify-content-center align-center h-100 py-3  ">
            <Form className="   border px-4 py-5 " onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  name="name"
                  type="text"
                  placeholder="Enter name"
                  onChange={handleChange("name")}
                />
                {touched.name && <div>{errors.name}</div>}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  onChange={handleChange("email")}
                />
                {touched.email && <div>{errors.email}</div>}

                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange("password")}
                />
                {touched.password && <div>{errors.password}</div>}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit" >
                Submit
              </Button>
            </Form>
          </div>
        );
      }}
    </Formik>
    <div className="d-flex justify-content-center btn-login-in">
        <span className="">Have an Account </span>
        <Link to="/login" className="mx-3 text-decoration-none">
          Login
        </Link>
      </div>
    </>
  );
};

export default SignIn;
