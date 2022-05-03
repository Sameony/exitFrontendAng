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
    brands: [""],
    selected: [""]
  }
  public check = []
  results:any=[]
  clickHandler=(e:any)=>{
    
    if(this.formData.selected.includes(e.source.value))
      this.formData.selected=this.formData.selected.filter(i=>i!==e.source.value);
    else
      this.formData.selected.push(e.source.value);
    console.log(this.formData.selected)
  }
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
        
      }
      this.check=[...new Set(this.check)]
    }
    
  }


