import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Tweets } from 'src/app/core/models/tweets.models';
import { TweetsService } from 'src/app/core/services/tweets.service';

@Component({
  selector: 'twitter-timeline',
  templateUrl: './twitter-timeline.component.html',
  styleUrls: ['./twitter-timeline.component.scss']
})
export class TwitterTimelineComponent implements OnInit {
  public tweetList = Array<Tweets>();

  constructor(private tweetService: TweetsService) {
    this.tweetList = new Array<Tweets>();
  }

  ngOnInit(): void { this.getTweets(); }

  private getTweets(): void {
    this.tweetService.getTweets().subscribe(tweet => {
      this.tweetList.push(tweet);
    });
  }
}
