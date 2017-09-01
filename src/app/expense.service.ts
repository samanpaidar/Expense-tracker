import uuidV4 from 'uuid/v4';
import 'rxjs/add/operator/toPromise';
import { Injectable} from '@angular/core'
import { Http } from '@angular/http';
import { Expense } from './expense.model';
console.log(uuidV4());
@Injectable()
export class ExpenseService {
	

  categories = ['Food', 'Travel', 'Other'];
  
  constructor( private http: Http){}

  addExpense(expense: Expense): Promise<void> {
  	expense.id = uuidV4(); 
  	return Promise.resolve();
  }
  getExpense(expenseId: string): Promise<Expense> {
    return Promise.resolve(null);
  }
  getExpenses(): Promise<Expense[]> {
  	return this.http.get('http://localhost:9999/expenses/')
  		.toPromise()
  		.then(response => response.json());
  	
  }
  removeExpense(expenseId:string):Promise<void> {
  	  	return Promise.resolve();

  }

 updateExpense(expense: Expense): Promise<void> {
    return Promise.resolve();
  }

}