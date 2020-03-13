import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerRowComponent } from './server-row.component';

describe('ServerRowComponent', () => {
  let component: ServerRowComponent;
  let fixture: ComponentFixture<ServerRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
