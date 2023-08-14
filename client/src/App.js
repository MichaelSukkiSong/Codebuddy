import './App.scss';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import Layout from './components/Layout';
import PlaygroundLayout from './components/PlaygroundLayout';
import LandingPage from './pages/LandingPage';
import MycodePage from './pages/MycodePage';
import LoginPage from './pages/LoginPage';
import HelpimplementationPage from './pages/playground/HelpimplementationPage';
import CantremembersyntaxPage from './pages/playground/CantremembersyntaxPage';
import FinderrorPage from './pages/playground/FinderrorPage';
import DatastructuresandalgorithmPage from './pages/playground/DatastructuresandalgorithmPage';
import WhatisthiscodedoingPage from './pages/playground/WhatisthiscodedoingPage';
import MoreefficiencyPage from './pages/playground/MoreefficiencyPage';
import UsefulinfoPage from './pages/playground/UsefulinfoPage';
import ShowtestcodePage from './pages/playground/ShowtestcodePage';
import ChangelanguagePage from './pages/playground/ChangelanguagePage';

const router = createBrowserRouter(
  createRoutesFromElements(
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
      <Route path="mycode" element={<MycodePage />} />
      <Route path="login" element={<LoginPage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
