
//request
export interface CalcRequest {
  num1: number;
  num2: number;
  operator: string;
}

//response
export interface CalcResponse {
  result?: number; // optional value (?)
  error?: string;  // only shows if something goes wrong
}

const API_URL = "http://localhost:8080/calculate";

/**
* Sends the POST request to the backend. 
* We use 'async/await' to handle asynchronous operations.
 */
export const calculate = async (data: CalcRequest): Promise<CalcResponse> => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    // .json() will provide the response body, containing either the result or the error.
    return await response.json();
    
  } catch (err) {
    //could not connect to the server
    console.error("Connection error:", err);
    throw new Error("Could not connect to server");
  }
};