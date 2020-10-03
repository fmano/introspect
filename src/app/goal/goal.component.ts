import { Component, OnInit } from '@angular/core';
import { GoalsService } from '../goals.service';
import { Goal } from '../models';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  goals: Goal[];

  constructor(private goalsService: GoalsService) { }

  ngOnInit(): void {
    this.getGoals();
  }

  getGoals(): void {
    this.goalsService.getGoals().subscribe(goals => this.goals = goals);
  }
}


