import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { MessageService } from './message.service';
import { InMemoryDataService } from './in-memory-data.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private messageService: MessageService,
    private inMemoryDataService: InMemoryDataService) { }

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add("HeroService: fetched heroes");
    return of(this.inMemoryDataService.createDb().heroes);
  }

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    //Note the backticks ( ` ) that define a JavaScript template literal for embedding the id.
    return of(this.inMemoryDataService.createDb().heroes.find(hero => hero.id === id));
  }
}
