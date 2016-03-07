package data;

import java.util.List;

import entities.HighScore;

public interface SprintRacerDAO {
	public List<HighScore> getHighScores();
	public void setHighScore(HighScore hs);
}
