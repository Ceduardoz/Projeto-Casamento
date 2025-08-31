// Função para navegar entre sections
export function navigate(targetId) {
  document.querySelectorAll('.page').forEach(section => {
    section.classList.remove('active');
  });

  const target = document.getElementById(targetId);
  if (target) target.classList.add('active');
}
  