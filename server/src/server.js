const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const users = require("./models/user");
const app = express();
const port = process.env.SERVER_PORT || 1234;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (_, res) => {
	res.send({ hello: "world" });
});

app.get("/users", async (_, res) => {
	try {
		const result = await users.findAll();
		res.json(result);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

app.post("/users", async (req, res) => {
	try {
		const result = await users.create(req.body);
		res.json({ message: "Successfully added user", result });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

app.put("/users/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const [user] = await users.update(req.body, { where: { id } });

		if (user === 0) {
			return res.status(404).json({ message: "User not found" });
		}

		res.json({ message: "User updated successfully" });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
