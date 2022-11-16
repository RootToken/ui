import { useState } from "react";
import { MoreHorizontal } from "react-feather";
import { Link } from "react-router-dom";
import AccountPopover from "../../components/AccountPopover";
import MenuModal from "../../components/MenuModal";
import * as S from "./styled";

export default function MainLayout({ children }: { children: JSX.Element }) {
  const [open, setOpen] = useState(false);
  return (
    <S.Layout>
      <S.Header>
        <div>
          <Link to="/">
            <img src="/root-logo.svg" alt="Root Logo" />
          </Link>
        </div>
        <div className="right">
          <ul className="menu">
            <li>
              <a className="wc" href="https://app.betparadox.com/soccer/root-0" target="_blank">
                2022 FIFA World Cup Pool
              </a>
            </li>
            <li>
              <a target="_blank" href="https://roottoken.org/root.pdf">
                Whitepaper
              </a>
            </li>
            <li>
              <a href="https://github.com/RootToken" target="_blank">
                Github
              </a>
            </li>
            <li>
              <a href="https://twitter.com/rootsmoney" target="_blank">
                Twitter
              </a>
            </li>
            <li>
              <a target="_blank" href="https://docs.roottoken.org">
                Docs
              </a>
            </li>
            <li>
              <a href="https://bean.money" target="_blank">
                Beanstalk
              </a>
            </li>
            <li>
              <Link to="/dashboard">
                <a>Dashboard</a>
              </Link>
            </li>
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
