//services/inventory-search-api.service.ts

// TypeScript
import {HttpClient, HttpParams} from '@angular/common/http';
import {Inject, Injectable, InjectionToken} from '@angular/core';
import {Observable} from 'rxjs';
import {shareReplay} from 'rxjs/operators';
import {
  ApiEnvelope,
  InventorySearchQuery,
  PagedInventoryResponse,
  PeakAvailability,
} from '../models/inventory-search.models';

export const INVENTORY_API_BASE = new InjectionToken<string>('INVENTORY_API_BASE');

// TTL 60s, keep up to 5 cached queries
const CACHE_TTL_MS = 60_000;
const CACHE_MAX_ENTRIES = 5;

interface CacheEntry<T> {
  key: string;
  expiry: number;
  obs$: Observable<T>;
}

@Injectable({ providedIn: 'root' })
export class InventorySearchApiService {
  private cache: CacheEntry<ApiEnvelope<PagedInventoryResponse>>[] = [];
  private peakCache: CacheEntry<ApiEnvelope<PeakAvailability>>[] = [];

  constructor(
    private readonly http: HttpClient,
    @Inject(INVENTORY_API_BASE) private readonly baseUrl: string
  ) {}

  search(query: InventorySearchQuery): Observable<ApiEnvelope<PagedInventoryResponse>> {
// TODO Implement the required code
  }

  getPeakAvailability(partNumber: string): Observable<ApiEnvelope<PeakAvailability>> {
// TODO Implement the required code
  }

  private remember<T>(
    cache: CacheEntry<T>[],
    entry: { key: string; obs$: Observable<T> }
  ) {
    // Evict if over capacity
// TODO Implement the required code
  }

  private cacheKey(q: InventorySearchQuery): string {
// TODO Implement the required code
  }
}
