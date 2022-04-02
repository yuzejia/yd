//

// let angle = function (t: string) {
//   let list: Number[] = t.split(":").map((m: String) => Number(m));
//   console.log(list);
//   // 计算  时 分 之间的维度
//   let s: Number = list[0];
//   const f: Number = list[1];
//   console.log(s, "----", f);
//   if (s <= 12) {
//     s = Number(s) + 12;
//   }

//   let sum = Number(s) * 15 - Number(f) * 6;
//   let s2 = Math.abs(sum);
//   console.log(s2);

//   return 360 - s2 < s2 ? 360 - s2 : s2;
// };

let angle = function (t) {
  let list = t.split(":").map((m) => Number(m));
  console.log(list);
  let s = list[0]
  let f = list[1]

  if (s > 12) {
    s = s - 12
  }

  // 时针读数
  let sd = (360 / 12) * s

  // 分针读数
  let fd = (360 / 60) * f

  // 求 时针跟随 分针运动的偏移量
  let x = (30 / 60) * f

  console.log(sd, '---', fd, "---", x);
  let sr = sd - fd + x;

  let m = Math.abs(sr)
  console.log(m);
  return 360 - m < m ? 360 - m : m
  let sc = 360 - m < m ? 360 - m : m;
  return Math.round(sc)
}

let a = angle("12:15");
console.log(a);


// 设 时针的度数 x
// let x = (360 / f) * 5

// x/5 = 360/f

// 设 分针时间 f  读数 fd
// let fd = 360 / 60 * f

// 设 时针 为 s 读数 为 sd
// let sd = 360 / s

// 如果   rs = (sd - fd + x)  会存在负值 取绝对值
//  360 - rs < rs ? 360-rs : rs;


// f / 60(360 / 12) = 15

// 60分 => 360 => 15
//  15/60 * f