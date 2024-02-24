import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private httpClient : HttpClient) {}

  baseUrl:string = "http://localhost:8080";

  get_items(){
      return this.httpClient.get(this.baseUrl + '/listing');
  } 
  
  get_items_comments(id_post : any){
    return this.httpClient.get(this.baseUrl + '/listing_comments?id_post='+id_post);
  }
}
