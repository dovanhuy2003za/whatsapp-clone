import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatLists } from './chat-lists';

describe('ChatLists', () => {
  let component: ChatLists;
  let fixture: ComponentFixture<ChatLists>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatLists]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatLists);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
