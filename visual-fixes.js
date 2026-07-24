(() => {
  const stylesheet = document.createElement('link');
  stylesheet.rel = 'stylesheet';
  stylesheet.href = 'scale-fixes.css?v=2';
  document.head.appendChild(stylesheet);

  const stages = {
    clocked: '<span class="artisan-bomb"></span><span class="artisan-bomb small"></span><span class="artisan-bomb small right"></span>',
    dnd: '<span class="artisan-bomb"></span><span class="artisan-bomb small"></span><span class="artisan-bomb small right"></span>',
    main: '<span class="artisan-bomb"></span><span class="artisan-bomb small"></span><span class="artisan-bomb small right"></span>'
  };

  document.querySelectorAll('.collection-card[data-collection]').forEach(card => {
    const key = card.dataset.collection;
    const oldImage = card.querySelector('img');
    if (oldImage) oldImage.remove();
    if (!card.querySelector('.collection-stage')) {
      const stage = document.createElement('div');
      stage.className = `collection-stage ${key}`;
      stage.setAttribute('aria-hidden', 'true');
      stage.innerHTML = stages[key] || stages.clocked;
      card.prepend(stage);
    }
  });
})();
