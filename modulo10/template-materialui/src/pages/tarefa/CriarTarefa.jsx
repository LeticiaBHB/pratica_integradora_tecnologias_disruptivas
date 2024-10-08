import React, { useState, useEffect } from 'react';
import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

// Componente CriarTarefa
const CriarTarefa = ({ handleClose, tarefas, setTarefas }) => {
  const [idTarefa, setIdTarefa] = useState();
  const [tituloTarefa, setTituloTarefa] = useState('');
  const [descricaoTarefa, setDescricaoTarefa] = useState('');
  const [inicioTarefa, setInicioTarefa] = useState('');
  const [fimTarefa, setFimTarefa] = useState('');
  const [recursoTarefa, setRecursoTarefa] = useState('');
  const [statusTarefa, setStatusTarefa] = useState('');

  useEffect(() => {
    const proximoId = Math.max(...tarefas.map(tarefa => tarefa.idTarefa), 0) + 1;
    setIdTarefa(proximoId);
  }, [tarefas]);

  const handleSalvar = () => {
    setTarefas([...tarefas, {
      idTarefa,
      tituloTarefa,
      descricaoTarefa,
      inicioTarefa,
      fimTarefa,
      recursoTarefa,
      statusTarefa
    }]);
    handleClose();
  };

  return (
    <Grid container spacing={2}>
      <Card sx={style}>
        <CardHeader
          title="Cadastrar Tarefa"
          subheader="Preencha os dados da tarefa"
        />
        <CardContent>
          <FormControl fullWidth margin="normal">
            <Input id="tarefa_titulo" value={tituloTarefa} onChange={e => setTituloTarefa(e.target.value)} />
            <FormHelperText>Título da Tarefa</FormHelperText>
          </FormControl>
          <FormControl fullWidth margin="normal">
            <Input id="tarefa_descricao" value={descricaoTarefa} onChange={e => setDescricaoTarefa(e.target.value)} />
            <FormHelperText>Descrição da Tarefa</FormHelperText>
          </FormControl>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <FormControl fullWidth margin="normal">
                <Input id="tarefa_inicio" type="date" value={inicioTarefa} onChange={e => setInicioTarefa(e.target.value)} />
                <FormHelperText>Início da Tarefa</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth margin="normal">
                <Input id="tarefa_fim" type="date" value={fimTarefa} onChange={e => setFimTarefa(e.target.value)} />
                <FormHelperText>Fim da Tarefa</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth margin="normal">
                <InputLabel id="tarefa_recurso_label">Recurso</InputLabel>
                <Select
                  id="tarefa_recurso"
                  value={recursoTarefa}
                  label="Recurso"
                  onChange={e => setRecursoTarefa(e.target.value)}
                >
                  <MenuItem value="Recurso 1">Recurso 1</MenuItem>
                  <MenuItem value="Recurso 2">Recurso 2</MenuItem>
                  <MenuItem value="Recurso 3">Recurso 3</MenuItem>
                </Select>
                <FormHelperText>Selecione um recurso</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth margin="normal">
                <InputLabel id="tarefa_status_label">Status</InputLabel>
                <Select
                  id="tarefa_status"
                  value={statusTarefa}
                  label="Status"
                  onChange={e => setStatusTarefa(e.target.value)}
                >
                  <MenuItem value="Aguardando">Aguardando</MenuItem>
                  <MenuItem value="Em Andamento">Em Andamento</MenuItem>
                  <MenuItem value="Concluída">Concluída</MenuItem>
                </Select>
                <FormHelperText>Selecione o status</FormHelperText>
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Button variant="contained" color="primary" onClick={handleSalvar}>Salvar</Button>
          <Button variant="outlined" color="secondary" onClick={handleClose}>Cancelar</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60%',
  bgcolor: 'background.paper',
  p: 4,
};

export default CriarTarefa;
