import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Shop } from "./components/layout/Shop";
import { ContextProvider } from "./context";

function App() {
  return (
    <>
      <Header />
      <ContextProvider>
        <Shop />
      </ContextProvider>
      <Footer />
    </>
  );
}

export default App;
