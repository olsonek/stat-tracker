export interface CounterState {
    id: number;
    value: number;
    increment?: number;
    minValue?: number;
    maxValue?: number;
    maxValueDisplay?: number;
    description?: string;
}