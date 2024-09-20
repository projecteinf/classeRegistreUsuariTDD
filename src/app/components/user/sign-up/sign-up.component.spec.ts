import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpComponent } from './sign-up.component';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignUpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled=fixture.nativeElement as HTMLElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Has title Sign Up', () => {
    const compiled:HTMLElement=fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector("h1")?.textContent).toBe("Sign Up");
  });

  it('Has label for Username', () => {
    expect(getNthLabel(0).textContent).toBe("Username: ");
  });

  it('Has label for Email', () => {
    expect(getNthLabel(1).textContent).toBe("Email: ");
  });

  it('Has label for Password', () => {
    expect(getNthLabel(2).textContent).toBe("Password:");
  });

  it('Has input of type text for Username', () => {
    const inputUserName:HTMLInputElement|null = getInputFromLabel(0);
    expect(inputUserName!.getAttribute("type")).toBe("text");
  });

  it('Has input of type email for Email', () => {
    const inputUserName:HTMLInputElement|null = getInputFromLabel(1);
    expect(inputUserName!.getAttribute("type")).toBe("email");
  });

  function getNthLabel(index:number) {
    return compiled.querySelectorAll("label")[index];
  }

  function getInputFromLabel(labelIndex:number) {
    return getNthLabel(labelIndex)!.querySelector("input");
  }
});
