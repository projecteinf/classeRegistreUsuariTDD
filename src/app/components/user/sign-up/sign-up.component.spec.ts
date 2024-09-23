import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpComponent } from './sign-up.component';

let component: SignUpComponent;
let fixture: ComponentFixture<SignUpComponent>;
let compiled: HTMLElement;

function getNthLabel(index:number) {
  return compiled.querySelectorAll("label")[index];
}

function getInputFromLabel(labelIndex:number) {
  return getNthLabel(labelIndex)!.querySelector("input");
}

describe('Layout', () => {
  
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
    expect(getInputFromLabel(0)!.getAttribute("type")).toBe("text");
  });

  it('Has input of type email for Email', () => {
    const inputUserName:HTMLInputElement|null = getInputFromLabel(1);
    expect(inputUserName!.getAttribute("type")).toBe("email");
  });

  it('Has button', () => {
    expect(compiled.querySelector("button")).toBeTruthy();
  });

  it('Only languages: frances,angles,italia,catala,castella. Ordered', () => {
    const languages=["frances","angles","italia","catala","castella"].sort();
    const selectLanguage:HTMLSelectElement = getNthLabel(3)!.querySelector("select")!;
    expect(selectLanguage.options.length).toBe(languages.length);
    let index=0;
    languages.forEach(
      language => {
        expect(selectLanguage.options[index].value).toBe(language);
        index++;
      }
    )
  });

});

describe('SignUpComponent - Button send', () => {
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

  it('Button is disabled', () => {
    expect(compiled.querySelector("button")!.disabled).toBeTruthy();
  });

  it('Has select tag for language', () => {
    const selectLanguage:HTMLSelectElement = getNthLabel(3)!.querySelector("select")!;
    expect(selectLanguage).toBeTruthy();
  });

  it('Enable button if all data is correct', () => {
    const languages=["frances","angles","italia","catala","castella"].sort();
    const inputUserName:HTMLInputElement = getInputFromLabel(0)!;
    const inputEmail:HTMLInputElement = getInputFromLabel(1)!;
    const inputPassword:HTMLInputElement = getInputFromLabel(2)!;
    const inputRepeatPassword:HTMLInputElement = getInputFromLabel(3)!;
    const selectLanguage:HTMLSelectElement = getNthLabel(3)!.querySelector("select")!;
    const button:HTMLButtonElement = compiled.querySelector("button")!;

    inputUserName.value="Maria";
    inputEmail.value="maria@gmail.com";
    inputPassword.value="Pa$$w0rd";
    inputRepeatPassword.value="Pa$$w0rd";
    selectLanguage.value=languages[2];

    inputUserName.dispatchEvent(new Event("input"));
    inputEmail.dispatchEvent(new Event("input"));
    inputPassword.dispatchEvent(new Event("input"));
    inputRepeatPassword.dispatchEvent(new Event("input"));
    selectLanguage.dispatchEvent(new Event("change"));

    fixture.detectChanges();
    expect(button.disabled).toBeFalse();

  })
});
