export const scrollToTarget = (duaId) => {
    if (duaId) {
      const element = document.getElementById(`${duaId}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };