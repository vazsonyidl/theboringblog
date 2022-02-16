import { getPost } from 'lib/api';
import { markdownToHtml } from 'lib/markdownToHtml';
import { useEffect } from 'react';

export default function DemoPage({ content }: { content: any }) {
  useEffect(() => {
    console.log(content);
  }, []);
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </>
  );
}

export async function getStaticProps() {
  const { content } = getPost();
  const _content = await markdownToHtml(content || '');
  return {
    props: {
      content: _content,
    },
  };
}
