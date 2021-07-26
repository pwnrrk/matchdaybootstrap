function testValid(ev) {
  if (ev.target.value == "Hello") {
      ev.target.classList.remove('invalid')
      ev.target.classList.add('valid')
  } else {
      ev.target.classList.remove('valid')
      ev.target.classList.add('invalid')
  }
}
const Sections = {
  installation: () => (
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
  ),
  text: () => (
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
  ),
  sizing: () => (
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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab facere
            ipsum eveniet suscipit porro pariatur esse ullam reiciendis
            temporibus optio fuga in, aspernatur placeat dolores dignissimos
            quos, rerum provident voluptatibus!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab facere
            ipsum eveniet suscipit porro pariatur esse ullam reiciendis
            temporibus optio fuga in, aspernatur placeat dolores dignissimos
            quos, rerum provident voluptatibus!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab facere
            ipsum eveniet suscipit porro pariatur esse ullam reiciendis
            temporibus optio fuga in, aspernatur placeat dolores dignissimos
            quos, rerum provident voluptatibus!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab facere
            ipsum eveniet suscipit porro pariatur esse ullam reiciendis
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
  ),
  position: () => (
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
  ),
  layout: () => (
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
      <div class="row  align-items-center bg-light" style={{ height: "200px" }}>
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
      <div class="bg-light p-1" style={{ width: "100%" }}>
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
  ),
  responsive: () => (
    <div class="content">
      <h2 id="responsive">Responsive</h2>
      <p>
        You can add breakpoint in front of class (Not work with Row and
        Components) to style it on specify viewport.
      </p>
      <p>Try resize window to see difference.</p>
      <div class="md-flex md-justify-content-center">
        <div class="md-m-1 mb-1 shadow overflow-hide md-p-1 max-w-sm rounded flex md-flex-column md-align-items-center md-justify-content-center">
          <img
            class="md-w-40 md-h-40 w-32 h-52 fit-cover md-circle"
            src="https://images.unsplash.com/photo-1602423597260-6e754437411a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            alt=""
          />
          <div class="md-text-center col ml-1 md-ml-0">
            <h3 class="font-600">Smiling</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div class="md-m-1 mb-1 shadow overflow-hide md-p-1 max-w-sm rounded flex md-flex-column md-align-items-center md-justify-content-center">
          <img
            class="md-w-40 md-h-40 w-32 h-52 fit-cover md-circle"
            src="https://images.unsplash.com/photo-1604684330644-25c4d8142c01?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=625&q=80"
            alt=""
          />
          <div class="md-text-center col ml-1 md-ml-0">
            <h3 class="font-600">Every One Is Beautiful</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <pre class="html rounded mb-5">
        {`<div class="md-flex md-justify-content-center">
    <div class="md-m-1 mb-1 shadow overflow-hide md-p-1 max-w-sm rounded flex md-flex-column md-align-items-center md-justify-content-center">
        <img class="md-w-40 md-h-40 w-32 h-52 fit-cover md-circle" src="https://images.unsplash.com/photo-1602423597260-6e754437411a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80" alt="">
        <div class="md-text-center col ml-1 md-ml-0">
            <h3 class="font-600">Smiling/h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit./p>
        </div>
    </div>
    <div class="md-m-1 mb-1 shadow overflow-hide md-p-1 max-w-sm rounded flex md-flex-column md-align-items-center md-justify-content-center">
        <img class="md-w-40 md-h-40 w-32 h-52 fit-cover md-circle" src="https://images.unsplash.com/photo-1604684330644-25c4d8142c01?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=625&amp;q=80" alt="">
        <div class="md-text-center col ml-1 md-ml-0">
            <h3 class="font-600">Every One Is Beautiful/h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit./p>
        </div>
    </div>
</div>
`}
      </pre>
    </div>
  ),
  background: () => (
    <div class="content">
      <h2 id="background">Background</h2>
      <p>{`bg-{color}`}</p>
      <div class="row justify-content-center">
        <div class="bg-primary bg-test text-white m-1">bg-primary</div>
        <div class="bg-secondary bg-test text-white m-1">bg-secondary</div>
        <div class="bg-dark bg-test text-white m-1">bg-dark</div>
      </div>
      <pre class="html rounded mb-5">{`<div class="bg-primary"></div>`}</pre>
    </div>
  ),
  margin: () => (
    <div class="content">
      <h2 id="margin">Margin</h2>
      <p>
        {`Use m-{1-5}`}
        <br />
        {`Use m{direction}-{1-5} for spacify direction , available t = top ,r = right ,b = bottom ,l = left .
                    `}
        <br />
        Use nm or m-0 for remove margin.
      </p>
      <div class="row  justify-content-center">
        <div class="bg-secondary bg-test m-1 text-light">m-1</div>
      </div>
      <pre class="html rounded mb-5">
        {`<div class="m-3"></div>
<div class="mt-3"></div>`}
      </pre>
    </div>
  ),
  padding: () => (
    <div class="content">
      <h2 id="padding">Padding</h2>
      <p>
        {`Use p-{1-5}`}
        <br />
        {`Use p{direction}-{1-5} for spacify direction , available t = top ,r = right ,b = bottom ,l = left .
                    `}
        <br />
        Use np or p-0 for remove padding.
      </p>
      <div class="row  justify-content-center">
        <div class="bg-secondary bg-test m-1 p-1 text-light">
          <div class="w-auto h-auto bg-light"></div>
        </div>
      </div>

      <pre class="html rounded mb-5">
        {`<div class="p-3"></div>
<div class="pr-3"></div>`}
      </pre>
    </div>
  ),
  border: () => (
    <div class="content">
      <h2 id="border">Border</h2>
      <p>Available as below.</p>
      <div class="row  justify-content-center">
        <div class="bg-secondary bg-test m-1 rounded text-light">rounded</div>
        <div class="bg-secondary bg-test m-1 rounded-tl text-light">
          rounded-tl
        </div>
        <div class="bg-secondary bg-test m-1 rounded-tr text-light">
          rounded-tr
        </div>
        <div class="bg-secondary bg-test m-1 rounded-bl text-light">
          rounded-bl
        </div>
        <div class="bg-secondary bg-test m-1 rounded-br text-light">
          rounded-br
        </div>
        <div class="bg-secondary bg-test m-1 circle text-light">circle</div>
      </div>

      <pre class="html rounded mb-5">
        {`<div class="rounded"></div>
<div class="rounded-tr"></div>
<div class="rounded-bl"></div>`}
      </pre>
      <h2>Border Color</h2>
      <p>{`Use bd-{color}`}</p>
      <div class="row  justify-content-center">
        <div class="bg-white bg-test m-1 rounded bd-primary">bd-primary</div>
        <div class="bg-white bg-test m-1 rounded bd-danger">bd-danger</div>
        <div class="bg-white bg-test m-1 rounded bd-warning">bd-warning</div>
      </div>

      <pre class="html rounded mb-5">
        {`<div class="bd-primary"></div>
<div class="bd-danger"></div>
<div class="bd-warning"></div>`}
      </pre>
      <h2>Border width</h2>
      <p>{`Use bd-{width}`}</p>
      <div class="row  justify-content-center">
        <div class="bg-white bg-test m-1 rounded bd-primary bd-1">bd-1</div>
        <div class="bg-white bg-test m-1 rounded bd-primary bd-2">bd-2</div>
        <div class="bg-white bg-test m-1 rounded bd-primary bd-3">bd-3</div>
      </div>

      <pre class="html rounded mb-5">
        {`<div class="bd-1"></div>
<div class="bd-2"></div>
<div class="bd-3"></div>`}
      </pre>
    </div>
  ),
  shadow: () => (
    <div class="content">
      <h2 id="shadow">Shadow</h2>
      <p>{`Use shadow or shadow-{size}`}</p>
      <div class="row justify-content-center">
        <div class="bg-test bg-white shadow-sm rounded m-1">shadow-sm</div>
        <div class="bg-test bg-white shadow rounded m-1">shadow</div>
        <div class="bg-test bg-white shadow-lg rounded m-1">shadow-lg</div>
      </div>
      <pre class="html rounded">
        {`<div class="bg-test bg-white shadow-sm rounded m-1">shadow-sm</div>
<div class="bg-test bg-white shadow rounded m-1">shadow</div>
<div class="bg-test bg-white shadow-lg rounded m-1">shadow-lg</div>
`}
      </pre>
    </div>
  ),
  container: () => (
    <div class="content">
      <h2 id="container">Container</h2>
      <p>
        Container are using for limit width at 1024px and add little space
        between container and child element.
        <br />
        {`You can use container-fulid that will have 100% width.`} <br />
      </p>
      <div class="shadow container">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
          pariatur cumque? Iste doloribus iusto minima dolore, labore nihil
          placeat corporis earum delectus repellendus rerum sequi consequatur
          asperiores neque, officia blanditiis.
        </p>
      </div>
      <pre class="html rounded mb-5">
        {`<div class="container"></div>`}
      </pre>
    </div>
  ),
  button: () => (
    <div class="content">
      <h2 id="button">Button</h2>
      <p>
        {`Use btn to trigger button style and use btn-{color} for coloring. `}
        <br />
        {`Use btn-outline-{color} for outline color style. `}
        <br />
        {`Use btn-{sm,lg} for sizing.`}
        <br />
        btn can use with what ever element up to purposes. <br />
      </p>
      <div class="flex justify-content-center align-items-center">
        <button class="btn btn-sm btn-primary m-1">btn-sm</button>
        <button class="btn btn-primary m-1">btn-primary</button>
        <button class="btn btn-lg btn-primary m-1">btn-lg</button>
        <button class="btn btn-primary m-1" disabled>
          btn-primary disabled
        </button>
        <button class="btn btn-secondary m-1">btn-secondary</button>
        <button class="btn btn-primary-outline m-1">btn-primary-outline</button>
        <button class="btn btn-secondary-outline m-1">
          btn-secondary-outline
        </button>
      </div>
      <pre class="html rounded mb-5">
        {`<button class="btn btn-primary"> Text </button>`}
      </pre>
    </div>
  ),
  form: () => (
    <div class="content">
      <h2 id="form">Form</h2>
      <p>
        Cover form item with form-group will add space at top and bottom
        checkbox and radio will display inline when in it.
        <br />
      </p>
      <div class="container">
        <form action="" method="GET" class="form">
          <h3>Input</h3>
          <div class="form-group">
            <input
              type="text"
              class="form-item"
              name="text1"
              id="text1"
              placeholder="form-item"
            />
          </div>
          <pre class="html rounded mb-5">
            {`<input type="text" class="form-item" id="text1" placeholder="form-item">`}
          </pre>
          <h3>Input with label</h3>
          <div class="form-group">
            <label for="" class="form-item-label">
              Label
            </label>
            <input
              type="text"
              class="form-item"
              id="text5"
              name="text5"
              placeholder="form-item"
            />
          </div>
          <pre class="html rounded mb-5">
            {`<div class="form-group">
  <label for="" class="form-item-label"> Label <label>
  <input type="text" class="form-item" id="text1" placeholder="form-item">
</div>`}
          </pre>
          <h3>Select</h3>
          <div class="form-group">
            <select name="select" id="" class="form-select">
              <option selected>Open this select menu</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>
          </div>
          <pre class="html rounded mb-5">
            {`<select name="" id="" class="form-select">
  <option selected>Open this select menu</option>
  <option value="">Option 1</option>
  <option value="">Option 2</option>
  <option value="">Option 3</option>
</select>
`}
          </pre>
          <h3>Checkbox</h3>
          <div class="form-group">
            <span class="form-check">
              <input type="checkbox" name="check1" id="" /> Check box
            </span>
            <span class="form-check disabled">
              <input type="checkbox" name="check2" id="" /> Check box disabled
            </span>
          </div>
          <pre class="html rounded mb-5">
            {`<span class="form-check"><input type="checkbox" name="" id=""> Check box</span>`}
          </pre>
          <h3>Radio</h3>
          <div class="form-group">
            <span class="form-radio">
              <input type="radio" name="radio" id="" />
              Radio 1
            </span>
            <span class="form-radio">
              <input type="radio" name="radio" id="" />
              Radio 2
            </span>
            <span class="form-radio disabled">
              <input type="radio" name="radio" id="" />
              Radio 2
            </span>
          </div>
          <pre class="html rounded mb-5">
            {`<span class="form-radio"><input type="radio" name="" id=""> Radio</span>`}
          </pre>
          <h3>Textarea</h3>
          <div class="form-group">
            <textarea
              name="textarea"
              id=""
              cols="30"
              rows="10"
              class="form-textarea"
              placeholder="form-textarea"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              nobis explicabo neque obcaecati, eum mollitia delectus laboriosam
              sed incidunt, eius dolore voluptatem cum. Velit id corporis
              eligendi ipsam cumque commodi?
            </textarea>
          </div>
          <pre class="html rounded mb-5">
            {`<textarea name="" id="" cols="30" rows="10" class="form-textarea"placeholder="form-textarea"></textarea>`}
          </pre>
          <div class="form-group">
            <input
              type="submit"
              class="btn btn-primary mr-1 mb-1"
              value="Submit"
            />
            <input type="reset" class="btn btn-secondary" value="Reset" />
          </div>
          <pre class="html rounded mb-5">
            {`<div class="form-group">
  <input type="submit" class="btn btn-primary mr-1" value="Submit">
  <input type="reset" class="btn btn-secondary" value="Reset">
</div>
`}
          </pre>
          <h2>Form validate</h2>
          Validate will trigger when input and page loaded. <br />
          You need custom Javascript function to add valid and invalid class to
          input. <br />
          <div class="form-group">
            <label for="" class="form-item-label">
              Correct message is "Hello"
            </label>
            <input
              type="text"
              class="form-item"
              placeholder="Type something"
              onInput={testValid}
            />
            <small class="form-item-invalid-message">Nah not that!</small>
            <small class="form-item-valid-message">Yo you're cool!</small>
          </div>
          <h4>HTML</h4>
          <pre class="html rounded">
            {`<div class="form-group">
  <label for="" class="form-item-label">Correct message is "Hello"</label>
  <input type="text" class="form-item" placeholder="Type something" oninput="testValid(event)">
  <small class="form-item-invalid-message">Nah not that!</small>
  <small class="form-item-valid-message">Yo you're cool!</small>
</div>
`}
          </pre>
          <h4>Javascript sample</h4>
          <pre class="javascript rounded">
            {`//Don't forget to  clear invalid/valid
function testValid(ev /* event */ ){
  if (ev.target.value == "Hello") {
    ev.target.classList.remove('invalid')
    ev.target.classList.add('valid')
  } else {
    ev.target.classList.remove('valid')
    ev.target.classList.add('invalid')
  }
}
`}
          </pre>
        </form>
      </div>
    </div>
  ),
  navbar: () => (
    <div class="content">
      <h2 id="navbar">Navbar</h2>
      <div class="container">
        <nav class="navbar bg-primary navbar-dark">
          <a href="#" class="navbar-brand">
            Navbar
          </a>
          <button class="navbar-toggler" data-target="#navbar-col">
            &plus;
          </button>
          <div class="navbar-collapse" id="navbar-col1">
            <ul>
              <li>
                <a href="#" class="navbar-link active">
                  Home
                </a>
              </li>
              <li>
                <a href="#" class="navbar-link">
                  Link1
                </a>
              </li>
              <li>
                <a href="#" class="navbar-link">
                  Link2
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div class="container">
        <nav class="navbar  navbar-light">
          <a href="#" class="navbar-brand">
            Navbar
          </a>
          <button class="navbar-toggler" data-target="#navbar-col2">
            &plus;
          </button>
          <div class="navbar-collapse" id="navbar-col2">
            <ul>
              <li>
                <a class="navbar-link active">Home</a>
              </li>
              <li>
                <a class="navbar-link">Link1</a>
              </li>
              <li>
                <a class="navbar-link">Link2</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div class="container">
        <pre class="html rounded mb-5">
          {`<nav class="navbar  navbar-light">
  <a href="#" class="navbar-brand">Navbar</a>
  <button class="navbar-toggler" data-target="#navbar-col">></button>
  <div class="navbar-collapse" id="navbar-col">
    <ul>
      <li><a href="#" class="navbar-link active">Home</a></li>
      <li><a href="#" class="navbar-link">Link1</a></li>
      <li><a href="#" class="navbar-link">Link2</a></li>
    </ul>
  </div>
</nav>
`}
        </pre>
      </div>
    </div>
  ),
  modal: () => (
    <div class="content">
      <h2 id="modal">Modal</h2>
      <p>
        Modal is available 3 size modal-sm, modal, modal-lg. <br />
        Modal has 3 animation fade bonce and slide. <br />
        Modal with static will not close when click outside modal or press ESC{" "}
        <br />
        Modal available with tl tr bl br for position.
      </p>
      <h3>Trigger</h3>
      <button
        type="button"
        class="btn btn-primary"
        data-toggle="modal"
        data-target="#modelId"
      >
        Launch
      </button>
      <pre class="html rounded">
        {`<button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#modelId">Launch</button>`}
      </pre>
      <h3>Body</h3>
      <pre class="html rounded">
        {`<div class="modal slide" id="modelId" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <div class="modal-title">Modal title</div>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
          </button>
        </div>
      <div class="modal-body">
          Body
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save</button>
      </div>
    </div>
  </div>
</div>`}
      </pre>
      <div
        class="modal bonce static"
        id="modelId"
        tabindex="-1"
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <div class="modal-title">Modal title</div>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati maxime corporis est dolorem laudantium voluptatum
                dicta non earum sint beatae et aut dolores molestias neque vel,
                eius numquam explicabo odit!
              </p>
              <form action="" class="form">
                <div class="form-group">
                  <label for="" class="form-item-label">
                    Email
                  </label>
                  <input
                    type="email"
                    name=""
                    placeholder="Email"
                    id=""
                    class="form-item"
                  />
                </div>
                <div class="form-group">
                  <label for="" class="form-item-label">
                    Password
                  </label>
                  <input
                    type="password"
                    name=""
                    placeholder="Password"
                    id=""
                    class="form-item"
                  />
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  popup: () => (
    <div class="content">
      <h2 id="popup">Popup</h2>
      <p>Add "stack" to class popup will not close other popup.</p>
      <div class="row">
        <div class="m-1">
          <button
            class="btn btn-primary"
            data-toggle="popup"
            data-target="#popup1"
          >
            Default
          </button>
          <div class="popup point" id="popup1">
            <p>Popup Default</p>
          </div>
        </div>
        <div class="m-1">
          <button
            class="btn btn-primary"
            data-toggle="popup"
            data-target="#popup2"
          >
            Dash right
          </button>
          <div class="popup dash-right point" id="popup2">
            <p>Popup dash right</p>
          </div>
        </div>
      </div>
      <pre class="html rounded">
        {`<button class="btn btn-primary" data-toggle="popup" data-target="#popup1">Popup</button>
<div class="popup point-top" id="popup1"></div>`}
      </pre>
    </div>
  ),
  dropdown: () => (
    <div class="content">
      <h2 id="dropdown">Dropdowns</h2>
      <p>add dropdown-link class to child will automatically close popup</p>
      <div class="m-1">
        <button
          class="btn btn-primary"
          data-toggle="dropdown"
          data-target="#dropdown1"
        >
          Toggle
        </button>
        <div class="dropdown" id="dropdown1">
          <ul>
            <li>
              <a class="dropdown-link">
                <div>dropdown-link 1</div>
              </a>
            </li>
            <li>
              <a class="dropdown-link">
                <div>dropdown-link 2</div>
              </a>
            </li>
            <li>
              <a>
                <div>{`<a> tag Non dropdown-link`}</div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <pre class="html rounded">
        {`<button class="btn btn-primary" data-toggle="dropdown" data-target="#dropdown1">Toggle</button>
<div class="dropdown" id="dropdown1">
  <ul>
    <li><a href="#" class="dropdown-link"><div>Item 1</div></a></li>
    <li><a href="#" class="dropdown-link"><div>Item 2</div></a></li>
    <li><a href="#"><div>Item 3</div></a></li>
  </ul>
</div>
`}
      </pre>
    </div>
  ),
  collapse: () => (
    <div class="content">
      <h2 id="collapse">Collapes</h2>
      <a data-toggle="collapse" data-target="#collapse">
        Open
      </a>
      <div class="collapse" id="collapse">
        <p style="max-width: 300px;">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quod
          magnam soluta et blanditiis doloribus. Facilis, libero repellendus
          reiciendis ab perferendis expedita cumque quod temporibus accusamus
          ipsam. Corporis, iusto nostrum!
        </p>
      </div>
      <pre class="html rounded">
        {`<a data-toggle="collapse" data-target="#collapse">Open</a>
<div class="collapse" id="collapse"></div>
`}
      </pre>
    </div>
  ),
  customize: () => (
    <div class="content">
      <h2 id="customize">Customizing</h2>
      <p>
        Use scss for customizing by import minBootstrap.scss then you can
        overide some of variables and class style.
      </p>
      <h2>Basic Variables</h2>
      <table class="container-fulid shadow-sm variables-table">
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Unit</th>
        </tr>
        <tr>
          <td class="text-center">$spacer</td>
          <td>Default spacer amount</td>
          <td class="text-center">rem</td>
        </tr>
        <tr>
          <td class="text-center">$rounded</td>
          <td>Default border rounded amount</td>
          <td class="text-center">rem</td>
        </tr>
        <tr>
          <td class="text-center">$radius</td>
          <td>Default border radius</td>
          <td class="text-center">em</td>
        </tr>
        <tr>
          <td class="text-center">$font-size</td>
          <td>Default font-size affect on many element</td>
          <td class="text-center">em</td>
        </tr>
        <tr>
          <td class="text-center">$font-family</td>
          <td>Default web font-family</td>
          <td class="text-center">Font family</td>
        </tr>
      </table>
    </div>
  ),
  bug: () => (
    <div class="content">
      <h2 id="bug">Bugs</h2>
      <ul>
        <li>
          Report bugs{" "}
          <a href="https://github.com/pwnrrk/minbootstrap/issues">here</a>
        </li>
      </ul>
    </div>
  )
};
export default Sections;
