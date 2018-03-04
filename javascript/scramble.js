class Paper {
  constructor () {
    this.sections = []
    this.qCount = 0
  }

  increment () {
    this.qCount = this.qCount + 1
    this.sections[this.qCount] = 0
  }
}

var currentPaper = new Paper()

function prebuild (setno) {
  build(setno)
  alert(`Done!`)
}

function build (setno) {
  document.getElementById(`center`).innerHTML += `<br>Set : ${setno}`
  document.getElementById(`maintab`).setAttribute(`border`, `0`)

  var txt = document.getElementById(`tabdiv`).innerHTML

  var emptyLink = document.getElementById(`down`)
  var file = new Blob([txt], {type: `text/plain`})
  emptyLink.href = URL.createObjectURL(file)
  emptyLink.download = `QuestionPaper_${setno}.doc`
  emptyLink.click()

  document.getElementById(`center`).innerHTML = `Question Paper`
}

function removesect () {
  document.qs.removeChild(document.getElementById(`Section${currentPaper.qCount}`))
  document.qs.removeChild(document.getElementById(`i${currentPaper.qCount}`))
  document.qs.removeChild(document.getElementById(`ri${currentPaper.qCount}`))
  document.qs.removeChild(document.getElementById(`chkbox${currentPaper.qCount}`))
  document.qs.removeChild(document.getElementById(`cbs${currentPaper.qCount}`))
  document.qs.removeChild(document.getElementById(`p${currentPaper.qCount}`))

  document.getElementById(`tab`).removeChild(document.getElementById(`t${currentPaper.qCount}`))
  document.getElementById(`tab`).removeChild(document.getElementById(`te${currentPaper.qCount}`))

  currentPaper.qCount = currentPaper.qCount - 1
}

function addsect () {
  currentPaper.increment()

  var fr = document.createElement(`input`)
  fr.setAttribute(`value`, ` Section ${currentPaper.qCount}`)
  fr.setAttribute(`id`, `Section${currentPaper.qCount}`)
  fr.setAttribute(`size`, `8`)
  fr.setAttribute(`onkeyup`, `show()`)
  fr.setAttribute(`onkeypress`, `handle(event)`)
  fr.setAttribute(`onfocus`, `blurrer(), this.name='act'`)

  var qr = document.createElement(`input`)
  qr.setAttribute(`type`, `button`)
  qr.setAttribute(`value`, `add question`)
  qr.setAttribute(`OnClick`, `addques(${currentPaper.qCount})`)
  qr.id = `i${currentPaper.qCount}`

  var rqr = document.createElement(`input`)
  rqr.setAttribute(`type`, `button`)
  rqr.setAttribute(`value`, `remove question`)
  rqr.setAttribute(`OnClick`, `removeques(${currentPaper.qCount})`)
  rqr.id = `ri${currentPaper.qCount}`

  var chkbox = document.createElement(`input`)
  chkbox.setAttribute(`type`, `checkbox`)
  chkbox.setAttribute(`id`, `chkbox${currentPaper.qCount}`)
  chkbox.setAttribute(`checked`, true)

  var cbs = document.createElement(`span`)
  cbs.innerHTML = ` scramble`
  cbs.id = `cbs${currentPaper.qCount}`

  var pr = document.createElement(`p`)
  pr.id = `p${currentPaper.qCount}`

  document.qs.appendChild(fr)
  document.qs.appendChild(qr)
  document.qs.appendChild(rqr)
  document.qs.appendChild(cbs)
  document.qs.appendChild(chkbox)
  document.qs.appendChild(pr)

  // table append

  var tr = document.createElement(`tr`)
  var te = document.createElement(`tr`)

  tr.id = `t${currentPaper.qCount}`
  te.id = `te${currentPaper.qCount}`

  var td = document.createElement(`td`)
  var tde = document.createElement(`td`)
  td.innerHTML = `Section ${currentPaper.qCount}`
  td.id = `td${currentPaper.qCount}`
  tde.id = `tde${currentPaper.qCount}`

  document.getElementById(`tab`).appendChild(tr)
  document.getElementById(`tab`).appendChild(te)

  document.getElementById(`t${currentPaper.qCount}`).appendChild(td)
  document.getElementById(`te${currentPaper.qCount}`).appendChild(tde)

  var tabe = document.createElement(`table`)
  var tabbe = document.createElement(`tbody`)

  tabe.id = `tabe${currentPaper.qCount}`
  tabbe.id = `tabbe${currentPaper.qCount}`

  tabe.setAttribute(`width`, `100%`)
  document.getElementById(`tde${currentPaper.qCount}`).appendChild(tabe)
  document.getElementById(`tabe${currentPaper.qCount}`).appendChild(tabbe)
}

function removeques (ex) {
  document.getElementById(`p${ex}`).removeChild(document.getElementById(`in${ex}.${currentPaper.sections[ex]}`))
  document.getElementById(`p${ex}`).removeChild(document.getElementById(`tx${ex}.${currentPaper.sections[ex]}`))
  document.getElementById(`p${ex}`).removeChild(document.getElementById(`brr${ex}.${currentPaper.sections[ex]}`))

  document.getElementById(`tabe${ex}`).removeChild(document.getElementById(`trn${ex}.${currentPaper.sections[ex]}`))

  currentPaper.sections[ex] = currentPaper.sections[ex] - 1
}

