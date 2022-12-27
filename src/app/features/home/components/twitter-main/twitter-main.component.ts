import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twitter-main',
  templateUrl: './twitter-main.component.html',
  styleUrls: ['./twitter-main.component.scss']
})
export class TwitterMainComponent implements OnInit {

  public TermsOfService: Array<string>;

  constructor() {
    this.TermsOfService = ['Terms of Service', "Privacy Policy", "Cookie Policy",
    "Accessibility", "Ads info", "More ...", "© 2022 Twitter, Inc."];
  }

  ngOnInit(): void {
  }

}
