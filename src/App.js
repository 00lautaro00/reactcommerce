import { Provider } from "react-redux";
import { Layout } from "./components/layout/Layout";
import { Main } from "./components/main/Main";
import { store } from "./components/store/store";

function App() {
  return (
   <Provider store={store} >
   <Layout>
    <Main />
    </Layout> 
   </Provider>

  );
}

export default App;
