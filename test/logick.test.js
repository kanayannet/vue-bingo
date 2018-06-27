const Logic = require('../src/logic')

const Core = {
  bingoNumber: 0
}
const Result = {
  results: []
}

// jest 非同期処理用のtimerを使う
jest.useFakeTimers()
const callback = jest.fn()

describe('Logick test', () => {
  test('shuffle', () => {
    Logic.shuffle({
      coreObj: Core,
      coreDataKey: 'bingoNumber',
      resultObj: Result,
      resultDataKye: 'results',
      jestCallback: callback
    })
    // シャッフル中の値を確認
    setTimeout(() => {
      expect(Core.bingoNumber > 0 && Core.bingoNumber <= 75).toBeTruthy()
    },100)
    // 非同期処理を終えるまで待つ
    jest.runAllTimers()
    // 確定後の値を確認
    expect(Core.bingoNumber > 0 && Core.bingoNumber <= 75).toBeTruthy()
  })
})
