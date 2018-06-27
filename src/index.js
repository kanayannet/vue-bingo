const Logic = require('./logic')

const Result = new Vue({
  el: '#js-result',
  data: {
    results: [
    ]
  },
  computed: {
    bingoResults: function() {
      if(this.results.length %31 == 0){
        $('.result:last-child').after('<div style="display:table-row"></div>')
      }
      return this.results
    }
  }
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
  Core.play();
})
