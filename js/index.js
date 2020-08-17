/*
 * @Description: 
 * @Date: 2020-08-17 22:54:22 +0800
 * @Author: JackChouMine
 * @LastEditTime: 2020-08-18 00:39:33 +0800
 * @LastEditors: JackChouMine
 */
function my_clock (el) {
  const today = new Date()
  const h = today.getHours()
  let m = today.getMinutes()
  let s = today.getSeconds()
  m = m < 10 ? `0${m}` : m
  s = s < 10 ? `0${s}` : s
  el.innerHTML = `${h}:${m}:${s}`
  setTimeout(() => { my_clock(el) }, 1000, el)
}
const clockDiv = document.getElementById('clock-div')
my_clock(clockDiv)