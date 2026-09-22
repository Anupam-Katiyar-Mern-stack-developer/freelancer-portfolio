import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchSiteData } from "./redux/slices/siteDataSlice";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSiteData());
  }, [dispatch]);

  return <AppRoutes />;
};

export default App;