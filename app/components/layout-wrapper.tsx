"use client";

import { FC, ReactNode } from "react";
import { usePathname } from "next/navigation";
import Header from "./layout/header";
import Sidebar from "./layout/sidebar";
import Footer from "./layout/footer";

const hideLayoutRoutes = ["/auth", "/admin"];

interface LayoutWrapperProps {
  children: ReactNode;
}

const LayoutWrapper: FC<LayoutWrapperProps> = ({
  children,
}: {
  children: ReactNode;
}) => {
  const pathname = usePathname(); // Ottieni la rotta corrente
  const hideLayout = hideLayoutRoutes.some((route) =>
    pathname.startsWith(route),
  );

  return (
    <>
      {hideLayout ? (
        <main>{children}</main>
      ) : (
        <>
          <Header />
          <Sidebar />
          <main>{children}</main>
          <Footer />
        </>
      )}
    </>
  );
};

export default LayoutWrapper;
