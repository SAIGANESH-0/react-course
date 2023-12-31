import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Header from "./components/Header";
import Footer from "./components/Footer";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import Payment from "./components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51OTQjESBJRMxZAF9gA99Ycx734fAqTjfAROyhb3cjN09GhSf6ve30Ra22Kk5GRm6jfgBXrYNRljANPOHrpmJYiJV00nVe3wqR8"
);

const appRouter = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/",
    element: (
      <>
        <Header />
        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: "/product/:id",
    element: (
      <>
        <Header />
        <ProductDetail />
        <Footer />
      </>
    ),
  },
  {
    path: "/cart",
    element: (
      <>
        <Header />
        <Cart />
        <Footer />
      </>
    ),
  },
  {
    path: "/pay",
    element: (
      <>
        <Header />
        <Elements stripe={stripePromise}>
          <Payment />
        </Elements>
        <Footer />
      </>
    ),
  },
]);
function App() {
  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
