import {Component, Input, OnInit} from "@angular/core";

@Component({
  selector: 'story-element',
  templateUrl: './story-element.component.html',
  styleUrls: ['./story-element.component.css']
})
export class StoryElementComponent implements OnInit {

  @Input()
  storyElement: StoryElement;

  showDetail = false;

  constructor() { }

  ngOnInit() {
  }

  toggleDetail() {
    this.showDetail = !this.showDetail;
  }
}
