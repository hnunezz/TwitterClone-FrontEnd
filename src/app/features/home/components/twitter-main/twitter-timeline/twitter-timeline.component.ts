import { Component, DoCheck, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Tweets } from 'src/app/core/models/tweets.models';
import { TweetsService } from 'src/app/core/services/tweets.service';

@Component({
  selector: 'twitter-timeline',
  templateUrl: './twitter-timeline.component.html',
  styleUrls: ['./twitter-timeline.component.scss']
})
export class TwitterTimelineComponent implements OnInit {
  public tweetList = Array<Tweets>();

  @Output() tweetsCount = new EventEmitter<number>()

  constructor(private tweetService: TweetsService) {
    this.tweetList = new Array<Tweets>();
  }

  ngOnInit(): void {
    if (localStorage.getItem("tweets-timeline")) {
      this.tweetList = JSON.parse(localStorage.getItem("tweets-timeline") as string);
      this.tweetsCount.emit(this.tweetList.length)

    }

    this.getTweets();
  }

  private getTweets(): void {
    this.tweetService.getTweets().subscribe(tweet => {
      this.tweetList.push(tweet);
      localStorage.setItem("tweets-timeline", JSON.stringify(this.tweetList));
      this.tweetsCount.emit(this.tweetList.length)
    });
  }
}
