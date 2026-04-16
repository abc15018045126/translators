import { Pool, Agent } from "undici";
/**
 * Connection pool manager for different hosts
 */
declare class PoolManager {
    private pools;
    private agent;
    constructor();
    getPool(origin: string): Pool;
    getAgent(): Agent;
    closeAll(): Promise<void>;
}
declare const poolManager: PoolManager;
/**
 * High-performance HTTP client with connection pooling
 */
declare const undiciClient: any;
export default undiciClient;
export { poolManager };
