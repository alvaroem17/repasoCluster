import { createBrowserRouter } from "react-router-dom"

import Root from "../layout/root"
import App from "../views/Home"
import Characters from "../views/Character/Characters"

const router = createBrowserRouter([
  {
    path:"/",
    element: <Root />,
    children: [{
      path:"/home",
      element: <App />
    },{
      path:"/characters",
      element: <Characters />
    },
  ]
  }
])

export default router