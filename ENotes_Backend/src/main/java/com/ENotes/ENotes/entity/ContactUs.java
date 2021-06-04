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
@Table(name="contactUs")
public class ContactUs {

		@Id
		@GeneratedValue
		private int Id;
		private String name;
		private String email;
		private String phone;
		private String message;
		
		@CreationTimestamp
		@Temporal(TemporalType.TIMESTAMP)
		private Date date;

		public ContactUs() {
			super();
			// TODO Auto-generated constructor stub
		}

		public ContactUs(int id, String name, String email, String phone, String message, Date date) {
			super();
			Id = id;
			this.name = name;
			this.email = email;
			this.phone = phone;
			this.message = message;
			this.date = date;
		}

		public int getId() {
			return Id;
		}

		public void setId(int id) {
			Id = id;
		}

		public String getName() {
			return name;
		}

		public void setName(String name) {
			this.name = name;
		}

		public String getEmail() {
			return email;
		}

		public void setEmail(String email) {
			this.email = email;
		}

		public String getPhone() {
			return phone;
		}

		public void setPhone(String phone) {
			this.phone = phone;
		}

		public String getMessage() {
			return message;
		}

		public void setMessage(String message) {
			this.message = message;
		}

		public Date getDate() {
			return date;
		}

		public void setDate(Date date) {
			this.date = date;
		}
		
}
