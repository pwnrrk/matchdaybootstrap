import axios from "axios";
import hljs from "highlight.js";
import React from "react";
import { Link } from "react-router-dom";

const gradient = {
  background:
    "linear-gradient(165deg, rgb(255, 255, 255) 50%, var(--gray-300) 50%)"
};
const Body = (props) => (
  <div>
    <div style={gradient}>
      <div className="col-11 pt-5 pb-5 m-auto">
        <div className="row align-items-center">
          <div className="col-l">
            <div className="w-64">
              <img
                src="https://pwnrrk.github.io/mb-ico.png"
                alt="app-icon"
                style={{maxWidth:'400px'}}
              />
            </div>
          </div>
          <div className="col-l">
            <h1 className="font-600">
              MINIMAL BOOTSTRAP, Alternative Bootstrap in minimal package.
            </h1>
            <h2>
              Create responsive website with a simple grid system, customizable
              Sass, and light weight of simple Javascript plugin.
            </h2>
            <div>
              <Link to="/document" className="btn btn-primary btn-lg">
                Get Started
              </Link>{" "}
              <a className="btn btn-secondary-outline btn-lg" href="#install">
                Install
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div className="p-1">
        <h2>Version</h2>
        <h3 id="version">{props.data.version}</h3>
        <h2>Release Note</h2>
        <h3 id="release-title">{props.data.title}</h3>
        <p id="release-body">{props.data.Body}</p>
        <a
          href="https://github.com/pwnrrk/minbootstrap/releases"
          title="Release Note"
        >
          Older
        </a>
      </div>
    </div>
    <div className="p-1" id="install">
      <h2>Installation</h2>
      <pre className="shell-session rounded">
        npm install @r.phuwanat/minbootstrap
      </pre>
    </div>
    <footer className="text-center bg-dark text-light p-1">
      <h5>
        Contributor <a href="https://pwnrrk.github.io">R.Phuwanat</a> THAILAND
      </h5>
      <h5>
        Code licensed by{" "}
        <a href="https://github.com/pwnrrk/minbootstrap/blob/master/LICENSE">
          MIT
        </a>
      </h5>
    </footer>
  </div>
);

export default class Home extends React.Component {
  state = {
    data: {
      version: "",
      title: "",
      body: ""
    }
  };
  componentDidMount() {
    axios.get("https://api.github.com/repos/pwnrrk/minbootstrap/releases").then(response => {
      this.setState({
        data: {
          version: response.data[0].tag_name,
          title: response.data[0].name,
          body: response.data[0].body
        }
      })
    });
    document.querySelectorAll("pre").forEach(block => {
      hljs.highlightElement(block);
    });
  }
  render() {
    return <Body data={this.state.data}/>;
  }
}
