import {Component, OnInit} from '@angular/core';
import {AppService} from './app.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Intern} from '../intern';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  name = 'red';
  toggle = true;
data: any ;
 wrong: any ;
  constructor(private router: Router, private ob: AppService) {
  }
  ngOnInit () {
    this.ob.getInterns().subscribe((data: Intern[]) => {
        console.log(data);
      }, err => console.log('oops..!!!! + ${err.toString()}'),
      () => {
        console.log('fully complete');
      });
  }

      getData() {
        this.ob.getData().subscribe((data: any) => {

            //console.log(JSON.stringify(data));

          this.router.navigate(['home/login']);
            this.data = data;
          }, err => {
            this.wrong = err;
            console.log('oops..!!!! + ${err.toString()}');
          },
          () => {
            console.log('fully complete');
          }
        );
      }
}

// goTo(route: string) {
  //   this.router.navigate([route]);
  // }
  // change() {
  //   if (this.toggle) {
  //     this.toggle = false;
  //   } else {
  //     this.toggle = true;
  //   }
  // }
  //
  // showName(name) {
  //   alert(name);
  // }

