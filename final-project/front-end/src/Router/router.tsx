import { createBrowserRouter } from "react-router";

import { Layout } from "../Components/Layout.tsx";
import { DashBoard } from "../Components/MainPages/DashBoard/DashBoard.tsx";
import { Library } from "../Components/MainPages/Library.tsx";
import { BackLog } from "../Components/MainPages/BackLog.tsx";
import { PlayNext } from "../Components/MainPages/PlayNext.tsx";
import { Friends } from "../Components/MainPages/Friends.tsx";
import { Search } from "../Components/MainPages/Search.tsx";

export const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      { index: true, Component: DashBoard },
      { path: "/library", Component: Library },
      { path: "/backlog", Component: BackLog },
      { path: "/playnext", Component: PlayNext },
      { path: "/friends", Component: Friends },
      { path: "/search", Component: Search },
    ],
  },
]);
