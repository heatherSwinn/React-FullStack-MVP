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

//user info
app.get('/api/userinfo', async (req, res) => {
  try {
    const query = `
    SELECT player_id, username, lives, currentscore
    FROM player
    `;

    const result = await client.query(query);
    res.json(result.rows);
  } catch(error) {
    console.error('Error executing query', error);
    res.status(500).send('Internal Server Error');
  }
})

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

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});