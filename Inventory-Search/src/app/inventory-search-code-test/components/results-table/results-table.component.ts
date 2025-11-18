//components/results-table/results-table.component.ts

// TypeScript
import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {InventoryItem, PeakAvailability} from '../../models/inventory-search.models';
import { InventorySearchApiService } from '../../services/inventory-search-api.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'inv-results-table',
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false
})
export class ResultsTableComponent {

// TODO Implement the required code

  constructor(
// TODO Implement the required code
  ) {}


// TODO Implement the required code

}
