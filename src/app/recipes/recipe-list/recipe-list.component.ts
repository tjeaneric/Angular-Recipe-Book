import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'This is simply a test recipe',
      'https://www.tastingtable.com/img/gallery/instant-pot-salsa-chicken-recipe/intro-1648446373.webp'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
