import { Component, OnInit } from '@angular/core';
import { Members } from '../shared/members.model';
import { MembersService } from '../shared/members.service';

@Component({
  selector: 'app-trust-members',
  templateUrl: './trust-members.component.html',
  styleUrls: ['./trust-members.component.scss']
})
export class TrustMembersComponent implements OnInit {

  constructor(private members : MembersService , ) { }
 list! : Members[];
  ngOnInit() {
    this.members.getMembers().subscribe(actionArray => {
    this.list = actionArray.map(item => {
      return {
        id: item.payload.doc.id,
        ...item.payload.doc.data() as {}
      } as Members
    });

    });
  }

}
