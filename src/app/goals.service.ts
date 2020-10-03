import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GOALS } from './mock-goals'
import { Goal } from './models';

@Injectable({
  providedIn: 'root'
})
export class GoalsService {

  constructor() { }

  getGoals(): Observable<Goal[]> {
    return of(GOALS);
  }

  addGoal(goal: Goal): void {
    GOALS.push(goal)
  }
}
