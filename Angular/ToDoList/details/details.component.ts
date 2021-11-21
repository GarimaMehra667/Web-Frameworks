import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { DemoService } from '../demo.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() tDetails:string | undefined;
  //tDetails="Some Details";
 
  @Output() msgEvent = new EventEmitter();
  msg = "Some Message from Child";
  taskArray:any = []
  constructor(private taskVar: DemoService) {
    this.taskArray = taskVar.getTask();
    console.log(this.taskArray);

  }

  ngOnInit() {
    console.log("on calling ngOnInit");
  }
  ngAfterContentInit() {
    console.log("on calling ngAfterContentInit");
  }
  ngChanges() {
    console.log("on calling ngChanges");
  }
  ngOnChanges() {
    console.log("on calling ngOnChanges");
  }
  ngDoCheck() {
    console.log("on calling ngDoCheck");
  }
  ngAfterContentChecked() {
    console.log("on calling ngAfterContentChecked");
  }
  ngAfterViewChecked() {
    console.log("on calling ngAfterViewChecked");
  }
  sendMessage() {
    this.msgEvent.emit(this.msg);
  }
}
