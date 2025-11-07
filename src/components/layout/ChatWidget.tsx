import { useEffect } from 'react';
import { BUSINESS_INFO } from '@/lib/constants';

export function ChatWidget() {
  useEffect(() => {
    // Defer chat widget loading to improve initial page load
    const timer = setTimeout(() => {
      const script = document.createElement('script');
      script.src = 'https://widgets.leadconnectorhq.com/loader.js';
      script.setAttribute('data-resources-url', 'https://widgets.leadconnectorhq.com/chat-widget/loader.js');
      script.setAttribute('data-widget-id', BUSINESS_INFO.integrations.chatWidgetId);
      script.setAttribute('aria-label', 'Open chat to book tree service');
      script.async = true;
      script.defer = true;
      
      script.onload = () => {
        if (import.meta.env.DEV) {
          console.log('Chat widget loaded');
        }
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'chat_widget_loaded', {
            event_category: 'engagement'
          });
        }
      };
      
      document.body.appendChild(script);
    }, 1000);

    return () => {
      clearTimeout(timer);
      const script = document.querySelector('script[src="https://widgets.leadconnectorhq.com/loader.js"]');
      if (script && document.body.contains(script)) {
        document.body.removeChild(script);
      }
      const widget = document.querySelector(`[data-widget-id="${BUSINESS_INFO.integrations.chatWidgetId}"]`);
      if (widget?.parentNode) {
        widget.parentNode.removeChild(widget);
      }
    };
  }, []);

  return null;
}
