import React from "react";
import { Spinner } from "react-bootstrap";
const LoadingScreen = () => {
  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <Spinner animation="border" variant="info" />
    </div>
  );
};
export default LoadingScreen;
