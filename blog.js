(function(){
  var list=document.getElementById('posts');
  if(!list)return;
  var items=[].slice.call(list.querySelectorAll('li'));
  var search=document.getElementById('search');
  var buttons=[].slice.call(document.querySelectorAll('.tag'));
  var empty=document.getElementById('empty');
  var active='all';
  function apply(){
    var q=search.value.trim().toLowerCase(),shown=0;
    items.forEach(function(li){
      var okTag=active==='all'||li.dataset.tags.split(' ').indexOf(active)>-1;
      var okText=!q||li.textContent.toLowerCase().indexOf(q)>-1;
      li.hidden=!(okTag&&okText);
      if(!li.hidden)shown++;
    });
    empty.hidden=shown>0;
  }
  buttons.forEach(function(b){
    b.addEventListener('click',function(){
      active=b.dataset.tag;
      buttons.forEach(function(x){x.setAttribute('aria-pressed',x===b)});
      apply();
    });
  });
  search.addEventListener('input',apply);
})();
