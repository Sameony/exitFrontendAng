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
    priceVal:"2700",
    brands: [""],
    selected: [""]
  }

  ngOnInit(): void {
    this.updateResult();
    }
    clickHandler=(e:any)=>{
    
      if(this.formData.selected.includes(e.source.value))
        this.formData.selected=this.formData.selected.filter(i=>i!==e.source.value);
      else
        this.formData.selected.push(e.source.value);
      console.log(this.formData.selected)
      this.updateResult();
    }
    setResult(r:any){
      this.results=r;
      this.brands=this.results.map((x:any)=>{
        return x.brand;
      })
      
      this.brands=[...new Set(this.brands)]
    }
    updateResult()
    {
      this.userService.getProducts().subscribe(
        res => {
          this.setResult(res)
          let updatedResult:any = []
          
          console.log("hi from here")
          if(this.formData.selected.length>1)
          {
            for(let i=0;i<this.results.length;i++){
              if(this.results[i].price < this.formData.priceVal && this.formData.selected.includes(this.results[i].brand))
              {
                console.log(this.results[i])
                updatedResult=[...updatedResult, this.results[i]]
                
              }
            }
            console.log(updatedResult)
          this.results=updatedResult;
          }
          
          
        }
        );
      
      
    }

}
