import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ExpenseService } from '../../app/expense.service';


@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  categories;
  expense;
  constructor(	public navCtrl: NavController, 
  				public navParams: NavParams,
  				private expenseService: ExpenseService
  				) {
  	
  				this.categories = expenseService.categories;
  				this.expense=navParams.get('expense');
 			 }

  

}
