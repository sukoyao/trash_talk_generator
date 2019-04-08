function sample(arr) {
  const index = Math.floor(Math.random() * arr.length)
  return arr[index]
}

const task = {
  Engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
  Designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
  Entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
}

const phrase = ['很簡單吧!', '很容易吧!', '很快吧!', '很正常吧!']

function generateTrashTalk({ job }) {
  return job ? `身為一個${job}${sample(task[job])}${sample(phrase)}`
    : '請選擇一個你想說幹話的對象.'
}

// export generatePassword function for other files to use
module.exports = generateTrashTalk