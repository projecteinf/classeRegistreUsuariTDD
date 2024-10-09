import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListComponent } from '../../../components/user/list/list.component';
import { Api } from '../../../services/api';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from "@angular/common/http/testing";
import { of, throwError } from 'rxjs';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let serviceApi: Api;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListComponent],
      providers: [
        Api,
        provideHttpClient(),
        provideHttpClientTesting()
    ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    serviceApi = TestBed.inject(Api);
    httpTestingController = TestBed.inject(HttpTestingController)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Cats retrieve OK', () => {
    const mockData = [ {} ];
    spyOn(serviceApi, 'getCats').and.returnValue(of(mockData));

    component.ngOnInit();
    fixture.detectChanges();
    
    const compiled:HTMLElement = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector(".error-message")).toBeFalsy();
  });

  it('Cats retrieve error', () => {
    const errMessage = "Error en la connexió amb l'API. Contacti amb l'administrador";

    spyOn(serviceApi, 'getCats').and.
      returnValue(throwError(()=> Error("Error en la connexió amb l'API. Contacti amb l'administrador")));

    component.ngOnInit();
    fixture.detectChanges();

    const compiled:HTMLElement = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector(".error-message")?.textContent).toContain(errMessage);

  });
});
