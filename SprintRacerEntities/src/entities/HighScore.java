package entities;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="highscore")
public class HighScore implements Comparable<HighScore> {
	@Id
	private long id;
	
	private String initials;
	
	private Long score;

	public long getId() {
		return id;
	}

	public String getInitials() {
		return initials;
	}

	public long getScore() {
		return score;
	}

	public void setInitials(String initials) {
		this.initials = initials;
	}

	public void setScore(long score) {
		this.score = score;
	}

	@Override
	public int compareTo(HighScore hs) {
		return (-1*(score.compareTo(hs.getScore())));
	}
	
	
	
}
