import { Component, OnInit } from '@angular/core';
import {MatCheckboxChange} from '@angular/material/checkbox';
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
  results:any=[]
  clickHandler=()=>{}
  ngOnInit(): void {
    
    
  }
  
   
    
  }


