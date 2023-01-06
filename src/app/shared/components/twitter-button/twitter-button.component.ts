import { Component, Input } from '@angular/core';

@Component({
  selector: 'twitter-button',
  templateUrl: './twitter-button.component.html',
  styleUrls: ['./twitter-button.component.scss']
})
export class TwitterButtonComponent {

  @Input() size: string = 'xs'; // || xl
  @Input() color: string = 'primary';
  @Input() label: string = 'Tweet';

  constructor() { }
}
