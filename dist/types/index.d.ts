import BingTranslator from "./translators/bing";
import GoogleTranslator from "./translators/google";
import HybridTranslator from "./translators/hybrid";
import axios from "./axios";
/**
 * Supported languages mapping.
 * Format: [languageCode, languageName]
 */
declare const LANGUAGES: Record<string, string>;
/**
 * Export all translator classes and utilities
 */
export { axios, LANGUAGES, HybridTranslator, BingTranslator, GoogleTranslator, };
export type { HybridSupportedTranslators, HybridConfig, Selections } from "./translators/hybrid";
export * from "./types";
