import React from 'react';
import PageTemplate from 'components/templates/PageTemplate/PageTemplate';
import { SEO } from 'components/SEO';

const NotFoundPage = () => {
  return (
    <PageTemplate>
      <h2>Ups, wystąpił błąd :(</h2>
      <p>Wygląda na to, że strona, której szukasz nie istnieje.</p>
    </PageTemplate>
  );
};

export default NotFoundPage;
export const Head = () => <SEO title="404" />;
