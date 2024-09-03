import { Component, OnInit } from '@angular/core';
import { NavItems } from 'src/app/core/models/nav-items.models';

@Component({
  selector: 'app-twitter-header',
  templateUrl: './twitter-header.component.html',
  styleUrls: ['./twitter-header.component.scss']
})
export class TwitterHeaderComponent implements OnInit {
  public navItems: Array<NavItems>;

  public name: string = '';
  public user: string = '';

  constructor() { this.navItems = new Array<NavItems>(); }

  ngOnInit(): void {
    this.getNavItems();
    this.name = localStorage.getItem("nome") as string;
    this.user = localStorage.getItem("user") as string;
  }

  private getNavItems(): void {
    const sourcePattern = 'assets/images/svg/twitter-header/nav';
    const Items = ["Home", 'Explore',"Notifications", "Messages","Bookmarks","List","Profile","More"];

    Items.forEach(item => {
      this.navItems.push({label: item, source: `${sourcePattern}/${item.toLowerCase()}.svg#${item}`, action: true});
    })
  }
}
