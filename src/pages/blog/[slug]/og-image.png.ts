import satori from 'satori';
import fs from 'fs/promises';
import sharp from 'sharp';
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export async function getStaticPaths() {
  const post = await getCollection('blog');
  return post.map((i) => ({
    params: { slug: i.id },
    props: { post: i },
  }));
}

export const GET: APIRoute = async function get({ props }) {
  const sfPro = await fs.readFile('public/fonts/SF-Pro-Display-Medium.otf');

  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          display: 'flex',
          height: '100%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          letterSpacing: '-.02em',
          fontWeight: 700,
          background: 'white',
        },
        children: [
          {
            type: 'div',
            props: {
              style: {
                left: 42,
                top: 42,
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
              },
              children: [
                {
                  type: 'span',
                  props: {
                    style: {
                      width: 24,
                      height: 24,
                      background: 'black',
                    },
                  },
                },
                {
                  type: 'span',
                  props: {
                    style: {
                      marginLeft: 8,
                      fontSize: 20,
                      color: 'black',
                    },
                    children: 'Daily.dairewahandi.or.id',
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
                flexWrap: 'wrap',
                justifyContent: 'center',
                padding: '20px 50px',
                margin: '0 42px',
                fontSize: 40,
                width: 'auto',
                maxWidth: 550,
                textAlign: 'center',
                backgroundColor: 'black',
                color: 'white',
                lineHeight: 1.4,
              },
              children: props.post.data.title,
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
