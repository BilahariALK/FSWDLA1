let CounterButton = () => {
    //let counterFlag = 0 ;

    const {useState} = React; 
    let [counterFlag, setCounter] = useState(0);

    let onClickHandler = () => {
        counterFlag++;
        setCounter(counterFlag);
        //console.log(counterFlag);
    }
    return(
        //<button onClick={onClickHandler}> {counterFlag} </button><br/>

        <fragment>
            <button onClick={onClickHandler}> Increment </button><br/>
            Count now is : {counterFlag}
        </fragment>
    );
}

ReactDOM.render(<CounterButton />, document.getElementById("mountNode"));

/*let CounterButton = () => {
    const {useState} = React;

   let [cc,setCC]  = useState(0);

    
let onClickHandler = () =>{
    cc++;
    setCC(cc);    
}

 return( 
    <button onClick={onClickHandler} > { cc } </button>
 );
}

ReactDOM.render(<CounterButton/>,document.getElementById('mountNode'));
*/