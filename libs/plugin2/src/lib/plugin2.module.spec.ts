import { async, TestBed } from '@angular/core/testing';
import { Plugin2Module } from './plugin2.module';

describe('Plugin2Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [Plugin2Module]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(Plugin2Module).toBeDefined();
  });
});
