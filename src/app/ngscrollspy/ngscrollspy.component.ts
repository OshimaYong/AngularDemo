import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngscrollspy',
  templateUrl: './ngscrollspy.component.html',
  styleUrls: ['./ngscrollspy.component.css']
})
export class NgscrollspyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  currentPostion = 'section1';

  onPositionChange(position: string) {
    this.currentPostion = position;
  }

  scrollTo(position :string) {
    document.querySelector('#' + position)
    .scrollIntoView();
  }
}
