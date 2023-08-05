import PageLayout from '@components/layouts/PageLayout';
import ErrorTemplate from '@components/template/ErrorTemplate';

export default function Error() {
  return (
    <PageLayout customStyles={false}>
      <ErrorTemplate />
    </PageLayout>
  );
}
