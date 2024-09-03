import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tweets } from 'src/app/core/models/tweets.models';
import { TweetsService } from 'src/app/core/services/tweets.service';

@Component({
  selector: 'twitter-button',
  templateUrl: './twitter-button.component.html',
  styleUrls: ['./twitter-button.component.scss']
})
export class TwitterButtonComponent {

  @Input() size: string = 'xs'; // || xl
  @Input() color: string = 'primary';
  @Input() label: string = 'Tweet';
  @Input() disable: boolean = false;
  @Input() tweetText: string = '';

  @Output() tweetChange = new EventEmitter();

  handleTweets() {
    this.tweetChange.emit('')
  }
}
