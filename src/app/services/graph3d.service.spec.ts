/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Graph3dService } from './graph3d.service';

describe('Graph3dService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Graph3dService]
    });
  });

  it('should ...', inject([Graph3dService], (service: Graph3dService) => {
    expect(service).toBeTruthy();
  }));
});
