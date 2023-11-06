import { Suspense } from "react";
import { RouterProvider } from 'react-router-dom';
import './App.scss'
import {routes} from './Routes';


function App() {
  return (
    <Suspense>
      <RouterProvider router={routes} />
    </Suspense>
  );
}

export default App;