import setText , {appendText} from './results.mjs';

export async function get(){
   
 
    
}

export async function getCatch(){
  
}

export async function chain(){
   

}

export async function concurrent(){
    const orderStatus = axios.get("http://localhost:3000/orderStatuses");//takes 1.5 seconds
    const orders = axios.get("http://localhost:3000/orders");

    setText("");

    const {data:statuses} = await orderStatus;
    const {data: order} = await orders;

    appendText(JSON.stringify(statuses));
    appendText(JSON.stringify(order[0]));
   }

export async function parallel(){
   
    setText('');
    await Promise.all([
        (async () => {
            const {data} = await axios.get("http://localhost:3000/orderStatuses");
           appendText(JSON.stringify(data));
        }) (),
        (async () => {
            const {data} =  await axios.get("http://localhost:3000/orders");
            appendText(JSON.stringify(data));
        }) ()
    ]);
}