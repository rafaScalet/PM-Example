const express = require("express");
const user = require("./models/user.js");
const app = express();
const port = process.env.SERVER_PORT || 1234;

app.get("/", (_, res) => {
	res.send({ hello: "world" });
});

app.get("/users", async (_, res) => {
	try {
		const result = await user.findAll();
		res.json(result);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
