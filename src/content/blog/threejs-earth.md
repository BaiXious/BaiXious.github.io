---
title: 'Three.js 实时地球可视化开发记'
description: '分享如何使用 Three.js 创建一个炫酷的实时活动地球效果。'
pubDate: 2024-02-10
heroImage: '/placeholder-hero.jpg'
tags: ['Three.js', 'WebGL', '可视化', 'JavaScript']
---

最近我使用 Three.js 开发了一个实时活动地球可视化效果，这篇文章记录一下开发过程中的关键要点。

## 核心功能

这个地球可视化项目包含以下特性：

- 🌍 **3D 地球模型**：使用程序生成的纹理和网格线
- ⭐ **动态星空**：3000+ 随机分布的星星
- 💫 **大气层辉光**：使用 ShaderMaterial 实现边缘发光
- 📍 **活动标记**：150个不同类型的活动点
- 🔗 **数据连接线**：弧形贝塞尔曲线展示传输路径

## 关键技术点

### 经纬度转 3D 坐标

```javascript
const phi = (90 - lat) * (Math.PI / 180);
const theta = (lon + 180) * (Math.PI / 180);
const radius = 5;

const x = -(radius * Math.sin(phi) * Math.cos(theta));
const y = radius * Math.cos(phi);
const z = radius * Math.sin(phi) * Math.sin(theta));
```

### 弧形连接线

使用二次贝塞尔曲线连接两个标记点：

```javascript
const curve = new THREE.QuadraticBezierCurve3(
  startMarker.position,
  startMarker.position.clone()
    .add(endMarker.position)
    .multiplyScalar(0.5)
    .normalize()
    .multiplyScalar(7),
  endMarker.position
);
```

## 性能优化

1. 使用 `BufferGeometry` 高效渲染大量粒子
2. 标记点使用脉冲动画而非复杂的骨骼动画
3. 星空使用 Points 而非单个 Mesh

## 在线演示

🔗 [点击这里查看效果](https://baixious.github.io/openclaw-space/)

欢迎访问仓库查看完整代码！
