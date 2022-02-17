import fs from 'fs';
import {join} from 'path';
import matter from 'gray-matter';

const _basePath = join(process.cwd(), 'constants/_posts');

export function getPostBySlug(slug) {
    const path = join(_basePath, `${slug}.md`);
    const fileContents = fs.readFileSync(path, 'utf8')
    const { data, content } = matter(fileContents)

    return {data, content};
}