package com.ccorder.controllers;

import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.ccorder.entities.Item;
import com.ccorder.entities.Summary;
import com.ccorder.model.Product;

@RestController
@RequestMapping("/order")
public class ccorderRESTController {
	
	final String url = "http://localhost:3000/inventory";
	
	@PostMapping  //bind this method to http post
	public Summary createLocation(@RequestBody Summary summary) {
		System.out.println();
		System.out.println(summary.toString());
		Summary copy = summary;
		List<Item> ordered = summary.getItem();
		
		List<Product> products = getInventory(url, ordered);
		boolean match = compareAndUpdate(products, ordered);
		
		if (match) {
			copy.setConfirmation(generateConfirmation());
		}
		else {
			copy.setItem(ordered);
			copy.setConfirmation("-1");
		}
		
		return copy;
	}
	
	private static int findIndexById(List<Item> items, int id) {
		for (int i = 0; i < items.size(); i++) {
			if (items.get(i).getId() == id) {
				return i;
			}
		}
		return -1;
	}
	
	//check if storages are the same, return false and update items if storages don't match
	private static boolean compareAndUpdate(List<Product> products, List<Item> items) {
		boolean result = true;
		
		int itemMatchCount = 0;
		for (int i = 0; i < products.size(); i++) {
			int index = findIndexById(items, products.get(i).getId());
			if (index >= 0){  //items and products have 1 overlap)
				System.out.println(items.get(index));
				System.out.println(products.get(i));
				if (items.get(index).getAmount() > products.get(i).getStorage()) {
					result = false;
					items.get(index).setAmount(products.get(i).getStorage());
				}
			}
		}
		
		return result;
	}
	
	private static String generateConfirmation() {
		String confirmation = Long.toString(System.currentTimeMillis());
		confirmation += (int)(1000*(Math.random()));
		return confirmation;
	}
	
	private static List<Product> getInventory(String url, List<Item> ordered){
		final RestTemplate restTemplate = new RestTemplate();
		List<Product> result = new ArrayList<>();
		try {
			for (int i = 0; i < ordered.size(); i++) {
				ResponseEntity<Product[]> response = restTemplate.getForEntity(url + "/" + ordered.get(i).getId(), Product[].class);
				System.out.println(response.getBody()[0]);
				result.add(response.getBody()[0]);
			}
		}
		catch(ArrayIndexOutOfBoundsException e) {
			return new ArrayList<Product>();  //return empty list when requesting an un-exist item
		}
		
		
		System.out.println(result);
		return result;
		
	}
}
