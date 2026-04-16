# @abc15018045126/translators

🚀 一个高性能、全平台兼容的翻译 SDK，深度集成了 Google 和 Bing 翻译引擎，专为 Manifest V3 和高性能场景设计。

[English Documentation](README.md)

## 特性

- **三种模式**：独立使用 Google、独立使用 Bing，或使用强大的 **Hybrid（混合）模式**。
- **混合策略**：支持灵活配置。你可以用 Google 翻译正文，用 Bing 查询详细词典和例句。
- **并发控制**：内置请求去重机制（In-flight deduplication），并支持并发锁防止冗余的 Token 更新。
- **全平台支持**：无需修改即可运行于 Chrome 扩展 (MV3)、Node.js (18+)、Webview 和现代浏览器。
- **零配置缓存**：内置 LRU 缓存系统，翻译完全相同的文本时秒回结果。

## 安装

```bash
npm install @abc15018045126/translators
```

## 核心模式使用指南

### 1. Google 模式 (GoogleTranslator)
最经典的选择，支持自动检测语言、音标输出及 TKK 令牌自动更新。

```javascript
import { GoogleTranslator } from '@abc15018045126/translators';

const google = new GoogleTranslator();
const res = await google.translate("Stay hungry, stay foolish", "auto", "zh-CN");
console.log(google.mainMeaning); // "求知若渴，虚心若愚"
```

### 2. Bing 模式 (BingTranslator)
极佳的备选方案，在某些网络环境下比 Google 更稳定，且提供了非常详尽的例句和词典解析。

```javascript
import { BingTranslator } from '@abc15018045126/translators';

const bing = new BingTranslator();
const res = await bing.translate("Magic", "en", "zh-CN");
console.log(res.detailedMeanings); // 会输出名词、形容词等多种词义
```

### 3. 混合模式 (HybridTranslator) —— 推荐
这是本库最强大的功能。它可以让你组合不同引擎的优势。例如：用 Google 翻译主要的释义，但使用 Bing 获取更丰富的例句和词典。

```javascript
import { HybridTranslator } from '@abc15018045126/translators';

const hybrid = new HybridTranslator();
const res = await hybrid.translate("Integrity", "auto", "zh-CN");

console.log(res.mainMeaning);
console.log(res.examples);
```

## 致谢

本项目核心逻辑基于 [Meapri/EdgeTranslate-v3](https://github.com/Meapri/EdgeTranslate-v3) 开发。我们在其基础上进行了代码现代重构，增加了 MV3 适配和性能优化。

## 许可证

[MIT](LICENSE) © abc15018045126
