import React from "react";
import { Links } from '../api/links';
import LinksList from './LinksList';
import PrivateHeader from './PrivateHeader';
import AddLink from './AddLink';
import LinksListFilter from './LinksListFilters';

const Link = () => {
  return (
    <div>
      <PrivateHeader title="Your Links" />
      <LinksListFilter />
      <LinksList />
      <AddLink />
    </div>
  );
}

export default Link;
