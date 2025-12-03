//components/results-table/results-table.component.ts

// TypeScript
import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {InventoryItem, InventoryItemSortableFields, PeakAvailability} from '../../models/inventory-search.models';
import { InventorySearchApiService } from '../../services/inventory-search-api.service';
import { finalize } from 'rxjs/operators';


@Component({
  selector: 'inventory-results-table',
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false
})
export class ResultsTableComponent {
  @Input() items: InventoryItem[] | null = [];
  @Input() total = 0;
  @Input() pageSize = 20;

  @Output() sort = new EventEmitter<keyof InventoryItem>();
  @Output() pageChange = new EventEmitter<number>();

  pageIndex = 0;
  expanded: Record<string, boolean> = {};
  // Added: keep per-part peak availability and loading state
  peakLoading: Record<string, boolean> = {};
  peakByPart: Record<string, PeakAvailability | null> = {};
  // Simple inline error message
  errorMessage: string | null = null;
  currentSort: { field: InventoryItemSortableFields; direction: 'asc' | 'desc' } | null = null;


  headers: Array<{ label: string; field: InventoryItemSortableFields; sortable?: boolean } | { label: string; field: keyof InventoryItem; sortable?: boolean }> = [
    { label: 'Part Number', field: 'partNumber', sortable: true},
    { label: 'Supplier SKU', field: 'supplierSku', sortable: false },
    { label: 'Description', field: 'description', sortable: true },
    { label: 'Branch', field: 'branch', sortable: true },
    { label: 'Available', field: 'availableQty', sortable: true },
    { label: 'UOM', field: 'uom', sortable: true },
    { label: 'Lead Time (days)', field: 'leadTimeDays', sortable: true },
    { label: 'Last Purchase', field: 'lastPurchaseDate', sortable: true },
  ];

  constructor(
    private readonly api: InventorySearchApiService,
  ) {}

  onHeaderClick(field: InventoryItemSortableFields) {
    // Toggle sort direction or set new sort field
    if (this.currentSort?.field === field) {
      this.currentSort = {
        field,
        direction: this.currentSort.direction === 'asc' ? 'desc' : 'asc'
      };
    } else {
      this.currentSort = { field, direction: 'asc' };
    }
    this.pageIndex = 0;
    this.sort.emit(field);
  }

  toggleExpand(item: InventoryItem) {
    // Toggle expanded state for the given item
    const key = this.rowKey(item);
    this.expanded[key] = !this.expanded[key];
  }


  // Fetch peak availability for a given item/part
  fetchPeakAvailability(item: InventoryItem) {
    // Needs to call the API to get the peak availability for the part
    // on an error
    // Failed to load peak availability along with any error returned by the API

  }

  // Convenience: fetch and expand inline panel
  onPeakButton(item: InventoryItem) {

    // Expand the row if not expanded

  }

  totalPages(total: number, size: number) {
    return Math.max(1, Math.ceil((total ?? 0) / (size || 1)));
  }

  goTo(page: number) {
    // go to specific page
  }
}
