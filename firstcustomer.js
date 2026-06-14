(function() {
  var cur = 0;
  var pages = ['p0','p1','p2','p3','p4','p5'];

  function goTo(n) {
    document.getElementById(pages[cur]).classList.remove('active');
    document.querySelector('.dot[data-page="'+cur+'"]').classList.remove('active');
    cur = n;
    document.getElementById(pages[cur]).classList.add('active');
    document.querySelector('.dot[data-page="'+cur+'"]').classList.add('active');
  }

  document.getElementById('envBtn').addEventListener('click', function(){ goTo(1); });
  document.getElementById('annivNext').addEventListener('click', function(){ goTo(2); });
  document.getElementById('letterNext').addEventListener('click', function(){ goTo(3); });
  document.getElementById('memoryBack').addEventListener('click', function(){ goTo(2); });
  document.getElementById('memoryNext').addEventListener('click', function(){ goTo(4); });
  document.getElementById('flowersBack').addEventListener('click', function(){ goTo(3); });
  document.getElementById('flowersNext').addEventListener('click', function(){ goTo(5); });
  document.getElementById('songBack').addEventListener('click', function(){ goTo(4); });

  document.querySelectorAll('.dot').forEach(function(d) {
    d.addEventListener('click', function(){ goTo(parseInt(d.getAttribute('data-page'))); });
  });

  var emojis = ['🌹','🌸','🌺','❤️','🩷'];
  var pc = document.getElementById('petals');
  for (var i = 0; i < 12; i++) {
    var p = document.createElement('div');
    p.className = 'petal';
    p.textContent = emojis[Math.floor(Math.random()*emojis.length)];
    p.style.left = (Math.random()*100)+'vw';
    p.style.fontSize = (11+Math.random()*13)+'px';
    p.style.animationDuration = (7+Math.random()*10)+'s';
    p.style.animationDelay = (Math.random()*14)+'s';
    pc.appendChild(p);
  }

  document.getElementById('editBtn').addEventListener('click', function() {
    document.getElementById('eEnvTitle').value = document.getElementById('envTitle').textContent;
    document.getElementById('eLetter').value = document.getElementById('letterBody').textContent;
    document.getElementById('eR1').value = document.getElementById('r1').textContent;
    document.getElementById('eR2').value = document.getElementById('r2').textContent;
    document.getElementById('eR3').value = document.getElementById('r3').textContent;
    document.getElementById('eR4').value = document.getElementById('r4').textContent;
    document.getElementById('eSongCaption').value = document.getElementById('songCaption').textContent;
    document.getElementById('editOverlay').classList.add('open');
  });

  document.getElementById('cancelEdit').addEventListener('click', function() {
    document.getElementById('editOverlay').classList.remove('open');
  });

  document.getElementById('saveEdit').addEventListener('click', function() {
    document.getElementById('envTitle').textContent = document.getElementById('eEnvTitle').value;
    document.getElementById('letterBody').textContent = document.getElementById('eLetter').value;
    document.getElementById('r1').textContent = document.getElementById('eR1').value;
    document.getElementById('r2').textContent = document.getElementById('eR2').value;
    document.getElementById('r3').textContent = document.getElementById('eR3').value;
    document.getElementById('r4').textContent = document.getElementById('eR4').value;
    document.getElementById('songCaption').textContent = document.getElementById('eSongCaption').value;
    document.getElementById('editOverlay').classList.remove('open');
  });
})();