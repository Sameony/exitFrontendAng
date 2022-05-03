import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(public userService:UserService) { }
  public brands = []
  results:any=[]
  public formData = {
    priceVal:"700",
    brands: [""],
    selected: [""]
  }
  ngOnInit(): void {
    this.userService.getProducts().subscribe(
      res => this.setResult(res));  
    }
    clickHandler=(e:any)=>{
    
      if(this.formData.selected.includes(e.source.value))
        this.formData.selected=this.formData.selected.filter(i=>i!==e.source.value);
      else
        this.formData.selected.push(e.source.value);
      console.log(this.formData.selected)
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
    updateResult(form:any)
    {
      
    }

}
