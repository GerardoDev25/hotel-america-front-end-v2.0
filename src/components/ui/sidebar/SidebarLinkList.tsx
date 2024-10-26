import { SidebarOption, LinkProperties } from '.';

export const SidebarLinkList = ({ links }: { links: LinkProperties[] }) => {
  return (
    <>
      {links.map((link) => (
        <SidebarOption
          key={link.url}
          url={link.url}
          icon={link.icon}
          text={link.text}
        />
      ))}
    </>
  );
};
