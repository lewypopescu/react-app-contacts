import Header from "../Header/Header";
import Loader from "../Loader/Loader";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader padding={40} size="xl" />}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default SharedLayout;
