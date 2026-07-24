(() => {
  const asset='assets/hero.webp?v=4';
  const hero=document.querySelector('.hero-image img');
  if(hero){hero.src=asset;hero.alt='Handmade botanical bath bombs arranged on natural linen';hero.style.objectPosition='50% 50%'}
  const story=document.querySelector('.story-image img');
  if(story){story.src=asset;story.alt='Botanical bath bombs handmade in small batches';story.style.objectPosition='14% 48%'}
  const positions={clocked:'78% 55%',dnd:'12% 42%',main:'38% 76%'};
  document.querySelectorAll('.collection[data-filter]').forEach(card=>{
    const key=card.dataset.filter;
    const image=card.querySelector('img');
    if(!image)return;
    image.src=asset;
    image.style.objectPosition=positions[key]||'50% 50%';
    image.alt=key==='clocked'?'Fresh botanical bath bombs':key==='dnd'?'Lavender botanical bath bombs':'Rose botanical bath bombs';
  });
})();