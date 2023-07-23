export default defineNuxtPlugin({
  name: 'isMobile',
  enforce: 'pre', // or 'pre'
  async setup(nuxtApp): Promise<boolean> {
    const userAgent: string = navigator.userAgent.toLowerCase();
    const mobileKeywords: string[] = ['android', 'iphone', 'ipod', 'blackberry', 'windows phone'];
    return {
      provide: {
        isMobile: mobileKeywords.some((keyword: string) => userAgent.includes(keyword)),
        device: mobileKeywords.findLast((keyword: string) => userAgent.includes(keyword)) || 'desktop',
      },
    };
  },
});