const API_KEY = "lsM74RgjJ4FQs6YrlrQoC4xbdJ6CKa9vM8K8gDec";

const BASE_URL =
  "https://api.nasa.gov/neo/rest/v1/feed?api_key=lsM74RgjJ4FQs6YrlrQoC4xbdJ6CKa9vM8K8gDec";

export async function getAsteroids() {
    try {
        const response = await fetch(BASE_URL);
        const data = await response.json();
        console.log(data);

        return data;
    } catch (error) {
        console.log(error);
    }
}