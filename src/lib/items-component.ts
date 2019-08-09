import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-items',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="items">
      <div class="items" *ngFor="let item of items; trackBy:trackByFn">
        {{item.name}}
      </div>
    </div>
  `
})
export class ItemsComponent implements OnChanges {
  @Input() count = 0;
  items = [];

  constructor(private cd: ChangeDetectorRef) {  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.count) {
      this.items = new Array(this.count);
      for (let i = 0; i < this.count; i++) {
        this.items[i] = {name: `item${i}`};
      }
      this.cd.markForCheck();
    }
  }
  trackByFn(item, index) {
    return item.name;
  }
}
