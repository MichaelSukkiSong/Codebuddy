import './App.scss';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import Layout from './components/layouts/Layout';
import PlaygroundLayout from './components/layouts/PlaygroundLayout';
import AuthLayout from './components/layouts/AuthLayout';
import MycodeLayout, {
  loader as mycodeLayoutLoader,
} from './components/layouts/MycodeLayout';
import LandingPage from './pages/LandingPage';
import MycodePage, { loader as mycodePageLoader } from './pages/MycodePage';
import MycodeDetailPage, {
  loader as mycodeDetailPageLoader,
} from './pages/MycodeDetailPage';
import LoginPage, {
  loader as loginPageLoader,
  action as loginPageAction,
} from './pages/LoginPage';
import SignupPage, { action as signupPageAction } from './pages/SignupPage';
import HelpimplementationPage from './pages/playground/HelpimplementationPage';
import CantremembersyntaxPage from './pages/playground/CantremembersyntaxPage';
import FinderrorPage from './pages/playground/FinderrorPage';
import DatastructuresandalgorithmPage from './pages/playground/DatastructuresandalgorithmPage';
import WhatisthiscodedoingPage from './pages/playground/WhatisthiscodedoingPage';
import MoreefficiencyPage from './pages/playground/MoreefficiencyPage';
import UsefulinfoPage from './pages/playground/UsefulinfoPage';
import ShowtestcodePage from './pages/playground/ShowtestcodePage';
import ChangelanguagePage from './pages/playground/ChangelanguagePage';
import CustomCategoryPage from './pages/playground/categories/CustomCategoryPage';
import NotfoundPage from './pages/NotfoundPage';
import Error from './components/Error';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />} errorElement={<Error />}>
        <Route index element={<LandingPage />} errorElement={<Error />} />
        <Route
          path="playground"
          element={<PlaygroundLayout />}
          errorElement={<Error />}
        >
          <Route
            index
            element={<HelpimplementationPage />}
            errorElement={<Error />}
          />
          <Route
            path="cantremembersyntax"
            element={<CantremembersyntaxPage />}
            errorElement={<Error />}
          />
          <Route
            path="finderror"
            element={<FinderrorPage />}
            errorElement={<Error />}
          />
          <Route
            path="datastructuresandalgorithm"
            element={<DatastructuresandalgorithmPage />}
            errorElement={<Error />}
          />
          <Route
            path="whatisthiscodedoing"
            element={<WhatisthiscodedoingPage />}
            errorElement={<Error />}
          />
          <Route
            path="moreefficiency"
            element={<MoreefficiencyPage />}
            errorElement={<Error />}
          />
          <Route
            path="usefulinfo"
            element={<UsefulinfoPage />}
            errorElement={<Error />}
          />
          <Route
            path="showtestcode"
            element={<ShowtestcodePage />}
            errorElement={<Error />}
          />
          <Route
            path="changelanguage"
            element={<ChangelanguagePage />}
            errorElement={<Error />}
          />
          <Route
            path="categories/:categoryId"
            element={<CustomCategoryPage />}
            errorElement={<Error />}
          />
        </Route>
        <Route
          path="mycode"
          element={<MycodeLayout />}
          loader={mycodeLayoutLoader}
          errorElement={<Error />}
        >
          <Route
            index
            element={<MycodePage />}
            loader={mycodePageLoader}
            errorElement={<Error />}
          />
          <Route
            path=":responseId"
            element={<MycodeDetailPage />}
            loader={mycodeDetailPageLoader}
            errorElement={<Error />}
          />
        </Route>
      </Route>
      <Route path="auth" element={<AuthLayout />} errorElement={<Error />}>
        <Route
          path="login"
          element={<LoginPage />}
          loader={loginPageLoader}
          action={loginPageAction}
          errorElement={<Error />}
        />
        <Route
          path="signup"
          element={<SignupPage />}
          action={signupPageAction}
          errorElement={<Error />}
        />
      </Route>
      <Route path="*" element={<NotfoundPage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
