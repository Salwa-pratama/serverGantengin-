import app from "./server.js";

const PORT = 8080;
const IPADDRESS = "10.159.38.155";

app.listen(PORT, IPADDRESS, () => {
  console.log(`Server Running on http://${IPADDRESS}:${PORT}`);
});
