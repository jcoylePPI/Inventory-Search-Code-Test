//tests/index-page.component.spec.ts
// TypeScript
import {ComponentFixture, TestBed, fakeAsync, tick, flush} from '@angular/core/testing';
import {IndexPageComponent} from '../pages/index-page/index-page.component';
import {INVENTORY_API_BASE, InventorySearchApiService} from '../services/inventory-search-api.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {ReactiveFormsModule} from '@angular/forms';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { Subject } from 'rxjs';
import { INVENTORY_SEARCH_DEBOUNCE_MS } from '../pages/index-page/index-page.component';

describe('IndexPageComponent', () => {
  let fixture: ComponentFixture<IndexPageComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
// TODO Implement the required code
    }).compileComponents();

    fixture = TestBed.createComponent(IndexPageComponent);
    fixture.detectChanges();
  });

  it('disables Search when form invalid', () => {
// TODO Implement the required code
  });

  it('toggles loading around search', () => {
// TODO Implement the required code  
  });
});
