package controllers;

import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;

import data.SprintRacerDAO;
import entities.HighScore;

@RestController
@SessionAttributes("session")
public class SprintRacerController {

	@Autowired
	private SprintRacerDAO sprintDAO;
	
	@ModelAttribute("session")
	public HighScore setSessionAttribute() {
		HighScore session = new HighScore();
		return session;
	}
	
	@ResponseBody
	@RequestMapping(path="ping")
	public String ping() {
		return "Pong";
	}
	
	@ResponseBody
	@RequestMapping(path="highscores")
	public List<HighScore> getHighScores() {
		List<HighScore> highScores = sprintDAO.getHighScores();
		Collections.sort(highScores);
		return highScores;
	}
	
	@ResponseBody
	@RequestMapping(path="persistscore", method = RequestMethod.POST)
	public void addHighScore(@ModelAttribute("session") HighScore hs, @RequestBody HighScore userHS) {
		hs.setInitials(userHS.getInitials());
		hs.setScore(userHS.getScore());
		sprintDAO.setHighScore(hs);
	}
}
