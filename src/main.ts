import p5 from "p5";

new p5((p: p5) => {
  p.setup = () => {
    // 初期設定・動きのない描画
    // 1度だけ実行される

    p.createCanvas(p.windowWidth, p.windowHeight);
  }

  p.draw = () => {
    // アニメーションのような、動く描画
    // 繰り返し実行される
  }
})