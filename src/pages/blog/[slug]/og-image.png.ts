import satori from 'satori';
import fs from 'fs/promises';
import sharp from 'sharp';
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { readTime } from '../../../lib/utils';

export async function getStaticPaths() {
  const post = await getCollection('blog');
  return post.map((i) => ({
    params: { slug: i.id },
    props: { post: i },
  }));
}

export const GET: APIRoute = async function get({ props }) {
  const sfPro = await fs.readFile('./public/fonts/Outfit-SemiBold.ttf');

  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#FFFFFF',
          fontFamily: 'SF Pro',
        },
        children: [
          {
            type: 'div',
            props: {
              style: {
                width: '100%',
                height: '100px',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
              },
              children: [
                {
                  type: 'div',
                  props: {
                    style: {
                      width: '30px',
                      height: '30px',
                      backgroundColor: '#C94EB2',
                      display: 'flex',
                      marginLeft: '2rem',
                    },
                    children: [],
                  },
                },
                {
                  type: 'div',
                  props: {
                    style: {
                      fontWeight: '900',
                      fontSize: '30px',
                      display: 'flex',
                      color: 'rgb(58, 58, 58)',
                    },
                    children: ['daily.dairewahandi.or.id'],
                  },
                },
              ],
            },
          },
          {
            type: 'div',
            props: {
              style: {
                width: '70%',
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
              },
              children: [
                {
                  type: 'div',
                  props: {
                    style: {
                      display: 'flex',
                      flexDirection: 'column',
                    },
                    children: [
                      {
                        type: 'p',
                        props: {
                          style: {
                            fontSize: '30px',
                            fontWeight: 'bold',
                            marginLeft: '2rem',
                            color: 'rgb(58, 58, 58)',
                          },
                          children: [
                            {
                              type: 'span',
                              props: {
                                style: {
                                  fontWeight: 'normal',
                                  color: '#4f4f4f',
                                  // marginRight: '5rem',
                                },
                                children: ['Blog/'],
                              },
                            },
                            props.post.data.title,
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            type: 'div',
            props: {
              style: {
                width: '100%',
                height: '150px',
                display: 'flex',
                flexDirection: 'column',
              },
              children: [
                {
                  type: 'div',
                  props: {
                    style: {
                      width: '100%',
                      flexGrow: 1,
                      backgroundColor: 'rgba(230, 230, 230, 0.78)',
                      display: 'flex',
                      gap: '2rem',
                    },
                    children: [
                      {
                        type: 'div',
                        props: {
                          style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '.5rem',
                            paddingLeft: '2rem',
                          },
                          children: [
                            {
                              type: 'div',
                              props: {
                                style: {
                                  display: 'flex',
                                },
                                children: [
                                  {
                                    type: 'svg',
                                    props: {
                                      xmlns: 'http://www.w3.org/2000/svg',
                                      width: '24',
                                      height: '24',
                                      viewBox: '0 0 24 24',
                                      fill: 'currentColor',
                                      children: [
                                        {
                                          type: 'path',
                                          props: {
                                            stroke: 'none',
                                            d: 'M0 0h24v24H0z',
                                            fill: 'none',
                                          },
                                        },
                                        {
                                          type: 'path',
                                          props: {
                                            d: 'M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-5 2.66a1 1 0 0 0 -.993 .883l-.007 .117v5l.009 .131a1 1 0 0 0 .197 .477l.087 .1l3 3l.094 .082a1 1 0 0 0 1.226 0l.094 -.083l.083 -.094a1 1 0 0 0 0 -1.226l-.083 -.094l-2.707 -2.708v-4.585l-.007 -.117a1 1 0 0 0 -.993 -.883z',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              type: 'div',
                              props: {
                                style: {
                                  display: 'flex',
                                },
                                children: readTime(props.post.body ? props.post.body.toString() : '') + ' min read',
                              },
                            },
                          ],
                        },
                      },
                      {
                        type: 'div',
                        props: {
                          style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '.5rem',
                          },
                          children: [
                            {
                              type: 'div',
                              props: {
                                style: {
                                  display: 'flex',
                                },
                                children: [
                                  {
                                    type: 'svg',
                                    props: {
                                      xmlns: 'http://www.w3.org/2000/svg',
                                      width: '24',
                                      height: '24',
                                      viewBox: '0 0 24 24',
                                      fill: 'none',
                                      stroke: 'currentColor',
                                      strokeWidth: '2',
                                      strokeLinecap: 'round',
                                      strokeLinejoin: 'round',
                                      children: [
                                        {
                                          type: 'path',
                                          props: {
                                            stroke: 'none',
                                            d: 'M0 0h24v24H0z',
                                            fill: 'none',
                                          },
                                        },
                                        {
                                          type: 'path',
                                          props: {
                                            d: 'M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0',
                                          },
                                        },
                                        {
                                          type: 'path',
                                          props: {
                                            d: 'M6 21v-2a4 4 0 0 1 4 -4h3.5',
                                          },
                                        },
                                        {
                                          type: 'path',
                                          props: {
                                            d: 'M20 21l2 -2l-2 -2',
                                          },
                                        },
                                        {
                                          type: 'path',
                                          props: {
                                            d: 'M17 17l-2 2l2 2',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              type: 'div',
                              props: {
                                style: {
                                  display: 'flex',
                                },
                                children: props.post.data.author,
                              },
                            },
                          ],
                        },
                      },
                      {
                        type: 'div',
                        props: {
                          style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '.5rem',
                          },
                          children: [
                            {
                              type: 'div',
                              props: {
                                style: {
                                  display: 'flex',
                                },
                                children: [
                                  {
                                    type: 'svg',
                                    props: {
                                      xmlns: 'http://www.w3.org/2000/svg',
                                      width: '24',
                                      height: '24',
                                      viewBox: '0 0 24 24',
                                      fill: 'currentColor',
                                      children: [
                                        {
                                          type: 'path',
                                          props: {
                                            stroke: 'none',
                                            d: 'M0 0h24v24H0z',
                                            fill: 'none',
                                          },
                                        },
                                        {
                                          type: 'path',
                                          props: {
                                            d: 'M11.172 2a3 3 0 0 1 2.121 .879l7.71 7.71a3.41 3.41 0 0 1 0 4.822l-5.592 5.592a3.41 3.41 0 0 1 -4.822 0l-7.71 -7.71a3 3 0 0 1 -.879 -2.121v-5.172a4 4 0 0 1 4 -4zm-3.672 3.5a2 2 0 0 0 -1.995 1.85l-.005 .15a2 2 0 1 0 2 -2',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              type: 'div',
                              props: {
                                style: {
                                  display: 'flex',
                                },
                                children: props.post.data.tags,
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  type: 'div',
                  props: {
                    style: {
                      display: 'flex',
                      width: '100%',
                      height: '20px',
                    },
                    children: [
                      {
                        type: 'div',
                        props: {
                          style: {
                            width: '50%',
                            height: '20px',
                            display: 'flex',
                            backgroundColor: '#C94EB2',
                          },
                          children: [],
                        },
                      },
                      {
                        type: 'div',
                        props: {
                          style: {
                            width: '40%',
                            height: '20px',
                            display: 'flex',
                            backgroundColor: '#8ae452',
                          },
                          children: [],
                        },
                      },
                      {
                        type: 'div',
                        props: {
                          style: {
                            width: '10%',
                            height: '20px',
                            display: 'flex',
                            backgroundColor: '#5598eb',
                          },
                          children: [],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'SF Pro',
          data: sfPro,
          style: 'normal',
        },
      ],
    },
  );

  const png = await sharp(Buffer.from(svg)).png().toBuffer();

  return new Response(png, {
    headers: {
      'content-type': 'image/png',
    },
  });
};
