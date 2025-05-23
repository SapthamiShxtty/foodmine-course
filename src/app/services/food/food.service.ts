import { Injectable } from '@angular/core';
import { Food } from '../../shared/models/Food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll(): Food[]{
    return[
      {
        id:1,
        name:'Burger',
        price: 300,
        cookTime:'10-20',      
        favorite:false,
        origin:['italy'],
        stars:4.0,
        imageUrl:'images/BURGER.jpg',
        tags:['FastFood', 'Lunch']
      },
      {
        id:2,
        name:'French Fries',
        price: 250,
        cookTime:'10-20',      
        favorite:false,
        origin:['France'],
        stars:4.0,
        imageUrl:'images/FRENCH FRIES.jpg',
        tags:['FastFood', 'Lunch']
      }
      ,
      {
        id:3,
        name:'Cake',
        price: 400,
        cookTime:'20-25',      
        favorite:false,
        origin:['italy'],
        stars:4.0,
        imageUrl:'images/CAKE.jpg',
        tags:['Sweet', 'Celebration']
      }
      ,
      {
        id:4,
        name:'Ice Cream',
        price: 300,
        cookTime:'15-20',      
        favorite:false,
        origin:['italy'],
        stars:4.0,
        imageUrl:'images/ICE CREAM.jpg',
        tags:['Cold', 'Ice Cream']
      }
      ,
      {
        id:5,
        name:'Veg Pizza',
        price: 300,
        cookTime:'20-25',      
        favorite:false,
        origin:['italy'],
        stars:4.0,
        imageUrl:'images/PIZZA.jpg',
        tags:['Pizza', 'Fast Food','Lunch']
      }
    ]
  }
}
