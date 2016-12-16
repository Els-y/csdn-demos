(function() {
  $(function() {
    // marked
    var markedRender = new marked.Renderer();
    marked.setOptions({
      renderer: markedRender,
      gfm: true,
      tables: true,
      breaks: true,  // '>' 换行，回车换成 <br>
      pedantic: false,
      sanitize: true,
      smartLists: true,
      smartypants: false
    });

    // codemirror editor
    var editor = CodeMirror.fromTextArea($('#editor').get(0), {
      mode: 'markdown',
      lineNumbers: true,
      autoCloseBrackets: true,
      matchBrackets: true,
      showCursorWhenSelecting: true,
      lineWrapping: true,  // 长句子折行
      theme: "material",
      keyMap: 'sublime',
      extraKeys: {"Enter": "newlineAndIndentContinueMarkdownList"}
    });
    editor.on('change', editorOnHandler);
  });

  function editorOnHandler(cm, co) {
    $('.markdown-body').html(marked(cm.getValue()));
    $('.markdown-body pre code').each(function(i, block) {
      Prism.highlightElement(block);
    });
  }
})();