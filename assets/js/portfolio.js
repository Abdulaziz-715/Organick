const form = document.querySelector('.subscribe__form');
    const number = '996555459645';

    function sendToWhatsapp(text, phone) {
      text = encodeURIComponent(text);
      let url = `https://wa.me/${phone}?text=${text}`;
      window.open(url, '_blank');
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const text = e.currentTarget.querySelector('input').value;

      if (!text.trim()) {
        alert('Введите текст сообщения!');
        return;
      }

      sendToWhatsapp(text, number);
    });