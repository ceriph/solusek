import {Injectable, Inject} from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';
import {CustomScrollConfig} from "./scroll-config";

export declare type TargetElement = HTMLElement | string;

@Injectable()
export class CustomScrollService {

  private document: Document;
  private body: HTMLBodyElement;

  public constructor(@Inject(DOCUMENT) document: Document) {
    this.document = document;
    this.body = <HTMLBodyElement>document.body;
  }

  public scrollToElement(targetElementOrId: TargetElement, pageScrollOffset: number): void {
    let anchorTarget = this.determineElement(targetElementOrId);
    if (anchorTarget !== null) {

      setScrollTop(this.body);
      setScrollTop(this.document.documentElement);
      setScrollTop(this.document.body.parentNode);
    }

    function setScrollTop(container: any) {
      if (container && typeof container.scrollTop !== 'undefined') {
        container.scrollTop =
          anchorTarget.offsetTop -
          anchorTarget.scrollTop +
          anchorTarget.clientTop +
          (pageScrollOffset || CustomScrollConfig.defaultScrollOffset);
      }
    }
  }

  private determineElement(targetElementOrId: TargetElement): HTMLElement {
    if (typeof targetElementOrId === 'string') {
      return this.document.getElementById((<string>targetElementOrId).substr(1));
    } else {
      return <HTMLElement>targetElementOrId;
    }
  }
}
