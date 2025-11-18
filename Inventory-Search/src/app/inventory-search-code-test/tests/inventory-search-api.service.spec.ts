// tests/inventory-search-api.service.spec.ts
// TypeScript
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { INVENTORY_API_BASE, InventorySearchApiService } from '../services/inventory-search-api.service';
import { InventorySearchQuery } from '../models/inventory-search.models';
import { take } from 'rxjs/operators';

describe('InventorySearchApiService', () => {
  let svc: InventorySearchApiService;
  let http: HttpTestingController;

  beforeEach(() => {
// TODO Implement the required code
  });

  afterEach(() => http.verify());

  it('caches identical requests for 60s', () => {
// TODO Implement the required code
  });
});
