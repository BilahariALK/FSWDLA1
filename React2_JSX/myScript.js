/*
    since using JSX, we need to add babel compilet in html script section 
    and also type="text/babel"
*/
const MyButton = <button class="bg-warning"> MyButton </button>;
const MyList = <ul class="bg-secondary">
                    <li>ONE</li>
                    <li>TWO</li>
                    <li>THREE</li>
                </ul>;

ReactDOM.render([MyButton,MyList],document.getElementById("jsxdiv"));