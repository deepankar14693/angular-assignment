import {Intern} from '../intern';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {HttpClient, HttpClientModule, HttpErrorResponse} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';

@Injectable()
export class AppService {
  constructor(private http: HttpClient) {}

  interns: Intern[] = [new Intern('Deepankar', 11), new Intern('joy', 11)];

  getInterns() {
    return Observable.of(this.interns);
  }

  getData() {
    return this.http.get('https://reqres.in/api/users/10ghujgyu')
      .pipe(catchError(err => this.handleError(err))) ;
    }

    private handleError(err: HttpErrorResponse): Observable<string> {
    return of('hello');
    }
}
