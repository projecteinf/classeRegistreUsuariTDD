import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from '../../app.component';
import { provideRouter, Router, RouterLink, RouterLinkWithHref } from '@angular/router';
import { routes } from '../../app.routes';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';



describe('Menu routing', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let compiled: HTMLElement;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        provideRouter(routes)
      ],
      imports: [AppComponent, RouterLink],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;
    router = TestBed.inject(Router);
    router.initialNavigation();
  });

  it('Navigates to /listusers option', async () => {
    fixture.detectChanges();
    const linkDebugs:DebugElement[] = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));

    const link:HTMLAnchorElement=linkDebugs[1].nativeElement as HTMLAnchorElement;

    link.click();
    fixture.detectChanges();
    await fixture.whenStable();
    expect(router.url).toBe("/listusers");
  });

});
