import app from "./src/app"; // 載入已組裝好的 Koa 應用

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});