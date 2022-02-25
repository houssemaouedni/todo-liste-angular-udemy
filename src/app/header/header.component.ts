import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
@Component({
  selector: 'nav-bar',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  nomberPairSub : Subscription | any;
  seconde: number | any;
  constructor() { }

  ngOnInit(): void {
    const secondeObs = interval(1000);

    this.nomberPairSub = secondeObs.subscribe((value: Number | any)=>{
      this.seconde = value

    })

  }
  ngOnDestroy(): void {
      this.nomberPairSub.unsubscribe();
  }

}
