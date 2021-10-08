package com.ccorder.entities;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Item {
	@Id
	private int id;
	private String name;
	private int amount;
	@ManyToOne(cascade = CascadeType.PERSIST)
	private Summary summary;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getAmount() {
		return amount;
	}

	public void setAmount(int amount) {
		this.amount = amount;
	}

	@Override
	public String toString() {
		return "Item [id=" + id + ", name=" + name + ", amount=" + amount + "]";
	}
	

}
