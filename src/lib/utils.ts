export const author = {
    name: 'Dai Rewahandi',
}

export function readTime(text: string) {
    const wordPerMinute = 200;
    const words = text.split(' ').length;

    return Math.ceil(words / wordPerMinute);
}