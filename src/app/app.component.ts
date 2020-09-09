import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'myapp';

   cardData = [
    {
      question: 'What is bootstrap in HTML?',
      user: 'Deepak Yadav',
      date: '05-Sep-2020',
      answers: [
        {
          answer: 'I don\'t know.',
          user: 'Mayank',
          date: '05-Sep-2020',
        },
        {
          answer: 'I don\'t know.',
          user: 'Shubham',
          date: '05-Sep-2020',
        }
      ],
    },
    {
      question: 'What is HTML?',
      user: 'Mayank Singh',
      date: '05-Sep-2020',
      answers: [
        {
          answer: 'I don\'t know buddy.',
          user: 'Deepak',
          date: '05-Sep-2020',
        }
      ],
    }
  ];
}
