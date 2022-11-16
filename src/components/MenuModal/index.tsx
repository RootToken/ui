import { ExternalLink, X } from "react-feather";

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
            <a href="https://betparadox.com" target="_blank">
              <button>
                <span>2022 FIFA World Cup Pool</span>
                <ExternalLink size={18} color="#FFF" />
              </button>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://46kcia6hnco4xe5n3xj54nm7fypseqdnf5xifprcwyiyvambjumq.arweave.net/55QkA8doncuTrd3T3jWfLh8iQG0vboK-IrYRioGBTRk"
            >
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
