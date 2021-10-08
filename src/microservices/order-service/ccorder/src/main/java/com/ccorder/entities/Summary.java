package com.ccorder.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

@Entity
public class Summary {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) // auto increment
	private int id;
	

	@OneToMany(cascade=CascadeType.ALL)
	@JoinColumn(name="item_id", referencedColumnName="id")
	private List<Item> order;
	private String cardNum;
	private String exp;
	private String cvv;
	private String name;
	private String postal;
	private String method;
	private String email;
	private int fee;
	private String confirmation;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getCardNum() {
		return cardNum;
	}

	public void setCardNum(String cardNum) {
		this.cardNum = cardNum;
	}

	public String getExp() {
		return exp;
	}

	public void setExp(String exp) {
		this.exp = exp;
	}

	public String getCvv() {
		return cvv;
	}

	public void setCvv(String cvv) {
		this.cvv = cvv;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPostal() {
		return postal;
	}

	public void setPostal(String postal) {
		this.postal = postal;
	}

	public String getMethod() {
		return method;
	}

	public void setMethod(String method) {
		this.method = method;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public List<Item> getItem() {
		return order;
	}

	public void setItem(List<Item> item) {
		this.order = item;
	}

	public int getFee() {
		return fee;
	}

	public void setFee(int fee) {
		this.fee = fee;
	}
	
	public String getConfirmation() {
		return confirmation;
	}

	public void setConfirmation(String confirmation) {
		this.confirmation = confirmation;
	}
	
	@Override
	public String toString() {
		return "Summary [id=" + id + ", order=" + order + ", cardNum=" + cardNum + ", exp=" + exp + ", cvv=" + cvv
				+ ", name=" + name + ", postal=" + postal + ", method=" + method + ", email=" + email + ", fee=" + fee
				+ ", confirmation=" + confirmation + "]";
	}
}
