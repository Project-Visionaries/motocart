import { AppBarContextProvider } from "./AppBarContext/AppBarContext"
import { Layout } from "./components/Layout/Layout";
import { Home } from "./pages/Home/Home";
import { ProductList } from "./pages/ProductList/ProductList";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ShoppingCart } from "./pages/ShoppingCart";
import { ProductDetail } from "./pages/ProductDetail";
import { TestingPage } from "./pages/testingPage";

function App() {
  return (
    <AppBarContextProvider>
      <Router>
        <Switch>
          <Layout>
            <Route exact path="/" component={Home} />
            <Route path="/product-list" component={ProductList} />
            <Route path="/shopping-cart" component={ShoppingCart} />
            <Route path="/product-detail/:id" component={ProductDetail} />
            {/* <Route path="/test" component={TestingPage} /> */}
          </Layout>
        </Switch>
      </Router>
    </AppBarContextProvider>
  );
}

export default App;
