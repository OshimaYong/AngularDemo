import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootstrapdemo',
  templateUrl: './bootstrapdemo.component.html',
  styleUrls: ['./bootstrapdemo.component.css']
})
export class BootstrapdemoComponent implements OnInit {

  result: string[] = ['sys01','sys02'];
  constructor() { 
    this.result.push('sys03');
  }

  ngOnInit() {
  }
  saveable = true
  currentClasses: {};
  setCurrentClasses() {
    // CSS classes: added/removed per current state of component properties
    this.currentClasses =  {
      'saveable': true,
      'modified': true,
      'special':  true
    };
  }

  btnclick()
  {
    this.setCurrentClasses();
    this.setCurrentStyles();
  }
  canSave = true;
  isUnchanged =false;
  isSpecial = true;
  currentStyles: {};

  setCurrentStyles() {
    // CSS styles: set per current state of component properties
    this.currentStyles = {
      'font-style':  this.canSave      ? 'italic' : 'normal',
      'font-weight': !this.isUnchanged ? 'bold'   : 'normal',
      'font-size':   this.isSpecial    ? '24px'   : '12px'
    };
  }

  NavClass: {};
  handle(){
    this.NavClass = {
      "nav-link active":true
    }
  }
  scrollTo(section) {
    document.querySelector('#' + section)
    .scrollIntoView();
  }
}
