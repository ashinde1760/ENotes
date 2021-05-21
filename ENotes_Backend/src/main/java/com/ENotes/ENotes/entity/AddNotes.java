package com.ENotes.ENotes.entity;

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import org.hibernate.annotations.CreationTimestamp;

@Entity
@Table(name="notes")
public class AddNotes {
	@Id
	@GeneratedValue
	private int noteId;
	private String title;
	private String content;
	private int uid;
	
	@CreationTimestamp
	@Temporal(TemporalType.TIMESTAMP)
	private Date date;
	
	
	public int getUid() {
		return uid;
	}

	public void setUid(int uid) {
		this.uid = uid;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public AddNotes() {
		super();
	}

	public AddNotes(int noteId, String title, String content,int uid) {
		super();
		this.noteId = noteId;
		this.title = title;
		this.content = content;
		this.uid=uid;
	}


	public int getNoteId() {
		return noteId;
	}

	public void setNoteId(int noteId) {
		this.noteId = noteId;
	}

	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
		
}
