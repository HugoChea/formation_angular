import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDesFilesComponent } from './liste-des-files.component';

describe('ListeDesFilesComponent', () => {
  let component: ListeDesFilesComponent;
  let fixture: ComponentFixture<ListeDesFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeDesFilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeDesFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
