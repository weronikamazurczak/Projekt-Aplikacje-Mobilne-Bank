/**
 *
 * @param defaultValue
 * @param wait Wait Time for Debounce
 * @param options options object default false
 * @returns `[value, setValue]` value after update and setter function
 */
export declare function useDebouncedState<T = any>(defaultValue: T, wait: number, options?: {
    leading: boolean;
}): readonly [T, (newValue: T) => void];
//# sourceMappingURL=index.d.ts.map