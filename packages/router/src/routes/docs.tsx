import React from "react";
import { createFileRoute } from "@tanstack/react-router";

//App import For simplification. Bad practice
import DocsApp from "../../../../apps/docs/src/App";

export const Route = createFileRoute("/docs")({
  component: Docs,
});

function Docs() {
  return <DocsApp />;
}
