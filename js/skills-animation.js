document.addEventListener('DOMContentLoaded', function() {
  const skills = document.querySelectorAll('.skill');
  
  // Animate skills with staggered delay
  skills.forEach((skill, index) => {
    setTimeout(() => {
      const fill = skill.querySelector('.skill-fill');
      if (fill) {
        fill.style.width = skill.dataset.value + '%';
      }
    }, index * 200); // 200ms delay between each skill
  });
});
