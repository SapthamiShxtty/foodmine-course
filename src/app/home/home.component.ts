import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { CommonModule } from '@angular/common';
import { Food } from '../shared/models/Food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  foods:Food[] =[];
  constructor(private foodService : FoodService, private route : ActivatedRoute){}

  ngOnInit(): void {
      this.route.params.subscribe(params =>{
          if(params['searchTerm'])
            this.foods = this.foodService.getAll().filter(food => food.name.toLowerCase().includes(params['searchTerm'].toLowerCase()));
          else
          this.foods = this.foodService.getAll();
      })
      
  }

  getStarsArray(stars: number): number[] {
    return Array(Math.round(stars)).fill(0);
  }


}
