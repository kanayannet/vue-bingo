const Logic = require('./logic')
const Vue = require('vue')
const $ = require('jquery')

Vue.component('result', {
  props: ['result'],
  template: '<div class="result">{{ result }}</div>'
})

const Result = new Vue({
  el: '#js-result',
  data: {
    results: [
    ]
  },
  computed: {
    bingoResults: function() {
      let domLength = $('.result').length
      if(domLength %30 == 0){
        $('.result:last-child').after('<div style="display:table-row"></div>')
      }
      return this.results
    }
  }
})

Vue.component('bingo-number', {
  props: ['number'],
  template: '<span>{{ number }}</span>'
})

const Core = new Vue({
  el: '#js-open',
  data: {
    bingoNumber: ''
  },
  methods: {
    play: function() {
      Logic.audioPlay($('#audio')[0])
      Logic.shuffle({
        coreObj: this,
        coreDataKey: 'bingoNumber',
        resultObj: Result,
        resultDataKye: 'results'
      })
    }
  }
})

$(document).on('click keydown touchstart','body', function(){
  Core.play()
})
