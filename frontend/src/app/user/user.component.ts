import { Component, OnInit } from '@angular/core';
import { WebService } from '../web.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private webService: WebService) { }
  model = {
    firstName: '',
    lastName: ''
  };
  ngOnInit() {
    this.webService.getUser().subscribe(res => {
      this.model.firstName = res.firstName;
      this.model.lastName = res.lastName;
    });
  }
  post() {
    this.webService.saveUser(this.model).subscribe();
  }

}
