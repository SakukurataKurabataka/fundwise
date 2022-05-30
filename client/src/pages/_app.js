import { store } from "../redux/store/store";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const layout = Component.layout ?? ((page) => page);

  return (
    <Provider store={store}>
      <Toaster position="top-center" reverseOrder={false} />
      {layout(<Component {...pageProps} />)}
    </Provider>
  );
}

export default MyApp;
