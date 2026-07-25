(() => {
  const PHOTO = 'https://raw.githubusercontent.com/smaffit285-sys/j9s-canni-bombs/930348d872c41659d800e9609872c765c598e3ca/assets/hero.webp';

  const stageMarkup = (kind) => `
    <div class="visual-fallback ${kind}-art" aria-hidden="true">
      <span class="art-bomb art-one"></span>
      <span class="art-bomb art-two"></span>
      <span class="art-bomb art-three"></span>
      <span class="art-leaf leaf-one"></span>
      <span class="art-leaf leaf-two"></span>
    </div>`;

  const media = [];
  const prepare = (element, kind, position) => {
    if (!element) return;
    const image = element.querySelector('img');
    if (image) image.remove();
    element.classList.add('managed-media', `${kind}-media`);
    element.style.setProperty('--photo-position', position);
    element.insertAdjacentHTML('afterbegin', stageMarkup(kind));
    media.push(element);
  };

  prepare(document.querySelector('.hero-image'), 'hero', '50% 50%');
  prepare(document.querySelector('.story-image'), 'story', '45% 52%');
  prepare(document.querySelector('.collection.clocked'), 'clocked', '82% 54%');
  prepare(document.querySelector('.collection.dnd'), 'dnd', '12% 45%');
  prepare(document.querySelector('.collection.main'), 'main', '40% 72%');

  const probe = new Image();
  probe.onload = () => media.forEach((element) => {
    element.style.backgroundImage = `linear-gradient(180deg, rgba(18,12,18,.04), rgba(18,12,18,.22)), url("${PHOTO}")`;
    element.classList.add('photo-ready');
  });
  probe.onerror = () => media.forEach((element) => element.classList.add('photo-failed'));
  probe.src = PHOTO;
})();
