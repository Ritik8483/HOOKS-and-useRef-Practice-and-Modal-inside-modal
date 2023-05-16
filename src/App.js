import logo from "./logo.svg";
import "./App.css";
import UseReducers from "./components/UseReducers";
import UseCallbackHook from "./components/UseCallbackHook";
import UseMemoComponent from "./components/UseMemo";
import UserRefFirst from "./components/useRef/UserRefFirst";
import UseRefSecond from "./components/useRef/UseRefSecond";
import ModalContainer from "./components/modal/ModalContainer";
import DateField from "./components/datePicker/DateField";
import CheckBox from "./components/checkBox/checkBox";
import ReactSelectApp from "./components/reactSelect/ReactSelect";
import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoutesComponent from "./routes/RoutesComponent";
import RoutesArray from "./routes/RoutesArray";

function App() {
  return (
    // ARRAY METHOD OF ROUTING
    // <Suspense fallback={<div>...loading</div>}>
    //   <BrowserRouter>
    //     <Routes>
    //       {RoutesArray.map((route,index) => (
    //         <Route key={index} path={route.path} element={route.element} />
    //       ))}
    //     </Routes>
    //   </BrowserRouter>
    // </Suspense>

    // ROUTES USING useRoutes HOOK
    // <Suspense fallback={<div>...loading</div>}>
    //   <BrowserRouter>
    //       <RoutesComponent />
    //   </BrowserRouter>
    // </Suspense>
    // <ReactSelectApp/>

    // <UserRefFirst/>
    // <UseRefSecond/>
    // <UseCallbackHook />
    <UseMemoComponent/>
  );
}

export default App;
