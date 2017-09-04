import uuidV4 from 'uuid/v4';
import 'rxjs/add/operator/toPromise';
import { Injectable} from '@angular/core'
import { Headers, Http, RequestOptions } from '@angular/http';
import { Expense } from './expense.model';
console.log(uuidV4());
@Injectable()
export class ExpenseService {
	
  //public apiUrl = 'http://localhost:9999';

  categories = ['Food', 'Travel', 'Other'];
  
  constructor( private http: Http){}

  addExpense(expense: Expense): Promise<any> {
  	expense.id = uuidV4(); 
    const json = JSON.stringify(expense);

    const headers = new Headers({
      'Content-Type': 'application/json'
    }); 

    const options = new RequestOptions({
      headers : headers
    });

  	return this.http.post('http://localhost:9999/expenses/', json, options)
      .toPromise();
  }

  getExpense(expenseId: string): Promise<Expense> {
    return this.http.get(`http://localhost:9999/expenses/${expenseId}`)
      .toPromise()
      .then(response => response.json());
    
  }

  getExpenses(): Promise<Expense[]> {
  	return this.http.get('http://localhost:9999/expenses/')
  		.toPromise()
  		.then(response => response.json());
  	
  }

  removeExpense(expenseId:string):Promise<any> {
  	  	return this.http.delete(`http://localhost:9999/expenses/${expenseId}`)
      .toPromise();

  }

 updateExpense(expense: Expense): Promise<any> {
    const json = JSON.stringify(expense);

    const headers = new Headers({
      'Content-Type': 'application/json'
    }); 

    const options = new RequestOptions({
      headers : headers
    });

    return this.http.put(`http://localhost:9999/expenses/${expense.id}`, json, options)
      .toPromise();
  }

}