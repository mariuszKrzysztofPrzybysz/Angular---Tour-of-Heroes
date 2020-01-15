import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  hero: Hero = {
    id: 1,
    name: "Windstorm"
  };
  constructor(private heroService: HeroService) {
    // Called first time before the ngOnInit()
  }

  ngOnInit() {
    // Called after the constructor and called  after the first ngOnChanges()
    this.getHeroes();
  }

  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  };

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

}
