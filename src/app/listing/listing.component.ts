import { Component } from '@angular/core';
import { RestService } from '../rest.service';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent {

  p: Number = 1;
  count: Number = 4;
  items:any = [];
  subitems:any = [];
  isLoading=true;
  idpost: Number = 0;

  constructor(private restService : RestService) {
    this.init1();
  }
  ngOnInit() {
   
  }


  init1() {
    this.restService.get_items().subscribe((res : any)=>{
      this.items=res;
      console.log(this.items);
    });
  }

  show_comments(id_post : number){
    this.idpost=id_post;
    this.restService.get_items_comments(id_post).subscribe((subitems : any)=>{
      this.subitems=subitems;
      console.log(this.subitems);
    });  
  }

}
