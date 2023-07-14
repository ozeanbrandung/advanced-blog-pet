// page adress - string; scrooll top position - number
// { 'somePage': 213 }
type PageAddress = string;
type scrollTopPosition = number;
type ScrollPositionInfo = Record<PageAddress, scrollTopPosition>

export interface PreservedScrollPositionSchema {
    scroll: ScrollPositionInfo;
}