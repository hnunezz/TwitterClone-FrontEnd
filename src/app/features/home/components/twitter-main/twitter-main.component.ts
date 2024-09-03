import { Component, OnInit } from '@angular/core';
import { Tweets } from 'src/app/core/models/tweets.models';
import { TweetsService } from 'src/app/core/services/tweets.service';


@Component({
  selector: 'app-twitter-main',
  templateUrl: './twitter-main.component.html',
  styleUrls: ['./twitter-main.component.scss']
})
export class TwitterMainComponent implements OnInit {
  public actionItems: Array<string>;
  public tweetText: string;
  public tweetsCount: number = 0;

  public tweetResult: Tweets = new Tweets();


  public get hasTweetText(): boolean {
    return this.tweetText == '';
  }

  constructor(private tweetService: TweetsService) {
    this.actionItems = new Array<string>();
    this.tweetText = '';
  }

  ngOnInit() {
    this.setActionItems();
    this.tweetService.getTweets().subscribe(() => {
      this.tweetText = '';
    });
  }

  private setActionItems(): void {
    const sourcePattern = 'assets/images/svg/twitter-main/actions';
    const Items = ['new-img', 'new-gif', 'new-topic', 'new-emote', 'new-calendar', 'location'];

    Items.forEach(item => {
      this.actionItems.push(`${sourcePattern}/${item.toLowerCase()}.svg#${item}`);
    })
  }

  handleTweets() {
    this.tweetResult.text = this.tweetText;
    this.tweetService.setTweets(this.tweetResult);
    this.tweetResult = new Tweets();
  }

  setTweetsQnt(qnt:number) {
    this.tweetsCount = qnt
  }
}
