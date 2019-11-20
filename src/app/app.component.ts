import { Component } from "@angular/core";
import { myanim } from "./myanim";

@Component({
  selector: "my-app",
  template: `
    <p [@myAnimation]="val" (click)="toggleState()">
    Animations tutorial</p>
    <br>
  `,
  styleUrls: ['./app.component.css'],
  animations: [ myanim ]
})
export class AppComponent {
  val:String = "small";

  toggleState():void{
    if(this.val == "small")
      this.val = "large";
    else
      this.val = "small";
  }
}
