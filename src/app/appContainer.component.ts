import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './appContainer.component.html',
  styleUrls: ['./appContainer.component.scss']
})
export class AppContainerComponent {
  profile = {
    name: 'Shirley Thomas',
    phoneNumber: '+1(234) 123 123',
    profileImg: 'https://via.placeholder.com/150',
    address: ' Marketing Executive, inform Group Pty Ltd, Philippines, Comsmetis',
    outboundCall: '4 DAYS AGO',
    description: '<p>Budget is finally available! Needs to pull in some other decision markers</p> <p>Followup next week. CC sales manager <a href="javascript:void(0)">@robert</a> so he join.</p>'
  };


}
