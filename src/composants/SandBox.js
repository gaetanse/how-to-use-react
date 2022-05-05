import {Component} from "react"
import { Sandbox, withDependencies } from "react-sandbox-editor";
 
const ReactSandbox = withDependencies([
  "https://unpkg.com/react@16.6.0/umd/react.development.js",
  "https://unpkg.com/react-dom@16.6.0/umd/react-dom.development.js"
])(Sandbox);

export class SandBox extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div className="centerElement">
            {/*
                    <iframe src="mypage.html" style="position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;">
                Your browser doesn't support iframes
            </iframe>
            */}
            {/*<div className="col-xs-12 col-sm-12 col-md-12">
                <iframe style={{width: "90vw",height: "90vh",position: "relative"}} src="https://codesandbox.io/s/icy-waterfall-v0jnj6?file=/src/App.js" frameborder="0" allowfullscreen></iframe>
            </div>*/}

            <ReactSandbox
                theme="github"
                scriptEditor={{
                defaultValue: 'ReactDOM.render(\n  <h1>Hello, world!</h1>,\n  document.getElementById(\'root\')\n);',
                mode: 'jsx',
                readOnly: false,
                wrapLines: false
                }}
                templateEditor={{
                defaultValue: '<div id="root"></div>',
                mode: 'html',
                readOnly: true,
                wrapLines: false
                }}
                stylesheetEditor={{
                  defaultValue: "body { background: pink; }",
                  mode: "css",
                  readOnly: false,
                  wrapLines: true
                }}
            />

            </div>
        )
    }
}