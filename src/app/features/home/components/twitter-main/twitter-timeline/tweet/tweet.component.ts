import { Component, Input, OnInit } from '@angular/core';
import { NavItems } from 'src/app/core/models/nav-items.models';
import { Tweets } from 'src/app/core/models/tweets.models';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.scss']
})
export class TweetComponent implements OnInit {
  @Input() public tweet: Tweets;

  public actionItems: Array<NavItems>;
  public name: string = '';
  public user: string = '';

  constructor() {
    this.actionItems = new Array<NavItems>();
    this.tweet = new Tweets();
  }

  ngOnInit(): void {
    this.getActionItems();
    this.name = localStorage.getItem("nome") as string;
    this.user = `@${localStorage.getItem("user") as string}`;
  }


  private getActionItems(): void {
    const sourcePattern = 'assets/images/svg/twitter-main/timeline/tweets-actions';
    const Items = ["view", 'comments', "retweet", "like", "share"];

    Items.forEach((item) => {
      this.actionItems.push({ label: null, source: `${sourcePattern}/${item.toLowerCase()}.svg#${item}`, action: true, aux: item });
    })
  }

}
