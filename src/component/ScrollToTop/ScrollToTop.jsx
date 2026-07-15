import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
        const { pathname } = useLocation();

        useEffect(() => {
                  const html = document.documentElement;
                  const body = document.body;
                  const previousHtmlBehavior = html.style.scrollBehavior;
                  const previousBodyBehavior = body.style.scrollBehavior;

                      html.style.scrollBehavior = 'auto';
                  body.style.scrollBehavior = 'auto';

                      window.scrollTo(0, 0);

                      requestAnimationFrame(() => {
                                  html.style.scrollBehavior = previousHtmlBehavior;
                                  body.style.scrollBehavior = previousBodyBehavior;
                      });
        }, [pathname]);

        return null;
};

export default ScrollToTop;
