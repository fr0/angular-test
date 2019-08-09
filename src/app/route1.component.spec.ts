import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {Route1Component} from './route1.component';
import {By} from '@angular/platform-browser';

describe('Route1Component', () => {
  let component: Route1Component;
  let fixture: ComponentFixture<Route1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Route1Component]
    });
    fixture = TestBed.createComponent(Route1Component);
    component = fixture.componentInstance;
  });

  fit('should be able to add an element dynamically', fakeAsync(() => {
    component.ngOnInit();
    tick(100);

    // doesn't work ... why?
   expect(fixture.debugElement.query(By.css('.thing'))).toBeTruthy();

    // does work
    expect(document.querySelector('.thing')).toBeTruthy();
  }));
});
