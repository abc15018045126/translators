# @abc15018045126/translators

🚀 一个高性能、全平台兼容的翻译 SDK，支持 Google 和 Bing 引擎。

本库提取自 [EdgeTranslate](https://github.com/Meapri/EdgeTranslate-v3) 的核心逻辑，经过深度重构，完美适配 Chrome Manifest V3、Node.js 以及现代浏览器环境。

## 特性

- **多引擎支持**：内置 Google 和 Bing 翻译引擎（已移除 DeepL 以保持轻量）。
- **MV3 兼容**：完全适配 Chrome 扩展的 Service Worker 环境，无 DOM API 依赖。
- **并发控制**：内置请求去重机制（In-flight deduplication），防止重复请求。
- **智能缓存**：内置 LRU 缓存系统，显著提升翻译速度。
- **自动降级**：Google 引擎支持 TKK 自动更新与失败重试逻辑。
- **多端运行**：支持 Browser (fetch), Node.js (undici) 以及 Webview。

## 安装

```bash
npm install @abc15018045126/translators
```

## 快速开始

```javascript
import { GoogleTranslator, BingTranslator } from '@abc15018045126/translators';

const translator = new GoogleTranslator();

async function translate() {
  const result = await translator.translate("Hello World", "en", "zh-CN");
  console.log(result.mainMeaning); // "你好，世界"
}

translate();
```

## 致谢

本项目核心逻辑基于 [Meapri/EdgeTranslate-v3](https://github.com/Meapri/EdgeTranslate-v3) 开发并进行二次维护。感谢原作者提供的优秀地基。

## 许可证

[MIT](LICENSE) © abc15018045126
