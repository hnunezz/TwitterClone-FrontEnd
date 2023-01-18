import { Component, Input, OnInit } from '@angular/core';
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

  public tweetResult: Tweets = new Tweets();

  constructor(private tweetService: TweetsService) {
  }

  public setTweets(): void {
    this.tweetResult.text = this.tweetText;
    this.tweetService.setTweets(this.tweetResult);
    this.tweetResult = new Tweets();
  }
}
