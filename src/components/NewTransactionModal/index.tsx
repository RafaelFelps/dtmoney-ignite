import Modal from "react-modal";
import { Container, TransactionTypeContainer, RadioBox } from "./styles";
import fechar from "../../assets/fechar.svg";
import incomeImage from '../../assets/entradas.svg';
import outcomeImage from '../../assets/saidas.svg';
import { useState } from "react";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {

  const [type, setType] = useState('deposit');

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

          <RadioBox
            type="button"
            onClick={() => { setType('deposit') }}
            isActive={type === 'deposit'}
          >
            <img src={incomeImage} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => { setType('withdraw') }}
            isActive={type === 'withdraw'}
          >
            <img src={outcomeImage} alt="Saida" />
            <span>Saída</span>
          </RadioBox>

        </TransactionTypeContainer>

        <input placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
