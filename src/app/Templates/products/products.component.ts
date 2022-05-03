import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 
  constructor(public userService:UserService) { }
  public brands = []
  results:any=[]
  ngOnInit(): void {
    this.userService.getProducts().subscribe(
      res => this.setResult(res));
      
    }
    setResult(r:any){
      this.results=r;
      this.brands=this.results.map((x:any)=>{
        return x.brand;
      })
      for(let i=0;i<this.results.length;i++){
        console.log(this.results[i].id);
      }
      this.brands=[...new Set(this.brands)]
    }
  

}
