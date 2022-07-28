/*let PropCheck = (props) => {
 return( 
    <div>
        Hello {props.name}!!, <br/>
        You're {props.age} old. <br/>
        Your id is {props.id}. <br/>
        My object values are : <br/>
        obj value 1 is :{props.obj.str1} <br/>
        obj value 2 is : {props.obj.str2} <br/>
        Another Obj values are : <br></br>
        another obj value 1 is {props.anotherObj.str1}<br/>
        another obj value 1 is {props.anotherObj.str2}<br/>
        Arr value is {props.arr[0]}

    </div>);
}*/
/* In functional components props can be named as data, items etc. 
but in class compoenents it is mandatory to use props as props.

because class components are first created, fumctional components came later, 
so in functional components props is suggestable.
*/
/* let id = 50;
let an = {str1:"String 1", str2:"String 2"};
ReactDOM.render(<PropCheck 
    name = "John" 
    age='25' 
    id = {id} 
    obj={{str1:"String 1", str2:"String 2"}}
    anotherObj = {an}
    arr={[1,2,3,4]}
    />,document.getElementById('mountNode'));
*/
// class components

class Employee extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            location : "Delhi"
        };
    }
    changeLoc = () =>
    {
        if(this.state.location != "Bangalore")
            this.setState({location:"Bangalore"});
        else
            this.setState({location:"Delhi"});
    }
    render()
    {
        return (
        <div>
            <h1> Employee ! </h1> 
            Employee Name : {this.props.name}<br/>
            Employee Age : {this.props.age} <br/>
            Employee Location : {this.state.location}<br/>
            <button type = "button" onClick={this.changeLoc}> 
            Click me to change the location </button>
        </div>
        )
    }
}

ReactDOM.render(<Employee name="Zelensky" age='25' location = "Hyderabad"/>, document.getElementById('mountNode'))