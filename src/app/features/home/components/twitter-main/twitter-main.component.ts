import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-twitter-main',
  templateUrl: './twitter-main.component.html',
  styleUrls: ['./twitter-main.component.scss']
})
export class TwitterMainComponent implements OnInit {
  public actionItems: Array<string>;
  public tweetText: string;

  public get hasTweetText(): boolean {
    return this.tweetText == '';
  }

  constructor() {
    this.actionItems = new Array<string>();
    this.tweetText = '';

  }

  ngOnInit() { this.setActionItems(); }

  private setActionItems(): void {
    const sourcePattern = 'assets/images/svg/twitter-main/actions';
    const Items = ['new-img', 'new-gif', 'new-topic', 'new-emote', 'new-calendar', 'location'];

    Items.forEach(item => {
      this.actionItems.push(`${sourcePattern}/${item.toLowerCase()}.svg#${item}`);
    })
  }
}
