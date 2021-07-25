const Sections = {
  installation: function Installation() {
    return (
      <div class="content">
        <div class="p-2">
          <h2 id="installation">Installation And Import</h2>
          <p>Install with npm</p>
          <pre class="shell-session rounded">npm i @r.phuwanat/minbootstap</pre>
          <p>CSS</p>
          <pre class="html rounded">
            {`<link rel="stylesheet" href="node_modules/@r.phuwanat/minbootstrap/css/minBootstrap.css" />
<!-- Or minified version -->
<link rel="stylesheet" href="node_modules/@r.phuwanat/minbootstrap/css/minBootstrap.min.css">`}
          </pre>
          <p>SCSS</p>
          <pre class="scss rounded">
            @import
            "node_modules/@r.phuwanat/minbootstrap/scss/minBootstrap.scss";
          </pre>
          <p>Javascript for initial</p>
          <pre class="html rounded">
            {`<script src="node_modules/@r.phuwanat/minbootstap/js/minBootstrap.js"></script>
<!-- Or minified version -->
<script src="node_modules/@r.phuwanat/minbootstap/js/minBootstrap.min.js"></script>`}
          </pre>
          <p>If you use framework such as Meteor you can use</p>
          <pre class="js rounded">
            {`// For initial.
import "@r.phuwanat/minbootstap/js/minBootstrap";
//We have extract some utility function.
import { MinB } from "@r.phuwanat/minbootstap/js/minBootstrapBundle";
// The require('@r.phuwanat/minbootstap') is not available yet.`}
          </pre>
        </div>
      </div>
    );
  },
  text: function Text() {
    return (
      <div class="content">
        <h2 id="text">Text</h2>
        <h4>Color</h4>
        <p>{`text-{color}`}</p>
        <div class="shadow p-1 m-auto max-w-sm rounded">
          <div>
            <span class="text-blue">Blue</span>
          </div>
          <div>
            <span class="text-indigo">Indigo</span>
          </div>
          <div>
            <span class="text-purple">Purple</span>
          </div>
          <div>
            <span class="text-muted">Muted</span>
          </div>
          and more.
        </div>
        <div>
          <pre class="html mb-5 rounded">
            {`<span class="text-blue">text<span>
<span class="text-purple">text<span>
<span class="text-indigo">text<span>
<span class="text-muted">text<span>`}
          </pre>
        </div>
        <h4>Align</h4>
        <p>{`text-{position}`}</p>
        <div class="max-w-md m-auto shadow rounded p-1">
          <div class="text-left">Left</div>
          <div class="text-center">Center</div>
          <div class="text-right">Right</div>
        </div>
        <pre class="html mb-5 rounded">
          {`<div class="text-left">Left<div>
<div class="text-center">Center<div>
<div class="text-right">Right<div>`}
        </pre>
        <h4>Font Weight</h4>
        <p>{`font-{weight},fw-{weight}`}</p>
        <div class="p-1 rounded shadow max-w-sm m-auto">
          <div>
            <span class="font-400">400</span>
          </div>
          <div>
            <span class="font-600">600</span>
          </div>
        </div>
        <pre class="html mb-5 rounded">
          {`<span class="font-400">400<span>
<span class="font-600">600<span>`}
        </pre>
      </div>
    );
  },
  sizing: function Sizing() {
    return (
      <div class="content">
        <h2 id="sizing">Sizing</h2>
        <p>
          {`Sizing system with basic size class. w for width. h for height. Use with w-{size},h-{size}.
                    The size is available 1 - 64, w-auto,h-auto is like the width:100%; heigth:100%; in CSS.`}
        </p>
        <div class="flex">
          <div class="w-64 h-64 shadow flex align-items-center justify-content-center rounded m-1">
            {" "}
            w-64 h-64
          </div>
          <div class="w-32 h-32 shadow rounded flex align-items-center justify-content-center m-1">
            {" "}
            w-32 h-32
          </div>
          <div class="w-auto m-1 h-20 shadow rounded flex align-items-center justify-content-center">
            w-auto h-20
          </div>
        </div>
        <pre class="html rounded mb-5">
          {`<div class="w-64 h-64"><div>
<div class="w-32 h-32"><div>
<div class="w-auto h-20"><div>`}
        </pre>
        <p>
          {`Set max width and height with max-w-{size},max-h-{size}. Available size is sm, md and lg, scroll
                    will make content scrollable and overflow-hide will hidden overflow.`}
        </p>
        <div class="max-w-sm p-5 shadow rounded m-auto"></div>
        <div class="max-w-sm max-h-sm shadow rounded p-1 mt-1 scroll m-auto">
          <div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
              facere ipsum eveniet suscipit porro pariatur esse ullam reiciendis
              temporibus optio fuga in, aspernatur placeat dolores dignissimos
              quos, rerum provident voluptatibus!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
              facere ipsum eveniet suscipit porro pariatur esse ullam reiciendis
              temporibus optio fuga in, aspernatur placeat dolores dignissimos
              quos, rerum provident voluptatibus!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
              facere ipsum eveniet suscipit porro pariatur esse ullam reiciendis
              temporibus optio fuga in, aspernatur placeat dolores dignissimos
              quos, rerum provident voluptatibus!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
              facere ipsum eveniet suscipit porro pariatur esse ullam reiciendis
              temporibus optio fuga in, aspernatur placeat dolores dignissimos
              quos, rerum provident voluptatibus!
            </p>
          </div>
        </div>
        <pre class="html rounded mb-5">
          {`<div class="max-w-sm"><div>
<div class="max-h-sm"><div>`}
        </pre>
        <p>
          Extra available with "fit-cover" and "fit-contain" like object-fit in
          CSS
        </p>
      </div>
    );
  },
  position: function Position() {
    return (
      <div class="content">
        <h2 id="position">Position</h2>
        <p>
          We have some position class the class avialable is absolute, fixed,
          relative and sticky.
        </p>
        <p>{`And on "fixed" and "absolute" can add top, right, bottom, and left class for set position (
            top-{0-100} ).`}</p>
        <div class="m-auto rounded shadow p-1 max-w-sm">
          <div class="w-auto h-40 relative">
            <div class="absolute w-auto h-auto top-0 left-0 right-0 bottom-0 ">
              <img
                class="w-auto h-auto fit-cover"
                src="https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTV8fGNhbWVyYXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
            <img
              class="absolute bottom-5 left-5 w-16 h-16 circle fit-cover"
              src="https://images.unsplash.com/photo-1611769864329-ef8d67d6cf78?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              alt=""
            />
          </div>
        </div>
        <pre class="html rounded">
          {`<div class="m-auto rounded shadow p-1 max-w-sm">
  <div class="w-auto h-40 relative">
    <div class="absolute w-auto h-auto top-0 left-0 right-0 bottom-0">
      <img class="w-auto h-auto fit-cover" src="/"alt="" />
    </div>
    <img class="absolute bottom-5 left-5 w-16 h-16 circle fit-cover" src="/"alt=""/>
  </div>
</div>`}
        </pre>
      </div>
    );
  },
  layout: function Layout() {
    return (
      <div class="content">
        <h2 id="layout">Row</h2>
        <p>
          {`Use row for trigger flex style then use col as child for grid system col-{1-12} for sizing`}
          <br />
          {`If col-{number} summary with other in parent row are over 12 it will move to next line.`}{" "}
          <br />
          Element in row will have 100% width if not sizing or wrap with col;{" "}
          <br />
          {`col-{breakpoint}-{1-2} for specify when will stop flexing available at sm , m ,l ,xl ,xxl`}
          <br />
        </p>
        <div class="row ">
          <div class="col col-test bd-gray">col</div>
          <div class="col col-test bd-gray">col</div>
          <div class="col col-test bd-gray">col</div>
        </div>
        <pre class="html rounded mb-5">
          {`<div class="row">
  <div class="col">col</div>
  <div class="col">col</div>
  <div class="col">col</div>
</div>
`}
        </pre>
        <h2>Flex</h2>
        <p>
          If you just need inline display use flex instead and still can use col
          for sizing
        </p>
        <h2>Vertical align</h2>
        <div class="row  align-items-center bg-light" style={{height: "200px"}}>
          <div class="col bg-white col-test bd-gray">col</div>
          <div class="col bg-white col-test bd-gray">col</div>
          <div class="col bg-white col-test bd-gray">col</div>
        </div>
        <pre class="html rounded mb-5">
          {`<div class="row align-items-center">
  <div class="col"> col </div>
  <div class="col"> col </div>
  <div class="col"> col </div>
</div>`}
        </pre>
        <h2>Horizontal align</h2>
        <p>
          {`Use justify-content-{position} on row`}
          <br />
          Available position: start, center, end, around, even and between.
        </p>
        <div class="bg-light p-1" style={{width: "100%"}}>
          <div class="row  pb-1 justify-content-center">
            <div class="col-3 bg-white col-test bd-gray">col-3</div>
            <div class="col-3 bg-white col-test bd-gray">col-3</div>
            <div class="col-3 bg-white col-test bd-gray">col-3</div>
          </div>
          <div class="row  pb-1 justify-content-start">
            <div class="col-3 bg-white col-test bd-gray">col-3</div>
            <div class="col-3 bg-white col-test bd-gray">col-3</div>
            <div class="col-3 bg-white col-test bd-gray">col-3</div>
          </div>
          <div class="row  justify-content-end">
            <div class="col-3 bg-white col-test bd-gray">col-3</div>
            <div class="col-3 bg-white col-test bd-gray">col-3</div>
            <div class="col-3 bg-white col-test bd-gray">col-3</div>
          </div>
        </div>
        <pre class="html rounded mb-5">
          {`<div class="row justify-content-center">
  <div class="col-3"> col </div>
  <div class="col-3"> col </div>
  <div class="col-3"> col </div>
</div>`}
        </pre>
      </div>
    );
  },
};
export default Sections;
