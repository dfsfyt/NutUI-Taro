export default defineAppConfig({
  pages: [
    "pages/courses/courses",
    "pages/homework/homework",
    "pages/score/score",
    "pages/my/my"
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black"
  },
  lazyCodeLoading: "requiredComponents",
  tabBar: {
    selectedColor: '#fa2c19',
    list: [
      {
        pagePath: "pages/courses/courses",
        text: "课程"
      },
      {
        pagePath: "pages/homework/homework",
        text: "作业"
      },
      {
        pagePath: "pages/score/score",
        text: "成绩"
      },
      {
        pagePath: "pages/my/my",
        text: "我的"
      }
    ]
  }
})
