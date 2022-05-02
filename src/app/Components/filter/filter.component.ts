import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})

export class FilterComponent implements OnInit {
  
  constructor(public userService:UserService) { }

  
  public formData = {
    priceVal:"700",
    brands:[]
  }
  public check = []
  // {
	// 	"id":"",
	// 	"price":"",
	// 	"imgUrl":"",
	// 	"pincodes":[],
	// 	"description":"",
	// 	"brand":"",
	// 	"title":"",
	// 	"rating":""
	// }
  results:any=[]
  ngOnInit(): void {
    
    this.userService.getProducts().subscribe(
      res=> this.setResult(res));

    
  }
  
    setResult(r:any){
      this.results=r;
      this.check=this.results.map((x:any)=>{
        return x.brand;
      })
      for(let i=0;i<this.results.length;i++){
        console.log(this.results[i].id);
      }
      this.check=[...new Set(this.check)]
    }
    
  }


