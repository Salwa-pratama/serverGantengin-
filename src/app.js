import app from "./server.js";

const PORT = 8080;
const IPADDRESS = "192.168.1.5";

app.listen(PORT, IPADDRESS, () => {
  console.log(`Server Running on http://${IPADDRESS}:${PORT}`);
});
