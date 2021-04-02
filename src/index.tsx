import { Renderer } from "@nodegui/react-nodegui";
import React from "react";
import App from "./app";

process.title = "My NodeGui App";
Renderer.render(<App />);
// This is for hot reloading (this will be stripped off in production by webpack)
// @ts-ignore
if (module.hot) {
  // @ts-ignore
  module.hot.accept(["./app"], function() {
    Renderer.forceUpdate();
  });
}
