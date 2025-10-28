import { useEffect } from 'react';
import { BUSINESS_INFO } from '@/lib/constants';

export function ChatWidget() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://widgets.leadconnectorhq.com/loader.js';
    script.setAttribute('data-resources-url', 'https://widgets.leadconnectorhq.com/chat-widget/loader.js');
    script.setAttribute('data-widget-id', BUSINESS_INFO.integrations.chatWidgetId);
    script.async = true;
    
    script.onload = () => {
      console.log('Chat widget loaded');
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'chat_widget_loaded', {
          event_category: 'engagement'
        });
      }
    };
    
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
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
