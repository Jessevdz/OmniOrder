export const trackEvent = (eventName: string, data?: Record<string, any>) => {
    if (window.umami) {
        window.umami.track(eventName, data);
    }
};

export const identifyUser = (data: Record<string, any>) => {
    if (window.umami) {
        window.umami.identify(data);
    }
};