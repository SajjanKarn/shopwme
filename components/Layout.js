import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, footer }) => {
  return (
    <div>
      <Header />
      <div className="container mx-auto px-4">{children}</div>
      {footer && <Footer />}
    </div>
  );
};

Layout.defaultProps = {
  footer: false,
};

export default Layout;
