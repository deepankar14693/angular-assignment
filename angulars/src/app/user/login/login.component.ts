import {Component, EventEmitter, OnInit} from '@angular/core';
import {Input, Output} from '@angular/core';
import {Login} from './login';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'login-app',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{
  @Input() firstName: string;
  @Output() submitName = new EventEmitter ();

  user: Login = new Login(' ', '' );

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    console.log(this.route.snapshot.params['id']);
  }

  submitUser() {
    console.log(this.user.email);
    console.log(this.user.password);
  }

  submitForm() {
    this.submitName.emit(this.firstName);
  }
}
