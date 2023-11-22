export const scrollToTarget = (Id) => {
    if (Id) {
      const element = document.getElementById(`${Id}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };