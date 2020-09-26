import * as React from "react";
import * as ReactDOM from "react-dom";

import { HelloWorld } from "./App";

ReactDOM.render(
  <HelloWorld userName="Runner" lang="TypeScript" />,
  document.getElementById("output")
);
