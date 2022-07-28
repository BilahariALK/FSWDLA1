/* 
creating an element/s

render/mount it the DOM tree

*/

const MyButton = React.createElement("button",{className:"bg-primary"},"I am button");
const MyList = React.createElement("ul",{className:"bg-warning"},
                    React.createElement("li",null,"Marvel"),
                    React.createElement("li",null,"Marvel"),
                    React.createElement("li",null,"Marvel"),
        );

//ReactDOM.render(MyButton,document.getElementById("parentNode"));
//ReactDOM.render(MyList,document.getElementById("parentNode"));

ReactDOM.render([MyButton,MyList],document.getElementById("parentNode"));