const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();
const PORT = process.env.PORT || 3000;

// Proxy Middleware
app.use(
  "/proxy",
  createProxyMiddleware({
    target: "https://www.example.com", // Change this to the site you want to access
    changeOrigin: true,
    secure: false,
    pathRewrite: { "^/proxy": "" },
  })
);

app.get("/", (req, res) => {
  res.send("Proxy Server is running! Use /proxy?url=YOUR_URL");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
