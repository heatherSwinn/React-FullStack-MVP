import express from "express";
import pg from "pg";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

const { PORT, DATABASE_URL } = process.env;

const client = new pg.Client({
  connectionString: DATABASE_URL,
});

await client.connect();

const app = express();

app.use(express.json());

//highscore chart
app.get('/api/highscores', async (req, res) => {
  try {
    // Use a JOIN query to retrieve high scores with usernames
    const query = `
    SELECT player.username, highScore.score, highScore.id
    FROM highScore
    JOIN player ON highScore.player_id = player.player_id
    `;
    
    const result = await client.query(query);
    res.json(result.rows);
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).send('Internal Server Error');
  }
});

//current user info
app.get(`/api/userinfo/:username`, async (req, res) => {
  try {
    const { username } = req.params;
    const query = `
    SELECT player_id, username, lives, currentscore
    FROM player
    WHERE username = $1
    `;

    const result = await client.query(query, [username]);
    res.json(result.rows);
  } catch(error) {
    console.error('Error executing query', error);
    res.status(500).send('Internal Server Error');
  }
})

//post to highscores after lives are out
app.post('/highscores', async (req, res) => {
  try {
    const { username, score } = req.body;

    // Use a JOIN query to insert a high score
    const query = `
      INSERT INTO highScore (player_id, score)
      SELECT player.player_id, $1
      FROM player
      WHERE player.username = $2
    `;

    const result = await client.query(query, [score, username]);
    res.json({ success: true });
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).send('Internal Server Error');
  }
});

//start a new game and post current player information
app.post("/api/start-game", async (req, res) => {
  try {
    const { username } = req.body;
    const query = 
      `INSERT INTO player (username, lives, currentScore) VALUES ($1, $2, $3) RETURNING *`

    //insert a new player into the database with default values
    const result = await client.query(query, [username, 3, 0]);

    const newGame = result.rows[0];
    res.json(newGame);
  } catch (error) {
    console.error("Error starting the game: ", error);
    res.status(500).json({ error: "Internal Server Error "})
  }
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});