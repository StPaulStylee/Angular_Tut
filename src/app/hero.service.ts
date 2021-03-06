import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service'

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Observable<Hero[]> {
    // TODO: Send messages AFTER the fetching of the heroes
    this.messageService.add('The HeroService fetched those SWEET ASS HEROES!');
    return of(HEROES);
  }

  constructor(private messageService: MessageService) { }
}
