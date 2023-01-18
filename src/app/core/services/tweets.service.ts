import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Tweets } from '../models/tweets.models';

@Injectable({
  providedIn: 'root'
})
export class TweetsService {

  public $tweets: Subject<Tweets>;

  constructor() { this.$tweets = new Subject<Tweets>(); }

  public setTweets(tweet: Tweets) { this.$tweets.next(tweet); }
  public getTweets(): Observable<Tweets> { return this.$tweets.asObservable(); }
}
