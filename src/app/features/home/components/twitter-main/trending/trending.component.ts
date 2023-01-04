import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})
export class TrendingComponent {
  public TermsOfService: Array<string>;
  public WhatsHappening: any;
  public WhoToFollow: any;


  public controlLayoutInput: boolean;

  constructor() {
    this.TermsOfService = ['Terms of Service', "Privacy Policy", "Cookie Policy",
      "Accessibility", "Ads info", "More ...", "© 2022 Twitter, Inc."];

    this.WhatsHappening = {
      trending: "Tecnology · Trending",
      title: "TypeScript & Angular",
      subtitle: "Trending with ",
      action: "Henrique Nunes"
    };

    this.WhoToFollow = {
      source: "img",
      name: "UserName",
      username: "@UserName",
    };


    this.controlLayoutInput = false;
  }

  public mockArray(number: number): Array<any> {
    return Array.from<any>({ length: number });
  }

}
