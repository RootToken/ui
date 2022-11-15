import { useState } from "react";
import { MoreHorizontal } from "react-feather";
import AccountPopover from "../../components/AccountPopover";
import MenuModal from "../../components/MenuModal";
import * as S from "./styled";

export default function MainLayout({ children }: { children: JSX.Element }) {
  const [open, setOpen] = useState(false);
  return (
    <S.Layout>
      <S.Header>
        <div>
          <img src="/root-logo.svg" alt="Root Logo" />
        </div>
        <div className="right">
          <ul className="menu">
            <li className="wc">2022 FIFA World Cup Pool</li>
            <li>Root Token Whitepaper</li>
            <li>Github</li>
            <li>Twitter</li>
            <li>Discord</li>
            <li>Beanstalk</li>
          </ul>
          <AccountPopover />
          <S.MoreButton onClick={() => setOpen(true)}>
            <MoreHorizontal size={26} color="#FFF" />
          </S.MoreButton>
        </div>
      </S.Header>
      <S.Body>
        <img className="bgTop" src="/bg-top.svg" />
        <div>{children}</div>
        <img className="bgBottom" src="/bg-bottom.svg" />
      </S.Body>
      <MenuModal open={open} onClose={() => setOpen(false)} />
    </S.Layout>
  );
}
