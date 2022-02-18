import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { isBefore, parse } from 'date-fns';

const postsDir = join(process.cwd(), 'constants/_posts');

export function getPostBySlug(slug) {
  const realSlug = slug.replace(/\.md$/, '');

  const path = join(postsDir, `${realSlug}.md`);
  const fileContents = fs.readFileSync(path, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    content,
    meta: data,
    slug: realSlug,
  };
}

export function getPostSlugs() {
  return fs.readdirSync(postsDir);
}

export function getAllPosts() {
  const slugs = getPostSlugs();

  const parseDate = (date) => parse(date, 'dd.MM.yyyy', new Date());
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .sort((a, b) => {
      return isBefore(
        parseDate(a?.meta?.published),
        parseDate(b?.meta?.published)
      )
        ? 1
        : -1;
    });

  return posts;
}
