import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="layout">{children}</div>
);

export default Layout;
