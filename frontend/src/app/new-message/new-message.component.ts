import { Component, OnInit} from '@angular/core';
import { Http } from '@angular/http';
import { WebService } from '../web.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.css']
})
export class NewMessageComponent implements OnInit {
  // @Output() onPosted = new EventEmitter();
  // @Output() onPosted: EventEmitter<any> = new EventEmitter<any>();
  message = {
    owner: this.auth.name,
    text: ''
  };
  constructor(private webService: WebService, private auth: AuthService) { }
  ngOnInit() {
  }

    post() {
      this.webService.postMessage(this.message);
      // this.onPosted.emit(this.message);
    }
}
