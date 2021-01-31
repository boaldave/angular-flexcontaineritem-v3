import { Directive, ElementRef, HostBinding, Input } from "@angular/core";

@Directive({
  selector: "[bi-flex-direction]"
})
export class FlexDirectionDirective {
  private _flexDirection = 'column';
  @Input() 
  set flexDirection(value) {
    this._flexDirection = value;
    console.log('log:this._flexDirection =', value);
  };
  get flexDirection() {
    return this._flexDirection;
  };

  constructor(el: ElementRef) {
    console.log('log:Directive Created')
    el.nativeElement.style.display = "flex";
  }

  @HostBinding('style.flexDirection')
  get cssClasses() {
      return this.flexDirection;
  }

}
