import uuidV4 from 'uuid/v4';
import { Injectable} from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import {AuthService} from './auth.service';
import { Expense } from './expense.model';
console.log(uuidV4());
@Injectable()
export class ExpenseService {

	private apiUrl = 'http://localhost:9999';


  categories = ['Food', 'Travel', 'Other'];

  constructor( private http: Http, private authService:AuthService){}

  addExpense(expense: Expense): Promise<any> {
  	expense.id = uuidV4();
    const json = JSON.stringify(expense);

  	return this.http.post(`${this.apiUrl}/expenses/`, json, this.requestOptions(true))
      .toPromise();
  }

  getExpense(expenseId: string): Promise<Expense> {
    return this.http.get(`${this.apiUrl}/expenses/${expenseId}`,this.requestOptions())
      .toPromise()
      .then(response => response.json());

  }

  getExpenses(): Promise<Expense[]> {
  	return this.http.get(`${this.apiUrl}/expenses/`,this.requestOptions())
  		.toPromise()
  		.then(response => response.json());

  }

  removeExpense(expenseId:string):Promise<any> {
  	  	return this.http.delete(`${this.apiUrl}/expenses/${expenseId}`,this.requestOptions())
      .toPromise();

  }

 updateExpense(expense: Expense): Promise<any> {
    const json = JSON.stringify(expense);

    return this.http.put(`${this.apiUrl}/expenses/${expense.id}`, json,this.requestOptions(true))
      .toPromise();
  }

	private requestOptions(hasBody = false){
		const headers = new Headers({
			'Authorization':'bearer '+ this.authService.token,

		});
		if(hasBody){
			headers.set('Content-Type', 'application/json');
		}
		return new RequestOptions({headers: headers});
	}
}
