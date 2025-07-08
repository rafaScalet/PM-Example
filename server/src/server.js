const express = require("express");
const app = express();
const port = process.env.SERVER_PORT || 1234;

app.get("/", (_, res) => {
	res.send({ hello: "world" });
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
