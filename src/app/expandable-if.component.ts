import {ChangeDetectorRef, Component, EventEmitter, HostBinding, Input, Output} from '@angular/core';

/**
 * ```html
 *   <atlas-expandable-if></atlas-expandable-if>
 * ```
 * A content parent that has both a header and a body. Use the `header` and `body` attributes on the child content to
 * indicate which view your child content should appear in.
 * Unlike [[ExpandableComponent]] (`atlas-expandable`), this component shows/hides the `body` content via `ngIf`.
 * Use the [[canExpand]] property to indicate whether the component is currently expandable.
 */
@Component({
  selector: 'app-expandable-if',
  template: `
    <div class="header {{headerClass}}" (click)="clickHeader($event)" [class.extra-margin]="!canExpand && preserveSpaceForIcon">
      <img class="expand"   *ngIf="canExpand && !isExpanded"/>
      <img class="collapse" *ngIf="canExpand && isExpanded"/>

      <ng-content select="[header]"></ng-content>
    </div>
    <ng-container *ngIf="isExpanded">
      <ng-content select="[body]"></ng-content>
    </ng-container>
  `,
  styles: [`
    :host {
      display: block;
    }
    .header {
      display: flex;
      flex-direction: row;
      align-items: center;
      cursor: pointer;
    }
    .header > img {
      width: 12px;
      height: 12px;
      margin-right: 4px;
    }
    .extra-margin {
      margin-left: 16px;
    }
  `]
})
export class ExpandableIfComponent {
  @Input() preserveSpaceForIcon: boolean = true;
  @Input() canExpand: boolean = true;
  @Input() headerClass: string = '';
  @Output() isExpandedChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  isExpanding = false;

  constructor(private changeDetector: ChangeDetectorRef) { }

  private _isExpanded = false;
  get isExpanded(): boolean { return this._isExpanded; }
  @Input() set isExpanded(value: boolean) {
    if (this._isExpanded !== value) {
      this._isExpanded = value;
      this.isExpandedChange.emit(value);
      this.changeDetector.detectChanges();
    }
  }

  @HostBinding('class.expanded') get hasClassExpanded(): boolean { return this.isExpanded && !this.isExpanding; }
  @HostBinding('class.collapsed') get hasClassCollapsed(): boolean { return !this.isExpanded && !this.isExpanding; }
  @HostBinding('class.loading') get hasClassLoading(): boolean { return this.isExpanding; }

  clickHeader(event: MouseEvent) {
    if (!event.shiftKey) {
      event.preventDefault();
      event.stopPropagation();
      this.toggleExpand();
    }
  }

  toggleExpand() {
    if (this.isExpanding) { return; }
    if (this.isExpanded || this.canExpand) {
      if (this.isExpanded) {
        this.collapse();
      }
      else {
        this.expand();
      }
    }
  }
  expand() {
    this.isExpanded = true;
  }
  collapse() {
    this.isExpanded = false;
  }
}
