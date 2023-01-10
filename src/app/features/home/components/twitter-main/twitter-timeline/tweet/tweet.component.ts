import { Component, OnInit } from '@angular/core';
import { NavItems } from 'src/app/core/models/nav-items.models';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.scss']
})
export class TweetComponent implements OnInit {
  public actionItems: Array<NavItems>;

  constructor() { this.actionItems = new Array<NavItems>(); }

  ngOnInit(): void {
    this.getActionItems();
  }


  private getActionItems(): void {
    const sourcePattern = 'assets/images/svg/twitter-main/timeline/tweets-actions';
    const Items = ["view", 'comments', "retweet", "like", "share"];

    Items.forEach((item) => {
      this.actionItems.push({ label: null, source: `${sourcePattern}/${item.toLowerCase()}.svg#${item}`, action: true, aux: item });
    })
  }

}
