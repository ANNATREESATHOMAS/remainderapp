import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-eventhistory',
  templateUrl: './eventhistory.component.html',
  styleUrls: ['./eventhistory.component.css'],

})
export class EventhistoryComponent implements OnInit {
  event:any
  constructor(private ds: DataService) {     
    this.ds.eventHistory().subscribe((result:any)=>{
    this.event=result.events
  },
  (result)=>{
    alert(result.error.message) 
  }
  )}

  ngOnInit(): void {
  }

}
