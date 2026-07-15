import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
      const { pathname } = useLocation();

      useEffect(() => {
              const html = document.documentElement;
              const previousHtmlBehavior = html.style.scrollBehavior;
              const previousBodyBehavior = document.body.style.scrollBehavior;

                    html.style.scrollBehavior = 'auto';
              document.body.style.scrollBehavior = 'auto';

                    window.scrollTo(0, 0);

                    html.style.scrollBehavior = previousHtmlBehavior;
              document.body.style.scrollBehavior = previousBodyBehavior;
      }, [pathname]);

      return null;
};

export default ScrollToTop;
