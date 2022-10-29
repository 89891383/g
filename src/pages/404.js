import React from 'react';
import PageTemplate from '@templates/PageTemplate/PageTemplate';

const NotFoundPage = () => {
  return (
    <PageTemplate>
      <h2>Ups, wystąpił błąd :(</h2>
      <p>Wygląda na to, że strona, której szukasz nie istnieje.</p>
    </PageTemplate>
  );
};

export default NotFoundPage;
