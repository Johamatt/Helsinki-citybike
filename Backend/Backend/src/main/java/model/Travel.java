package model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;

@Entity
@Data

public class Travel {
	
	@Id
	@GeneratedValue
	private int id;
	
	private Date departureTime;
	
	private Date returnTime;
	
	private int departureStationId;
	private String departureStationName;
	
	private int returnStationId;
	private String returnStationName;
	
	private int coveredDistance;
	
	private int duration;
	
}
