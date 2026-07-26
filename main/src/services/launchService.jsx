export async function getLaunches() {
    const BASE_URL = "https://ll.thespacedevs.com/2.2.0/launch/upcoming/?limit=10";
    try{
        const response = await fetch(BASE_URL);
        const data = await response.json();
        return data;
    }catch(error){
        console.log(error);
    }
    
}
