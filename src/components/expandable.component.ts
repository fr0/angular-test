/**
 * ```html
 *   <atlas-expandable></atlas-expandable>
 * ```
 * A content parent that has both a header and a body. Use the `header` and `body` attributes on the child content to
 * indicate which view your child content should appear in.
 * Unlike [[ExpandableIfComponent]] (`atlas-expandable-if`), this component shows/hides the `body` content via CSS.
 * If the [[dynamic]] property is `true` (default), the item will only be expandable if the `body` element is present.
 * You may set the [[canExpand]] property to `false` to indicate that it shouldn't be expandable.
 */
import {IExpandable} from './expandable-if.component';
import {ChangeDetectorRef, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-expandable',
  template: `
    <div class="header {{headerClass}}" (click)="clickHeader($event)" [class.extra-margin]="!canExpand && preserveSpaceForIcon">
      <img class="expand"   [attr.src]="expandIcon" *ngIf="!overrideIcon && canExpand && (!dynamic || children?.children.length) && !isExpanded && !isExpanding"/>
      <img class="collapse" [attr.src]="collapseIcon" *ngIf="!overrideIcon && canExpand && (!dynamic || children?.children.length) && isExpanded && !isExpanding"/>
      <img class="loading"  [attr.src]="loadingIcon" *ngIf="!overrideIcon && isExpanding"/>
      <img class="override" [attr.src]="overrideIcon" *ngIf="overrideIcon"/>
      <ng-content select="[header]"></ng-content>
    </div>
    <div #children [class.collapsed]="!isExpanded" [class.expanded]="isExpanded">
      <ng-content select="[body]"></ng-content>
    </div>
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
    .collapsed {
      display: none;
    }
    .expanded {
      display: block;
    }
    .extra-margin {
      margin-left: 16px;
    }
  `]
})
export class ExpandableComponent implements IExpandable {
  /**
   * If true, the expand/collapse button will show/hide based on whether there is any
   * actual content with the body attribute. Defaults to true.
   */
  @Input() dynamic = true;
  @Input() preserveSpaceForIcon = true;
  @Input() canExpand = true;
  @Input() expandIcon = '/assets/plus.svg';
  @Input() collapseIcon = '/assets/minus.svg';
  @Input() loadingIcon = '/assets/loading.gif';
  @Input() delayedExpand = false;
  @Input() overrideIcon: string|false = false;
  @Input() headerClass = '';
  @Output() isExpandedChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  isExpanding = false;

  constructor(private changeDetector: ChangeDetectorRef) { }

  private _isExpanded = false;
  get isExpanded(): boolean { return this._isExpanded; }
  @Input() set isExpanded(value: boolean) {
    if (this._isExpanded !== value) {
      this._isExpanded = value;
      this.isExpandedChange.emit(value);
      this.changeDetector.markForCheck();
    }
  }

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
    if (this.delayedExpand) {
      this.isExpanding = true;
      setTimeout(() => {
        this.isExpanding = false;
        this.isExpanded = true;
      });
      this.changeDetector.markForCheck();
    }
    else {
      this.isExpanded = true;
    }
  }
  collapse() {
    this.isExpanded = false;
  }
}
