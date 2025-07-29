window.onload = () => {
  const el = document.getElementById('note');
  const saved = localStorage.getItem('mossNote');
  if (saved) el.value = saved;
  el.addEventListener('input', () => {
    localStorage.setItem('mossNote', el.value);
  });
};