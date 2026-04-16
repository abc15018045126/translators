import { PronunciationSpeed, TranslationResult } from "../types";
import BingTranslator from "./bing";
import GoogleTranslator from "./google";
export declare type HybridSupportedTranslators = "BingTranslate" | "GoogleTranslate";
export declare type HybridConfig = {
    selections: Selections;
    translators: HybridSupportedTranslators[];
};
export declare type Selections = Record<keyof TranslationResult, HybridSupportedTranslators>;
declare class HybridTranslator {
    channel: any;
    /**
     * Hybrid translator config.
     */
    CONFIG: HybridConfig;
    REAL_TRANSLATORS: {
        BingTranslate: BingTranslator;
        GoogleTranslate: GoogleTranslator;
    };
    MAIN_TRANSLATOR: HybridSupportedTranslators;
    private cache;
    private inflight;
    private stats;
    constructor(config: HybridConfig, channel: any);
    /**
     * Warm up translators in the background to reduce cold start latency
     */
    private warmUpTranslators;
    /**
     * Update config.
     *
     * @param {Object} config to use.
     */
    useConfig(config: HybridConfig): void;
    /**
     * Get translators that support given source language and target language.
     *
     * @param from source language
     * @param to target language
     *
     * @returns available translators
     */
    getAvailableTranslatorsFor(from: string, to: string): HybridSupportedTranslators[];
    /**
     * Update hybrid translator config when language setting changed.
     *
     * @param from source language
     * @param to target language
     *
     * @returns new config
     */
    updateConfigFor(from: string, to: string): HybridConfig;
    /**
     * Detect language of given text.
     *
     * @param text text
     *
     * @returns Promise of language of given text
     */
    detect(text: string): Promise<any>;
    /**
     * Check if key exists in cache
     */
    hasInCache(key: string): boolean;
    /**
     * Single translation without batching - used internally by batcher.
     *
     * @param text text to translate
     * @param from source language
     * @param to target language
     *
     * @returns {Promise<Object>} translation Promise
     */
    translateSingle(text: string, from: string, to: string): Promise<TranslationResult>;
    /**
     * Hybrid translate with batching and smart prefetching for improved performance.
     *
     * @param text text to translate
     * @param from source language
     * @param to target language
     *
     * @returns result Promise
     */
    translate(text: string, from: string, to: string): Promise<TranslationResult>;
    /**
     * Pronounce given text.
     *
     * @param text text to pronounce
     * @param language language of text
     * @param speed "fast" or "slow"
     *
     * @returns pronounce finished
     */
    pronounce(text: string, language: string, speed: PronunciationSpeed): Promise<void>;
    /**
     * Pause pronounce.
     */
    stopPronounce(): Promise<void>;
    /**
     * Get cache statistics
     */
    getCacheStats(): {
        size: number;
        maxSize: number;
        ttl: number;
    };
    /**
     * Get performance statistics from all translators
     */
    getPerformanceStats(): any;
    /**
     * Cleanup all translator resources
     */
    cleanup(): Promise<void>;
    /**
     * Check if a value has meaningful content.
     *
     * @param value The value to check
     * @returns true if the value has meaningful content, false otherwise
     */
    private hasValue;
}
export default HybridTranslator;
