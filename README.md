# @abc15018045126/translators

🚀 A high-performance, multi-engine translation SDK for Google & Bing, specifically designed for Manifest V3 and high-concurrency environments.

[中文文档](README_zh.md)

## Features

- **Three Engine Modes**: Use Google, Bing, or the powerful **Hybrid** mode.
- **Hybrid Strategy**: Highly configurable. Translate main text with Google while fetching rich dictionary data and examples from Bing.
- **Concurrency Control**: Built-in request deduplication (In-flight deduplication) and concurrency locks to save bandwidth and prevent redundant token updates.
- **Full Platform Compatibility**: Native support for Chrome Extension (MV3), Node.js (18+), Webview, and modern browsers.
- **Smart Caching**: Zero-config LRU cache system for lightning-fast results on repeated queries.

## Installation

```bash
npm install @abc15018045126/translators
```

## Core Usage

### 1. Google Mode (GoogleTranslator)
The classic choice with auto-detection, pronunciation, and automatic TKK update logic.

```javascript
import { GoogleTranslator } from '@abc15018045126/translators';

const google = new GoogleTranslator();
const res = await google.translate("Stay hungry, stay foolish", "auto", "zh-CN");
console.log(res.mainMeaning); // "求知若渴，虚心若愚"
```

### 2. Bing Mode (BingTranslator)
A stable alternative that often provides more detailed examples and dictionary definitions in certain regions.

```javascript
import { BingTranslator } from '@abc15018045126/translators';

const bing = new BingTranslator();
const res = await bing.translate("Magic", "en", "zh-CN");
console.log(res.detailedMeanings); // Detailed POS definitions and synonyms
```

### 3. Hybrid Mode (HybridTranslator) —— Recommended
The highlight of this SDK. It allows you to combine the best of both worlds.

```javascript
import { HybridTranslator } from '@abc15018045126/translators';

const hybrid = new HybridTranslator();

// In default config, it intelligently allocates request components
const res = await hybrid.translate("Integrity", "auto", "zh-CN");

console.log(res.mainMeaning); // From Google (usually)
console.log(res.examples);    // From Bing (usually)
```

## Advanced Features

### Warm-Up (Optional)
Reduce first-request latency by pre-fetching necessary tokens:
```javascript
await translator.warmUp();
```

### Pronunciation
Play high-quality audio for any text:
```javascript
await google.pronounce("Hello", "en", "normal");
```

## Credits

This SDK's core scraping and translation logic is based on the [Meapri/EdgeTranslate-v3](https://github.com/Meapri/EdgeTranslate-v3) project. We've modernized the codebase, added MV3 support, and implemented performance optimizations.

## License

[MIT](LICENSE) © abc15018045126
