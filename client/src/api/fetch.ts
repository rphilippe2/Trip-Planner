// Example interface for the API data
interface ApiResponse {
    id: number;
    name: string;
    description: string;
  }
  
  async function fetchData(): Promise<ApiResponse[]> {
    try {
      const response = await fetch(`https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=INSERT-API-KEY-HERE`);
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data: ApiResponse[] = await response.json(); // TypeScript enforces the data type
      console.log(data);
      return data;
      
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      return [];
    }
  }
  
  fetchData();
  