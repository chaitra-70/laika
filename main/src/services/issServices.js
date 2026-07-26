const BASE_URL = "https://api.wheretheiss.at/v1/satellites/25544";

export async function getISSLocation() {
    try {
        const response = await fetch(BASE_URL);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}