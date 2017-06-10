import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AddItemPage } from '../add-item/add-item';
import { ItemDetailPage } from '../item-detail/item-detail';
import { DataProvider } from '../../providers/data/data';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	public items = [];
	constructor(public navCtrl: NavController, public modelCtrl: ModalController, public dataService: DataProvider) {
		
		this.dataService.getData().then((iontodo) => {
			console.log('getting data');
			if(iontodo){
				this.items = JSON.parse(iontodo); 
				console.log('dataservice');
			}

		});
	}

	ionViewDidLoad() {

		this.items = [
		{title: 'hi1', description: 'test1'},
		{title: 'hi2', description: 'test2'},
		{title: 'hi3', description: 'test3'}
		];

	}

	addItem(){
		let addModal =  this.modelCtrl.create(AddItemPage);	
		addModal.onDidDismiss((item) => {
			if(item){
				this.saveItem1(item);
			}

		});
		addModal.present();
	}

	saveItem1(item) {
		this.items.push(item);
		this.dataService.save(this.items);
	}

	viewItem(item){
		this.navCtrl.push(ItemDetailPage, {
			item: item
		});
	}

	deleteItem(item){
		let index = this.items.indexOf(item);

		if(index > -1){
			this.items.splice(index, 1);
		}
	}
}
