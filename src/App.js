import React, { useState, useEffect } from "react";
import { Container, TextField, Button, Typography, List, ListItem, ListItemText, IconButton, Box, Alert } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

function App() {
  const [gastos, setGastos] = useState([]);
  const [nome, setNome] = useState("");
  const [data, setData] = useState("");
  const [valor, setValor] = useState("");
  const [erro, setErro] = useState("");

  // Carrega os dados do LocalStorage ao iniciar
  useEffect(() => {
    const gastosSalvos = JSON.parse(localStorage.getItem("gastos"));
    if (gastosSalvos) {
      setGastos(gastosSalvos);
    }
  }, []);

  // Atualiza o LocalStorage sempre que a lista de gastos mudar
  useEffect(() => {
    localStorage.setItem("gastos", JSON.stringify(gastos));
  }, [gastos]);

  const adicionarGasto = () => {
    if (!nome || !data || !valor) {
      setErro("Todos os campos são obrigatórios");
      return;
    }

    // Validação para garantir que a data seja de 2020 ou posterior
    const ano = new Date(data).getFullYear();
    if (ano < 2020) {
      setErro("A data deve ser de 2020 ou posterior");
      return;
    }

    const novoGasto = { nome, data, valor: parseFloat(valor) };
    setGastos([...gastos, novoGasto]);
    setNome("");
    setData("");
    setValor("");
    setErro(""); // Limpa o erro após adicionar o gasto com sucesso
  };

  const removerGasto = (index) => {
    const novosGastos = gastos.filter((_, i) => i !== index);
    setGastos(novosGastos);
  };

  const valorTotal = gastos.reduce((acc, gasto) => acc + gasto.valor, 0);

  return (
    <Container>
      <Typography variant="h4" gutterBottom align="center">
        Registro de Gastos
      </Typography>

      {/* Exibe a mensagem de erro se houver */}
      {erro && (
        <Alert severity="error" style={{ marginBottom: "20px" }}>
          {erro}
        </Alert>
      )}

      <Box sx={{ marginBottom: "20px" }}>
        <TextField
          label="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Data"
          type="date"
          value={data}
          onChange={(e) => setData(e.target.value)}
          fullWidth
          margin="normal"
          required
          slotProps={{
            inputLabel: { shrink: true },
          }}
        />
        <TextField
          label="Valor (R$)"
          type="number"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
      </Box>

      <Button
        variant="contained"
        color="primary"
        onClick={adicionarGasto}
        fullWidth
        style={{ marginBottom: "20px" }}
      >
        Adicionar Gasto
      </Button>

      <List sx={{ backgroundColor: '#f5f5f5', borderRadius: '8px', padding: '10px' }}>
        {gastos.length === 0 ? (
          <Typography variant="body1" align="center">
            Nenhum gasto registrado.
          </Typography>
        ) : (
          gastos.map((gasto, index) => (
            <ListItem
              key={index}
              secondaryAction={
                <IconButton edge="end" onClick={() => removerGasto(index)}>
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemText
                primary={gasto.nome}
                secondary={`${gasto.data} - R$ ${gasto.valor.toFixed(2)}`}
              />
            </ListItem>
          ))
        )}
      </List>

      <Typography variant="h6" gutterBottom style={{ marginTop: "20px" }} align="center">
        Total Gasto: R$ {valorTotal.toFixed(2)}
      </Typography>
    </Container>
  );
}

export default App;
