import { notFound } from 'next/navigation';
import { getNewsDatail } from '@/app/_libs/microcms';
import styles from './page.module.css';
import Article from '@/app/_components/Articles';
import ButtonLink from '@/app/_components/ButtonLink';

type Props = {
  params: {
    slug: string;
  };
  searchParams: {
    dk?: string;
  };
};



export default async function Page({ params, searchParams }: Props) {
  const data = await getNewsDatail(params.slug, {
    draftKey: searchParams.dk,
  })
  .catch(notFound);

  return (
    <>
      <Article data={data} />
      <div className={styles.footer}>
        <ButtonLink href="/news">ニュース一覧へ</ButtonLink>
      </div>
    </>
  );
}
