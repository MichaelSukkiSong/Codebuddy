import './App.scss';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import Layout from './components/Layout';
import PlaygroundLayout from './components/PlaygroundLayout';
import AuthLayout, {
  action as authLayoutAction,
} from './components/AuthLayout';
import LandingPage from './pages/LandingPage';
import MycodePage, { loader as mycodePageLoader } from './pages/MycodePage';
import LoginPage, { loader as loginPageLoader } from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import HelpimplementationPage from './pages/playground/HelpimplementationPage';
import CantremembersyntaxPage from './pages/playground/CantremembersyntaxPage';
import FinderrorPage from './pages/playground/FinderrorPage';
import DatastructuresandalgorithmPage from './pages/playground/DatastructuresandalgorithmPage';
import WhatisthiscodedoingPage from './pages/playground/WhatisthiscodedoingPage';
import MoreefficiencyPage from './pages/playground/MoreefficiencyPage';
import UsefulinfoPage from './pages/playground/UsefulinfoPage';
import ShowtestcodePage from './pages/playground/ShowtestcodePage';
import ChangelanguagePage from './pages/playground/ChangelanguagePage';
import NotfoundPage from './pages/NotfoundPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="playground" element={<PlaygroundLayout />}>
          <Route index element={<HelpimplementationPage />} />
          <Route path="syntax" element={<CantremembersyntaxPage />} />
          <Route path="findError" element={<FinderrorPage />} />
          <Route
            path="datastructuresandalgorithm"
            element={<DatastructuresandalgorithmPage />}
          />
          <Route path="questionmark" element={<WhatisthiscodedoingPage />} />
          <Route path="efficiency" element={<MoreefficiencyPage />} />
          <Route path="usefulinfo" element={<UsefulinfoPage />} />
          <Route path="testcode" element={<ShowtestcodePage />} />
          <Route path="changelanguage" element={<ChangelanguagePage />} />
        </Route>
        <Route
          path="mycode"
          element={<MycodePage />}
          loader={mycodePageLoader}
        />
      </Route>
      <Route path="auth" element={<AuthLayout />} action={authLayoutAction}>
        <Route path="login" element={<LoginPage />} loader={loginPageLoader} />
        <Route path="signup" element={<SignupPage />} />
      </Route>
      <Route path="*" element={<NotfoundPage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
