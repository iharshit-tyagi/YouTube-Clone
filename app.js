import ReactDom from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { Provider } from "react-redux";
import store from "./src/utils/store";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import WatchPage from "./src/components/WatchPage";
import Error from "./src/components/Error";
import MainContainer from "./src/components/MainContainer";
// import
const root = ReactDom.createRoot(document.querySelector(".root"));
/**
 *
 * Header
 *  Body
 *   Sidebar
 *  MainContainer
 *  Actions Container
 * VideoContainer
 * VideoCard
 *
 *
 */
const AppLayout = () => {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    // errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
    ],
  },
]);
root.render(<AppLayout />);
