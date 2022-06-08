import { Component } from '@angular/core';
import { of } from 'rxjs';

const getFakeHistoryData = () => {
  const data = [
    {
      title: 'Requested',
      user: {
        id: 0,
        name: 'Alpha',
      },
    },
    {
      title: 'Sent',
      user: {
        id: 1,
        name: 'Beta',
      },
    },
    {
      title: 'Completed',
      user: {
        id: 2,
        name: 'Gamma',
      },
      current: true,
    },
    {
      title: 'Approved',
    },
    {
      title: 'Registered',
    },
  ];
  return of(data);
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  history$ = getFakeHistoryData();
}
