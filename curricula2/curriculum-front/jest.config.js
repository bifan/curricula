// Jest 简洁的测试框架
// 尚未真正投入使用...

module.exports = {
  // 操作的目标
  moduleFileExtensions: ["js", "jsx", "json", "vue"],
  // 把正则匹配目标, 交给对应的处理程序(transformer, 转换器)
  transform: {
    "^.+\\.vue$": "vue-jest",
    ".+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$":
      "jest-transform-stub",
    "^.+\\.jsx?$": "babel-jest"
  },
  // 需要忽略的路径
  transformIgnorePatterns: ["/node_modules/"],
  //
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  snapshotSerializers: ["jest-serializer-vue"],
  testMatch: [
    "**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)"
  ],
  testURL: "http://localhost/",
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname"
  ]
};

// 测试类型, e2e → End to End, 测试整个流程是否按预期运行
// 端到端, 从头到尾, 模拟正常使用

/*

/// 常用断言(期望)

expect(1 + 1).toBe(2); // 判断相等
expect({bar: "bar"}).toEqual({bar: "bar"}); // 判断引用类型相等(会递归深度)
expect(1).not.toBe(2); // 不相等
expect(0).toBeNull(); // null
expect(f).toBeTruthy(); // true
expect(f).toBeFalsy(); // false
expecdt(value).toBeCloseTo(0.3); // 浮点数相等(约等于)
expect(b).toHaveProperty("hi") // 是否包含属性

expect(3).toBeGreaterThan(2); // 大于
expect(3).toBeGreaterThanOrEqual(2); // 大于等于
expect(3).toBeLessThan(2); // 小于
expect(3).toBeLessThanOrEqual(2) // 小于等于

/// 判断Promise 返回值
expect(Promise.resolve("a")).resolves.toBe("a");
expect(Promise.reject("b")).reject.toBe("b");

/// 包含
expect([1, 2]).toContain(1);
expect("123").not.toContain("4");
expect([{}]).toContainEqual({});

/// 匹配
expect("A").toMatch(/\/w+/);
expect({1:1, 2:2}).toMachObjecdt({1:1});
*/
