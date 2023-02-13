import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { get } from 'lodash';
import {
  FaUserCircle,
  FaEdit,
  FaWindowClose,
  FaExclamation,
} from 'react-icons/fa';

import { toast } from 'react-toastify';
import { Container } from '../../styles/GlobalStyles';
import { StudentContainer, NewStudent, ProfilePicture } from './styled';
import { notLogged } from '../../config/colors';
import Loading from '../../components/Loading';
import axios from '../../services/axios';

export default function Alunos() {
  const [alunos, setAlunos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      const response = await axios.get('/alunos');
      setAlunos(response.data);
      setIsLoading(false);
    }
    getData();
  }, []);

  const handleDeleteAsk = (e) => {
    e.preventDefault();
    const exclamation = e.currentTarget.nextSibling;
    e.currentTarget.remove();
    exclamation.setAttribute('display', 'block');
  };

  const handleDelete = async (e, id, index) => {
    e.persist();
    try {
      setIsLoading(true);
      await axios.delete(`alunos/${id}`);
      // Ta pegando o aluno e o array e ta pegando apenas o index passado por parametro
      const newAlunos = [...alunos];
      newAlunos.splice(index, 1);
      setAlunos(newAlunos);
      setIsLoading(false);
      toast.success('Aluno removido com sucesso');
    } catch (err) {
      const status = get(err, 'response.status', []);
      if (status === 401) {
        toast.error('Você precisa fazer login para ter acesso');
      } else {
        toast.error('Ocorreu um error ao excluir aluno');
      }
      setIsLoading(false);
    }
  };
  return (
    <Container>
      <Loading isLoading={isLoading} />

      <h1>Alunos</h1>

      <NewStudent to="/aluno/">Cadastrar novo aluno</NewStudent>

      <StudentContainer>
        {alunos.map((aluno, index) => (
          <div key={String(aluno.id)}>
            <ProfilePicture>
              {get(aluno, 'Fotos[0].url', false) ? (
                <img src={aluno.Fotos[0].url} alt="Profile_picture" />
              ) : (
                <FaUserCircle size={36} />
              )}
            </ProfilePicture>

            <span>{aluno.nome}</span>
            <span>{aluno.email}</span>

            <Link to={`/aluno/${aluno.id}/edit`}>
              <FaEdit size={16} />
            </Link>

            <Link onClick={handleDeleteAsk} to={`/aluno/${aluno.id}/delete`}>
              <FaWindowClose size={16} />
            </Link>

            <FaExclamation
              onClick={(e) => handleDelete(e, aluno.id, index)}
              size={16}
              display="none"
              cursor="pointer"
              color={notLogged}
            />
          </div>
        ))}
      </StudentContainer>
    </Container>
  );
}
