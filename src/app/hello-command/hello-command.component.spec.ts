import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloCommandComponent } from './hello-command.component';

describe('HelloCommandComponent', () => {
  let component: HelloCommandComponent;
  let fixture: ComponentFixture<HelloCommandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloCommandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloCommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
