import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListComponent } from '../../../components/user/list/list.component';
import { Api } from '../../../services/api';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from "@angular/common/http/testing";

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
