import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  
 
  constructor(public userService:UserService) {}
    public brands = []
    results:any=[]
    ngOnInit(): void {
      this.userService.getProducts().subscribe(
        res => this.setResult(res));
        console.log(this.results[0]);  
      }
      
      setResult(r:any){
        this.results=r;
        this.brands=this.results.map((x:any)=>{
          return x.brand;
        })
        for(let i=0;i<this.results.length;i++){
          console.log(this.results[i].imgUrl);
        }
        this.brands=[...new Set(this.brands)]
      }
}
