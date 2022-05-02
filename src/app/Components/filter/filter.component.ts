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

  ngOnInit(): void {
    let results = this.userService.getProducts();
    results.forEach(obj=>console.log(obj));
    // results.forEach(item => {
    //   if(this.formData.brands.find(item.brand))
    // });
  }

}
