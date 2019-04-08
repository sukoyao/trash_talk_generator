const task = {
  engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
  designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
  entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
}

const phrase = ['很簡單吧!', '很容易吧!', '很快吧!', '很正常吧!']

function generateTrashTalk(target) {
  const phraseBox = Math.floor(Math.random() * phrase.length)
  let trashTalk = ''
  if (target.job === 'engineer') {
    const engineerBox = Math.floor(Math.random() * task.engineer.length)
    trashTalk = '身為一個工程師' + task.engineer[engineerBox]
  }

  if (target.job === 'designer') {
    const designerBox = Math.floor(Math.random() * task.designer.length)
    trashTalk = '身為一個設計師' + task.designer[designerBox]
  }

  if (target.job === 'entrepreneur') {
    const entrepreneurBox = Math.floor(Math.random() * task.entrepreneur.length)
    trashTalk = '身為一個創業家' + task.entrepreneur[entrepreneurBox]
  }

  if (trashTalk.length === 0) {
    return '請選擇一個你想說幹話的對象.'
  }

  return trashTalk += phrase[phraseBox]

}
// export generatePassword function for other files to use
module.exports = generateTrashTalk