declare type Clock = () => number;
export interface LRUOptions {
    max: number;
    ttl?: number;
    now?: Clock;
}
/**
 * Minimal LRU with optional TTL. O(1) get/set, prunes on set when over capacity.
 */
export declare class LRUCache<K, V> {
    private map;
    private max;
    private ttl;
    private now;
    constructor(opts: LRUOptions);
    get(key: K): V | undefined;
    set(key: K, value: V): void;
    has(key: K): boolean;
    size(): number;
    clear(): void;
}
export {};
