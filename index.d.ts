import * as React from "react";
import * as ReactNative from "react-native";

export interface SwipeCardsProperties {
  cards: any[];
  cardKey?: string;
  hasMaybeAction?: boolean;
  loop?: boolean;
  onLoop?: () => void;
  allowGestureTermination?: boolean;
  stack?: boolean;
  stackGuid?: string;
  stackDepth?: number;
  stackOffsetX?: number;
  stackOffsetY?: number;
  renderNoMoreCards?: () => JSX.Element | null;
  showYup?: boolean;
  showMaybe?: boolean;
  showNope?: boolean;
  handleYup?: (data: any) => void;
  handleMaybe?: (data: any) => void;
  handleNope?: (data: any) => void;
  yupText?: string;
  yupView?: JSX.Element;
  maybeText?: string;
  maybeView?: JSX.Element;
  nopeText?: string;
  noView?: JSX.Element;
  onClickHandler?: (data: any) => void;
  renderCard: (data: any) => JSX.Element | null;
  renderYupCardOverlay?: (data: any) => JSX.Element | null;
  renderNopeCardOverlay?: (data: any) => JSX.Element | null;
  cardRemoved?: (index: number) => void;
  dragY?: boolean;
  smoothTransition?: boolean;
  onDragStart?: () => void;
  onDragRelease?: () => void;
}

export class SwipeCards extends React.Component<SwipeCardsProperties, any> {}

export as namespace SwipeCards;

export default SwipeCards;
