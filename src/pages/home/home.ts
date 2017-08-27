import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  expenses = [
    {
      date:'2016-01-01',
      amount: 7.7 ,
      category:'Food',
      description:'Dinner'
    },
    {
      date:'2016-01-01',
      amount: 8.2 ,
      category:'Ticket',
      description:'Train ticket'
    },
    {
      date:'2016-01-01',
      amount: 5 ,
      category:'Clothes',
      description:'T-shirt'
    }
  ];
  constructor(private navCtrl: NavController) {}
  onItemClick(expense){
      console.log("Item clicked:", expense);
      this.navCtrl.push(DetailPage,{
        expense: expense
      });
    }

}
