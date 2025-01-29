export const author = {
  name: 'Dai Rewahandi',
  desc: 'Quick and easy solutions to fix computer problems, from hardware to software. Find tips and tricks here!',
};

export const socialShare = [
  {
    name: 'twitter',
  },
  {
    name: 'facebook',
  },
  {
    name: 'linkedin',
  },
  {
    name: 'whatsapp',
  },
  {
    name: 'telegram',
  },
  {
    name: 'reddit',
  },
  {
    name: 'pinterest',
  },
];

export function readTime(text: string) {
  const wordPerMinute = 200;
  const words = text.split(' ').length;

  return Math.ceil(words / wordPerMinute);
}
