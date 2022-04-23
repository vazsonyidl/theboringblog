import fs from 'fs';
import path from 'path';
import { bundleMDX } from 'mdx-bundler';
import { isBefore, parse } from 'date-fns';
import readingTime from 'reading-time';

const postsDir = path.join(process.cwd(), 'constants/_posts');

export function getAllPostSlugs() {
  return fs.readdirSync(postsDir);
}

export async function getPostDataBySlug(slug) {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = path.join(postsDir, `${realSlug}.mdx`);
  const source = fs.readFileSync(fullPath, 'utf-8');
  const time = readingTime(source).text;

  const { code, frontmatter } = await bundleMDX(
    { source: source, cwd: process.cwd() },
    {
      xdmOptions(options) {
        options.remarkPlugins = [...(options?.remarkPlugins ?? []), remarkGfm];
        options.rehypePlugins = [
          ...(options?.rehypePlugins ?? []),
          rehypePrism,
        ];
        return options;
      },
    }
  );

  return {
    slug: realSlug,
    meta: { ...frontmatter, time },
    code,
  };
}

export async function getAllPosts() {
  const slugs = getAllPostSlugs();
  const parseDate = (date) => parse(date, 'dd.MM.yyyy', new Date());

  const posts = Promise.all(slugs.map((slug) => getPostDataBySlug(slug))).then(
    (posts) => {
      return posts.sort((a, b) => {
        return isBefore(
          parseDate(a?.meta?.published),
          parseDate(b?.meta?.published)
        )
          ? 1
          : -1;
      });
    }
  );
  return posts;
}
