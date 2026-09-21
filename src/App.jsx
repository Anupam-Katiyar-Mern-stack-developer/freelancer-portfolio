import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchSiteData } from "./redux/slices/siteDataSlice";
import Home from "./pages/public/Home";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSiteData());
  }, [dispatch]);

  return <Home />;
};

export default App;