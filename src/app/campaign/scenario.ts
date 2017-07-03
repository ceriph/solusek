export class Scenario {
  title: string;
  events: GameEvent[];
}

export class GameEvent {
  type: GameEventType;
  desc: string;
}

export enum GameEventType {
  Story,
  Encounter,
  Travel,
  Leisure
}
