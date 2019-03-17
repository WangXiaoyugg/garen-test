/**
 * reference link  https://webpack.docschina.org/guides/dependency-management/
 * require.context(searchDir, hasRecursionSearchSubDir, regexPattten)
 * @param searchDir string 搜索的文件夹目录
 * @param hasRecursionSearchSubDir boolean 是否递归搜索子目录
 * @param regexPatten Regex 匹配文件的正则表达式
 * @return context 
 * ƒ webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
   }
   context.keys
   ƒ webpackContextKeys() {
	    return Object.keys(map);
   }
   context.keys() 返回 ["./alipay.svg", "./baidu.svg", "./qq.svg", "./wechat.svg"]
 * */

let importAll = (requireContext) => {
    requireContext.keys().forEach(requireContext)
};
let context = require.context('../icons', true, /\.svg$/)

try {
    importAll(
        // （创建出）一个 context，其中文件来自 icons 目录，require 以 `.svg` 结尾。
        context
    );
} catch (error) {
    console.log(error)
}