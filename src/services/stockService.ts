const BASE_URL = "https://openapi.twse.com.tw/v1";

export async function getStockData() {
  try {
    const response = await fetch(`${BASE_URL}/indicesReport/MI_5MINS_HIST`);
    console.log("url string", `${BASE_URL}/indicesReport/MI_5MINS_HIST`)

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data; // TWSE API 回傳 JSON 陣列
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Error fetching stock data:", error.message);
    throw new Error("Failed to fetch stock data");
  }
}
