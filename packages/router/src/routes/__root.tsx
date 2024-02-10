import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Footer, Navigation } from "../../../ui";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
      <TanStackRouterDevtools />
    </>
  );
}
