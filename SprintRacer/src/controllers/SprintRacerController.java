package controllers;

import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
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
	public Object setSessionAttribute() {
		Object session = new Object();
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
}
