import React from "react";
import { createFileRoute } from "@tanstack/react-router";

//App import For simplification. Bad practice
import WebApp from "../../../../apps/web/src/App";

export const Route = createFileRoute("/web")({
  component: Web,
});

function Web() {
  return <WebApp />;
}
