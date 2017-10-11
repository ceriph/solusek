class StoryElement {
  type: ElementType;
  name: string;
  description: string;
  public: boolean = true;
  happened: boolean = true;
  children: StoryElement[];
}

enum ElementType {
  ARC,
  MILESTONE,
  GROUP,
  LOCATION,
  NOTE,
  PLAYER,
  ALLY,
  VILLAIN,
  ACQUAINTANCE
}
