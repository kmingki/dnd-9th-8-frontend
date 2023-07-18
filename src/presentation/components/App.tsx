import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import store from "../store/store";
import { GlobalStyle } from "../styles/GlobalStyle";

function App() {
  const queryClient = new QueryClient();
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <></>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
