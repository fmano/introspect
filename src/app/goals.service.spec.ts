import { TestBed } from '@angular/core/testing';

import { GoalsService } from './goals.service';
import { Goal } from './models'
import { GOALS } from './mock-goals';

describe('GoalsService', () => {
  let service: GoalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getGoals', () => {
    it('should return list of goals', async () => {
      const output = service.getGoals();
      output.subscribe(result => {
        expect(result).toEqual(GOALS);
      })
    });
  })
});
