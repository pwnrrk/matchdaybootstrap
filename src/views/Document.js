import hljs from "highlight.js";
import React from "react";
import DocumentFooter from "../components/DocumentFooter";
import Sections from "../components/DocumentSections";
import SideMenu from "../components/SideMenu";

export default class Document extends React.Component {
  state = {
    active: this.props.section
  };
  highlight() {
    document.querySelectorAll("pre").forEach(block => {
      hljs.highlightElement(block);
    });
  }
  componentDidUpdate(prevProps) {
    if (prevProps.section !== this.props.section) {
      this.setState({ active: this.props.section });
    }
    this.highlight();
  }
  componentDidMount() {
    this.highlight();
  }
  render() {
    let Section = Sections[this.state.active];
    if (Section)
      return (
        <div>
          <SideMenu />
          <Section />
          <DocumentFooter />
        </div>
      );
    else
      return (
        <div>
          <SideMenu />
          {Sections.installation()}
          <DocumentFooter />
        </div>
      );
  }
}