function addques (ex) {
  currentPaper.sections[ex] = currentPaper.sections[ex] + 1

  var tx = document.createElement(`input`)
  tx.setAttribute(`value`, `Q ${currentPaper.sections[ex]} )`)
  tx.setAttribute(`size`, 3)
  tx.setAttribute(`onKeyUp`, `show()`)
  tx.setAttribute(`onfocus`, `blurrer(), this.name='act'`)
  tx.id = `tx${ex}.${currentPaper.sections[ex]}`
  tx.setAttribute(`onkeypress`, `handle(event)`)

  var inx = document.createElement(`input`)
  inx.setAttribute(`id`, `in${ex}.${currentPaper.sections[ex]}`)
  inx.setAttribute(`name`, `not`)
  inx.setAttribute(`size`, `30`)
  inx.setAttribute(`onfocus`, `blurrer(), this.name='act'`)
  inx.setAttribute(`onkeyup`, `show()`)
  inx.setAttribute(`onkeypress`, `handle(event)`)

  var brr = document.createElement(`br`)
  brr.id = `brr${ex}.${currentPaper.sections[ex]}`

  document.getElementById(`p${ex}`).appendChild(tx)
  document.getElementById(`p${ex}`).appendChild(inx)
  document.getElementById(`p${ex}`).appendChild(brr)

  var trn = document.createElement(`tr`)
  trn.id = `trn${ex}.${currentPaper.sections[ex]}`

  var tdne = document.createElement(`td`)
  tdne.innerHTML = `Q ` + currentPaper.sections[ex] + `) `
  tdne.setAttribute(`valign`, `top`)
  tdne.id = `tdne${ex}.${currentPaper.sections[ex]}`

  tdne.setAttribute(`width`, `10%`)

  var tdn = document.createElement(`td`)
  tdn.id = `tdn${ex}.${currentPaper.sections[ex]}`

  document.getElementById(`tabe${ex}`).appendChild(trn)
  document.getElementById(`trn${ex}.${currentPaper.sections[ex]}`).appendChild(tdne)
  document.getElementById(`trn${ex}.${currentPaper.sections[ex]}`).appendChild(tdn)
}

function show () {
  for (var p = 1; p <= currentPaper.qCount; p++) {
    document.getElementById(`td${p}`).innerHTML = document.getElementById(`Section${p}`).value
    for (var q = 1; q <= currentPaper.sections[p]; q++) {
      document.getElementById(`tdne${p}.${q}`).innerHTML = document.getElementById(`tx${p}.${q}`).value
      document.getElementById(`tdn${p}.${q}`).innerHTML = document.getElementById(`in${p}.${q}`).value
    }
  }
}

function blurrer () {
  var x = document.getElementsByTagName(`input`)
  for (var i = 0; i < x.length; i++) {
    x[i].setAttribute(`name`, `not`)
  }
}

function addsymb (sym) {
  var el = document.getElementsByName(`act`)[0]
  var start = el.selectionStart
  var end = el.selectionEnd
  var text = el.value
  var before = text.substring(0, start)
  var after = text.substring(end, text.length)
  el.value = (before + sym + after)
  el.selectionStart = el.selectionEnd = start + sym.length
  el.focus()
}

function handle (e) {
  if (e.keyCode === 13) {
    e.preventDefault() // Ensure it is only this code that rusn
    addNewLine()
  }
}

function addNewLine () {
  var el = document.getElementsByName(`act`)[0]
  var start = el.selectionStart
  var end = el.selectionEnd
  var text = el.value
  var before = text.substring(0, start)
  var after = text.substring(end, text.length)
  el.value = (before + `<br>` + after)
  el.selectionStart = el.selectionEnd = start + `<br>`.length
  el.focus()
}

function superScript () {
  var el = document.getElementsByName(`act`)[0]
  var start = el.selectionStart
  var end = el.selectionEnd
  var text = el.value
  var before = text.substring(0, start)
  var after = text.substring(end, text.length)
  el.value = (before + `<sup>` + document.getElementById(`sup`).value + `</sup>` + after)
  el.selectionStart = el.selectionEnd = start + (`<sup>` + document.getElementById(`sup`).value + `</sup>`).length
  el.focus()
}

function subScript () {
  var el = document.getElementsByName(`act`)[0]
  var start = el.selectionStart
  var end = el.selectionEnd
  var text = el.value
  var before = text.substring(0, start)
  var after = text.substring(end, text.length)
  el.value = (before + `<sub>` + document.getElementById(`sub`).value + `</sub>` + after)
  el.selectionStart = el.selectionEnd = start + (`<sub>` + document.getElementById(`sub`).value + `</sub>`).length
  el.focus()
}

function scramble4 () {
  for (var scrm = 1; scrm <= 4; scrm++) {
    show()
    scramble()
    build(scrm)
  }
  alert(`Done!`)
}

function scramble () {
  var t
  var swap
  var tmp = [[]]
  for (var mx = 1; mx <= currentPaper.qCount; mx++) {
    tmp[mx] = []
    for (var nx = 1; nx <= currentPaper.sections[mx]; nx++) {
      tmp[mx][nx] = document.getElementById(`tdn${mx}.${nx}`).innerHTML
      if (document.getElementById(`chkbox` + mx).checked === true) {
        t = Math.ceil(Math.random() * nx)
      } else {
        t = nx
      }
      swap = tmp[mx][nx]
      tmp[mx][nx] = tmp[mx][t]
      document.getElementById(`tdn${mx}.${nx}`).innerHTML = tmp[mx][nx]
      tmp[mx][t] = swap
      document.getElementById(`tdn${mx}.${t}`).innerHTML = tmp[mx][t]
    }
  }
}

/* TODO image support?

*****************DO NOT EDIT****************

function addImg() {
var h = document.getElementById(`iheight`).value;
var w = document.getElementById(`iwidth`).value;
var path = document.getElementById(`myImg`).value;

var oldtxt = document.getElementsByName(`act`)[0].value;

document.getElementsByName(`act`)[0].value = oldtxt + `<img src=`+``` +path+``` +` `+`height=`+h+` `+`width=`+w+` `+`>` ;

document.getElementsByName(`act`)[0].focus();

}

*/
