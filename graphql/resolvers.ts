const resolvers = {
    Query: {
      Usuarios: async (parent, args) => {
        const usuarios = [
          {
            nombre: 'Marcela',
          },
          {
            nombre: 'Pipe',
          },
          {
            nombre: 'Pedro',
          },
        ];
  
        return usuarios;
      },
    },
  };
  
  export { resolvers };