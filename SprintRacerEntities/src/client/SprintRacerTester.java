package client;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;
import javax.persistence.criteria.CriteriaQuery;

import entities.HighScore;

	
public class SprintRacerTester {
	EntityManagerFactory emf = Persistence.createEntityManagerFactory("SprintPU");
	EntityManager em = emf.createEntityManager();
	public static void main(String[] args) {
		EntityManagerFactory emf = Persistence.createEntityManagerFactory("SprintPU");
		EntityManager em = emf.createEntityManager();
		SprintRacerTester test = new SprintRacerTester();
		
		test.addStuffToDB();
		long hsID = -1;
		
		CriteriaQuery<HighScore> cq = em.getCriteriaBuilder().createQuery(HighScore.class);
		cq.select(cq.from(HighScore.class));
		List<HighScore> hscores = em.createQuery(cq).getResultList();
		for(HighScore hs : hscores) {
			System.out.println("Id: " + hs.getId());
			System.out.println("Initials: " + hs.getInitials());
			System.out.println("Score: " + hs.getScore());
			if(hs.getInitials().equalsIgnoreCase("aaa")) {
				hsID = hs.getId();
				System.out.println("IN IF IN LOOP hsID = " + hsID);
			}
		}
		if( hsID != -1) {			
			test.removeStuffDB(hsID);
		}
	}
	
	public void addStuffToDB() {
		EntityTransaction et = em.getTransaction();
		et.begin();
		HighScore hs = new HighScore();
		hs.setInitials("AAA");
		hs.setScore(500);
		em.persist(hs);
		et.commit();
	}
	
	public void removeStuffDB(long hsID) {
		EntityTransaction et = em.getTransaction();
		et.begin();
		em.remove(em.find(HighScore.class, hsID));
		et.commit();
	}
}
