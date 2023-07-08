import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerSignupPageComponent } from './seller-signup-page.component';

describe('SellerSignupPageComponent', () => {
  let component: SellerSignupPageComponent;
  let fixture: ComponentFixture<SellerSignupPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerSignupPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerSignupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
