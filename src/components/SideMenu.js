import { Link } from "react-router-dom";

export default function SideMenu() {
  return (
    <div className="side-menu">
      <div className="side-menu-bg"></div>
      <div className="bg-light side-menu-inner">
        <div className="pl-1 pr-5" style={{ height: "100%" }}>
          <div style={{ lineHeight: "30px" }}>
            <h2>Content</h2>
            <ul style={{ listStyle: "none" }} className="np">
              <li>
                {/* eslint-disable-next-line */}
                <a
                  className="text-dark"
                  data-toggle="collapse"
                  data-target="#basic"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-caret-right-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                  </svg>{" "}
                  Basic
                </a>
                <div className="collapse" id="basic">
                  <ul style={{ listStyle: "none" }} className="pl-1">
                    <li>
                      <Link
                        to="/document/installation"
                        className="text-dark side-menu-link"
                      >
                        Installation
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/document/text"
                        className="text-dark side-menu-link"
                      >
                        Text
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/document/sizing"
                        className="text-dark side-menu-link"
                      >
                        Sizing
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/document/position"
                        className="text-dark side-menu-link"
                      >
                        Position
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/document/layout"
                        className="text-dark side-menu-link"
                      >
                        Layout
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/document/responsive"
                        className="text-dark side-menu-link"
                      >
                        Responsive
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                {/* eslint-disable-next-line */}
                <a
                  className="text-dark"
                  data-toggle="collapse"
                  data-target="#utility"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-caret-right-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                  </svg>{" "}
                  Utility
                </a>
                <div className="collapse" id="utility">
                  <ul style={{ listStyle: "none" }} className="pl-1">
                    <li>
                      <Link
                        to="/document/background"
                        className="text-dark side-menu-link"
                      >
                        Background
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/document/margin"
                        className="text-dark side-menu-link"
                      >
                        Margin
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/document/padding"
                        className="text-dark side-menu-link"
                      >
                        Padding
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/document/border"
                        className="text-dark side-menu-link"
                      >
                        Border
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/document/shadow"
                        className="text-dark side-menu-link"
                      >
                        Shadow
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                {/* eslint-disable-next-line */}
                <a
                  className="text-dark"
                  data-toggle="collapse"
                  data-target="#component"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-caret-right-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                  </svg>{" "}
                  Component
                </a>
                <div className="collapse" id="component">
                  <ul style={{ listStyle: "none" }} className="pl-1">
                    <li>
                      <Link
                        to="/document/container"
                        className="text-dark side-menu-link"
                      >
                        Container
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/document/button"
                        className="text-dark side-menu-link"
                      >
                        Buttons
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/document/form"
                        className="text-dark side-menu-link"
                      >
                        Form
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/document/navbar"
                        className="text-dark side-menu-link"
                      >
                        Navigation Bar
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/document/modal"
                        className="text-dark side-menu-link"
                      >
                        Modal
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/document/popup"
                        className="text-dark side-menu-link"
                      >
                        Popup
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/document/dropdown"
                        className="text-dark side-menu-link"
                      >
                        Dropdown
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/document/collapse"
                        className="text-dark side-menu-link"
                      >
                        Collapse
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                {/* eslint-disable-next-line */}
                <a
                  className="text-dark"
                  data-toggle="collapse"
                  data-target="#other"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-caret-right-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                  </svg>{" "}
                  Other
                </a>
                <div className="collapse" id="other">
                  <ul style={{ listStyle: "none" }} className="pl-1">
                    <li>
                      <Link
                        to="/document/customize"
                        className="text-dark side-menu-link"
                      >
                        Customizing
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/document/bug"
                        className="text-dark side-menu-link"
                      >
                        Bugs
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
