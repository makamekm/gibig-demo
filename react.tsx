import React from "https://dev.jspm.io/react"
import ReactDOMServer from "https://dev.jspm.io/react-dom/server"
const str = ReactDOMServer.renderToString(<div className="deno">land</div>);
console.log(str);