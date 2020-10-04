import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GOALS } from './mock-goals'
import { Goal } from './models';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GoalsService {

  constructor(private httpClient: HttpClient) { }

  private goalsUrl = 'http://localhost:3000/goals';

  getGoals(): Observable<Goal[]> {
    console.log('triggered');
    return this.httpClient.get<Goal[]>(this.goalsUrl);
  }

  addGoal(goal: Goal): void {
    GOALS.push(goal)
  }
}
