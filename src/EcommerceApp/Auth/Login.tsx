import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import { userDataType } from "../Models/SignInUserType";
import { useAppDispatch, useAppSelector } from "../Models/SliceModel";
import { checkLoginUser } from "../Redux/SliceReducer";
import { Formik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";

type submitType = {
  email: string;
  password: string;
};

const schema = Yup.object().shape({
  email: Yup.string().required(),
  password: Yup.string()
    .required()
    .min(6, "password must contain atleast 6 characters")
    .max(20, "password must contain atmost 20 characters"),
});


const LoginForm = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch();
  const { loading, data, loginData, authenticateUser } = useAppSelector((state) => state.user);
  const [userErrorMessage, setUserErrorMessage] = useState<String>("")
  const [userData, setUserData] = useState<userDataType>({
    // id: Math.floor(Math.random() * 1000),
    name: "",
    email: "",
    password: "",
  });

  const [user, setUser] = useState<userDataType[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (
    { email, password }: submitType,
    { setFieldError }: any
  ) => {
    // console.log(email, password, "data");
    setTimeout(() => {
      setFieldError("password", "Invalid Password");
    }, 1000);
  };

 

  return (
    <>
    
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={schema}
        onSubmit={(data) => {
          dispatch({ type: checkLoginUser, payload: data });
          if(authenticateUser){
            navigate('/')
          }else{
            setUserErrorMessage("Email and password is invalid")
          }
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
            <div className="container   d-flex justify-content-center align-center h-100 py-5  ">
              <Form
                className="   border px-4 py-5 "
                onSubmit={handleSubmit}
              >
                <p style={{color:"red"}}>{userErrorMessage}</p>
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
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          );
        }}
      </Formik>
      <div className="d-flex justify-content-center btn-sign-in">
        <span className="">Not an Account </span>
        <Link to="/sign-in" className="mx-3 text-decoration-none">
          Sigin
        </Link>
      </div>
    </>
  );
};

export default LoginForm;
