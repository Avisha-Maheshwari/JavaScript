
const getdata = async () ⇒ {

try {
    
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    datas= await response.json();   //data is in object format=> json format 
    console.log(datas); 
    } 
catch(error) {  
    console.log(error);
    }
    
};
    
const main =async()=> { 
    await getdata();
};
main();