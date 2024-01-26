CREATE TABLE player (
  player_id serial PRIMARY KEY,
  username VARCHAR,
  lives INT,
  currentScore INT
);

CREATE TABLE highScore (
  player_id INT REFERENCES player(player_id) ON DELETE CASCADE,
  rank INT,
  score INT
);

INSERT INTO player(username, lives, currentScore) VALUES('heather', 3, 15);
INSERT INTO highScore(player_id, rank, score) VALUES(1, 1, 22);