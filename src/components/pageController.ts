import $ from 'jquery';

class PageController {
  private textAnimated() {
    const $text = $('.animated-text');
    let currentIndex = 0;

    this.animateText($text.eq(currentIndex));
  }

  private animateText($element: JQuery<HTMLElement>) {
    const textContent = $element.text();
    const textLength = textContent.length;
    const delay = 150; // Delay between each letter (in milliseconds)

    $element.empty();
    $element.show();

    for (let i = 0; i < textLength; i++) {
      $('<span>')
        .text(textContent.charAt(i))
        .hide()
        .appendTo($element)
        .delay(delay * i)
        .fadeIn(200);
    }

    setTimeout(() => {
      this.hideText($element);
    }, delay * textLength + 500);
  }

  private hideText($element: JQuery<HTMLElement>) {
    $element.fadeOut(200, () => {
      let $nextElement = $element.next('.animated-text');

      if ($nextElement.length === 0) {
        $nextElement = $('.animated-text').eq(0);
      }

      this.animateText($nextElement);
    });
  }

  public ready() {
    this.textAnimated();
  }
}

export default PageController;
