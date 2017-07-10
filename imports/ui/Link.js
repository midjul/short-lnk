import React from "react";
import LinksList from './LinksList';
import PrivateHeader from './PrivateHeader';
import AddLink from './AddLink';
import LinksListFilter from './LinksListFilters';

const Link = () => {
  return (
    <div>
      <PrivateHeader title="Your Links" />
      <LinksListFilter />
      <AddLink />
      <LinksList />
    </div>
  );
}

export default Link;
