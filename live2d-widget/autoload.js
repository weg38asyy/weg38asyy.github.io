let live2d_path="/live2d-widget/";function loadExternalResource(s,i){return new Promise((e,t)=>{let l;"css"===i?((l=document.createElement("link")).rel="stylesheet",l.href=s):"js"===i&&((l=document.createElement("script")).src=s),l&&(l.onload=()=>e(s),l.onerror=()=>t(s),document.head.appendChild(l))})}768<=screen.width&&Promise.all([loadExternalResource(live2d_path+"waifu.css","css"),loadExternalResource(live2d_path+"live2d.min.js","js"),loadExternalResource(live2d_path+"waifu-tips.js","js")]).then(()=>{initWidget({waifuPath:live2d_path+"waifu-tips.json",cdnPath:"https://cdn.jsdelivr.net/gh/fghrsh/live2d_api/"})}),console.log(`
うるさい!うるさい!
うるさ―い!!
　　　　　　／⌒ヽ
　　　　　　　　 ｿ
　　／￣￣￣￣ﾞ＜
　／／　　　　　 ＼
///　 |　|　　　ヽヽ
///　/ |　| ﾊ|ヽ　| |
ﾚ｜ ﾒ､ﾚ| Ｎｿ／ |　| |
| ﾚｲｱﾃﾍ| |イ示ﾏ|ﾊ | |
|/||ﾋOｿヽ| 込Oﾉ｜Ｖ |
　|ﾊ　 、　　　｜｜ |
　｜＼　―　　 / /　|
　｜| ＞ー- イ/ /　 |
　｜|/ /へ＿// / ＼ |
　｜|　Lニ／/ /　／ヽ
　∧|＼L∠_/ /-イ　 |
　|　 (_( /／　｜　 |
　ヽノ(x)＼＿_／　　|
　//　/~ヽ　 ヽ　　 |
`);