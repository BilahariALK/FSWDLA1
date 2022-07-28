import setText, {appendText, showWaiting, hideWaiting} from "./results.mjs";

export function get() {
   
}

export function getCatch() {
    
}

export function chain() { //chaining of promises
   
}

export function chainCatch() {
    }

export function final() {
    showWaiting();
    axios.get('http://localhost:3000/orders/1')
    .then( ({data}) => {        
        return axios.get(`http://localhost:3000/addresses/${data.shippingAddress}`);
       // throw new Error(" Error");
    })
    .catch(err => {
        setText(err);
        throw new Error('second error');
    })    
    .then( ({data}) => {
        setText(`city : ${data.my.city}`);
        throw new Error('err');
    })
    .catch(err => setText(err) )
    .finally( () => {
        console.log('hey from finally');
        setTimeout( () => {
            hideWaiting();}, 1500);
            appendText(" --completely done");
        });
      
}