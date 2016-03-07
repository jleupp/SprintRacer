package data;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.CriteriaQuery;

import org.springframework.transaction.annotation.Transactional;

import entities.HighScore;

@Transactional
public class SprintRacerRESTDAO implements SprintRacerDAO {
	@PersistenceContext
	private EntityManager em;
	
	public List<HighScore> getHighScores() {
		CriteriaQuery<HighScore> cq = em.getCriteriaBuilder().createQuery(HighScore.class);
	    cq.select(cq.from(HighScore.class));
	    List<HighScore> highScores = em.createQuery(cq).getResultList();
		return highScores;
	}
	
	public void setHighScore(HighScore hs) {
		try{
			em.persist(hs);
		} catch(Error e) {
			System.out.println("CAUGHT ERROR IN PERSISTING HIGH SCORE");
		}
		System.out.println("PERSISTING HIGH SCORE");
	}
}
