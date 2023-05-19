import { useRoutes } from "react-router-dom";
import Footer from "./layouts/footer/Footer";
import Header from "./layouts/header/Header";
import routes from "./router/routes";

const App = () => {
  return (
    <>
      <Header />
      {useRoutes(routes)}
      <Footer />
    </>
  );
};

export default App;
