import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, redirect } from "react-router-dom";
import { RootState } from "../../components/StoreToolkit";
import { useAppSelector } from "../Models/SliceModel";

interface componentType {
  Component: any;
}

const Protected = ({ Component }: componentType) => {
  const { loading, data } = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  const { authenticateUser } = useAppSelector((state) => state.user);

  useEffect((): any => {
    console.log(data.length);
    if (!authenticateUser) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <Component />
    </div>
  );
};

export default Protected;
