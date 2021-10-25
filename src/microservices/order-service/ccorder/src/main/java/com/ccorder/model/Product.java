package com.ccorder.model;

public class Product {
	private int id;
	private String name;
	private int price;
	private int storage;

	public Product(int id, String name, int price, int storage) {
		this.id = id;
		this.name = name;
		this.price = price;
		this.storage = storage;
	}
	
	public Product() {
		
	}

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

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public int getStorage() {
		return storage;
	}

	public void setStorage(int storage) {
		this.storage = storage;
	}

	@Override
	public String toString() {
		return "Product [id=" + id + ", name=" + name + ", price=" + price + ", storage=" + storage + "]";
	}

}
