import { ExternalLink, X } from "react-feather";
import { Link } from "react-router-dom";

import * as S from "./styled";

interface ModalProps {
  open: boolean;
  onClose: () => void;
}

export default function MenuModal({ open, onClose }: ModalProps) {
  return (
    <S.Modal
      overlayClassName="modalOverlay"
      shouldCloseOnEsc
      shouldCloseOnOverlayClick
      isOpen={open}
      onRequestClose={onClose}
      appElement={document.getElementById("root") as HTMLElement}
    >
      <S.Body>
        <S.Header>
          <h4>LINKS</h4>
          <button onClick={onClose}>
            <X color="#E4E4E6" size={20} />
          </button>
        </S.Header>
        <S.List>
          <li>
            <Link to="/" onClick={() => onClose()}>
              <button>
                <span>Home</span>
              </button>
            </Link>
          </li>
          <li>
            <Link to="/dashboard" onClick={() => onClose()}>
              <button>
                <span>Dashboard</span>
              </button>
            </Link>
          </li>
          <li>
            <a href="https://app.betparadox.com/soccer/root-5" target="_blank">
              <button>
                <span>2022 FIFA World Cup Pool</span>
                <ExternalLink size={18} color="#FFF" />
              </button>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://roottoken.org/root.pdf">
              <button>
                <span>Root Token Whitepaper</span>
                <ExternalLink size={18} color="#FFF" />
              </button>
            </a>
          </li>
          <li>
            <a href="https://github.com/RootToken" target="_blank">
              <button>
                <span>Github</span>
                <ExternalLink size={18} color="#FFF" />
              </button>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/rootsmoney" target="_blank">
              <button>
                <span>Twitter</span>
                <ExternalLink size={18} color="#FFF" />
              </button>
            </a>
          </li>
          {/* <li>
            <a href="/">
              <button>
                <span>Discord</span>
                <ExternalLink size={18} color="#FFF" />
              </button>
            </a>
          </li> */}
          <li>
            <a href="https://bean.money" target="_blank">
              <button>
                <span>Beanstalk</span>
                <ExternalLink size={18} color="#FFF" />
              </button>
            </a>
          </li>
        </S.List>
      </S.Body>
    </S.Modal>
  );
}
