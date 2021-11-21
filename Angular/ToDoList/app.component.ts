import { Component, Output } from '@angular/core';
import{task } from './taskInfo';
import { DetailsComponent } from './details/details.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Output()
 taskArr = task;
 tID = 1;
 tStatus = "Not Done";
 tName :string = "";
 tDue : string = "";
 tdts:string ="";
 message:string = "";
 constructor(){} 
 addTask(tName:string, tDue:string, tdts:string){
   this.tID = this.tID+1;
   var obj:any = {taskid:this.tID , tasknm:tName , duedt:tDue , status:this.tStatus, details:tdts, showhide:false};
   this.taskArr.push(obj);
 }
 showHide(tid:number){
  console.log(tid);
  if (this.taskArr[tid-1].showhide==true){
    this.taskArr[tid-1].showhide=false;
  }
  else{
    this.taskArr[tid-1].showhide=true;
  }
}
ngOnInit() {
  console.log("On init")
}
// ngAfterViewInit(){
//  this.message=this.child.msg;
// }
receiveMessage($event: any){
  this.message=$event;
  console.log(this.message);
}
}
