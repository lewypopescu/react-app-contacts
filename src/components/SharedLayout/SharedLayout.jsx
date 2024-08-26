import Header from "../Header/Header";
import Loader from "../Loader/Loader";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header className="mb-6 shadow-md" />
      <div className="flex-grow container mx-auto p-4">
        <Suspense fallback={<Loader padding={40} size="xl" />}>
          <Outlet />
        </Suspense>
      </div>
      <footer className="bg-blue-600 text-white text-center py-2">
        © 2024 Contacts Digital App
      </footer>
    </div>
  );
};

export default SharedLayout;
