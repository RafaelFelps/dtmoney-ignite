import Modal from "react-modal";
import { Container, TransactionTypeContainer } from "./styles";
import fechar from "../../assets/fechar.svg";
import incomeImage from '../../assets/entradas.svg';
import outcomeImage from '../../assets/saidas.svg';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <h2>Cadastrar transação</h2>

      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={fechar} alt="Fechar modal" />
      </button>

      <Container>
        <input placeholder="Titulo" />

        <input type="number" placeholder="Valor" />

        <TransactionTypeContainer>
          
          <button
            type="button">
            <img src={incomeImage} alt="Entrada" />
            <span>Entrada</span>
          </button>

          <button
            type="button">
            <img src={outcomeImage} alt="Entrada" />
            <span>Saída</span>
          </button>

        </TransactionTypeContainer>

        <input placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
