const jsDiv = document.getElementById("plaindiv");

const reactDiv = document.getElementById("reactdiv");

const renderThis = ()=> {
    let str = `<div class="bg-warning">
        JS Div
        <input />
        <p> ${new Date()} </p>
    </div>`;
    jsDiv.innerHTML = str;

    let DivToRender = React.createElement(
             "div",null,React.createElement("input"),
             React.createElement("p",null,new Date().toString())
          );

    ReactDOM.render(DivToRender,reactDiv);
}

setInterval(renderThis,1000);


