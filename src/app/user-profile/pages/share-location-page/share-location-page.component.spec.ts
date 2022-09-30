import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareLocationPageComponent } from './share-location-page.component';

describe('ShareLocationPageComponent', () => {
  let component: ShareLocationPageComponent;
  let fixture: ComponentFixture<ShareLocationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareLocationPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShareLocationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
