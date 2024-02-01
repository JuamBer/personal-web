import { ChangeDetectionStrategy } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';
import { SocialNetworksComponent } from './social-networks.component';

describe('SocialNetworksComponent', () => {
  let component: SocialNetworksComponent;
  let fixture: ComponentFixture<SocialNetworksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      declarations: [SocialNetworksComponent],
    })
      .overrideComponent(SocialNetworksComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default },
      })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialNetworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render social networks', () => {
    component.socialNetworks = [
      { url: 'http://facebook.com', name: 'Facebook', icon: 'fa-facebook' },
      { url: 'http://twitter.com', name: 'Twitter', icon: 'fa-twitter' },
    ];
    fixture.detectChanges();

    const listItems = fixture.debugElement.queryAll(By.css('.social-networks ul li'));
    expect(listItems.length).toBe(2);

    const anchors = listItems.map((li) => li.query(By.css('a')));
    expect(anchors[0].nativeElement.getAttribute('href')).toBe('http://facebook.com');
    expect(anchors[1].nativeElement.getAttribute('href')).toBe('http://twitter.com');

    const icons = listItems.map((li) => li.query(By.css('i')));
    expect(icons[0].nativeElement.classList.contains('fa-facebook')).toBe(true);
    expect(icons[1].nativeElement.classList.contains('fa-twitter')).toBe(true);
  });
});
